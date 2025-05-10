'use client';

import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export function useCustomMutation<
  TData = unknown,
  TVariables = unknown,
  TError = unknown,
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables>,
    'mutationFn'
  > & {
    invalidateQueries?: string[];
  },
) {
  const queryClient = useQueryClient();
  const { invalidateQueries, ...mutationOptions } = options || {};

  return useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      // Invalidate queries if specified
      if (invalidateQueries?.length) {
        invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }
      // Call original onSuccess if provided
      mutationOptions.onSuccess?.(data, variables, context);
    },
    ...mutationOptions,
  });
}
