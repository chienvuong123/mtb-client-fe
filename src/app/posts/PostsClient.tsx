'use client';

import {
  useCreatePost,
  useDeletePost,
  useGetPosts,
  useUpdatePost,
} from '@/lib/react-query/hooks/usePosts';
import { useState } from 'react';

export default function PostsClient() {
  const [editingPost, setEditingPost] = useState<{
    id: number;
    title: string;
    author: string;
  } | null>(null);
  const [newPost, setNewPost] = useState({ title: '', author: '' });

  // Queries
  const { data: posts, isLoading } = useGetPosts();

  // Mutations
  const { mutate: createPost, isPending: isCreating } = useCreatePost();
  const { mutate: updatePost, isPending: isUpdating } = useUpdatePost();
  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  // Handlers
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(newPost, {
      onSuccess: () => {
        setNewPost({ title: '', author: '' });
      },
    });
  };

  const handleUpdatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost, {
        onSuccess: () => {
          setEditingPost(null);
        },
      });
    }
  };

  const handleDeletePost = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      deletePost(id);
    }
  };

  if (isLoading) return <div>Đang tải...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý bài viết</h1>

      {/* Form tạo bài viết mới */}
      <form onSubmit={handleCreatePost} className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Tạo bài viết mới</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Tiêu đề:</label>
            <input
              type="text"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Tác giả:</label>
            <input
              type="text"
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isCreating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isCreating ? 'Đang tạo...' : 'Tạo bài viết'}
          </button>
        </div>
      </form>

      {/* Form chỉnh sửa bài viết */}
      {editingPost && (
        <form
          onSubmit={handleUpdatePost}
          className="mb-8 p-4 border rounded bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-4">Chỉnh sửa bài viết</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Tiêu đề:</label>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Tác giả:</label>
              <input
                type="text"
                value={editingPost.author}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, author: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isUpdating}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
              >
                {isUpdating ? 'Đang cập nhật...' : 'Cập nhật'}
              </button>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Hủy
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Danh sách bài viết */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Danh sách bài viết</h2>
        {posts?.map((post) => (
          <div key={post.id} className="p-4 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">Tác giả: {post.author}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => setEditingPost(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                disabled={isDeleting}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:bg-gray-400"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
