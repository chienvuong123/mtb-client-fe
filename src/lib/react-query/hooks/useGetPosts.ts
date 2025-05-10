import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api-client';

interface Post {
  id: string;
  title: string;
  content: string;
  // Add other post fields as needed
}

const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
};
