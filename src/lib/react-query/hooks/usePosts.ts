import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api-client';

// Types
export interface Post {
  id: number;
  title: string;
  author: string;
}

export interface CreatePostData {
  title: string;
  author: string;
}

export interface UpdatePostData {
  id: number;
  title?: string;
  author?: string;
}

// API functions
const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;
};

const getPost = async (id: number): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await apiClient.post<Post>('/posts', data);
  return response.data;
};

const updatePost = async ({ id, ...data }: UpdatePostData): Promise<Post> => {
  const response = await apiClient.put<Post>(`/posts/${id}`, data);
  return response.data;
};

const deletePost = async (id: number): Promise<void> => {
  await apiClient.delete(`/posts/${id}`);
};

// Hooks
export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
};

export const useGetPost = (id: number) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['posts', data.id] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
