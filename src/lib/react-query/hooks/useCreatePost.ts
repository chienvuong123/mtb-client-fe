import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api-client';

interface CreatePostData {
  title: string;
  content: string;
  // Add other post fields as needed
}

interface Post {
  id: string;
  title: string;
  content: string;
  // Add other post fields as needed
}

const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await apiClient.post<Post>('/posts', data);
  return response.data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch posts query
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
