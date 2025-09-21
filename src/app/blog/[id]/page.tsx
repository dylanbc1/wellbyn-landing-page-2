'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category?: string;
  authorName: string;
  authorEmail: string;
  status: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  likeCount: number;
}



const BlogPostPage = () => {
  const params = useParams();
  const postId = params.id as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Función para cargar el post desde la API
  const loadPost = async () => {
    try {
      setLoading(true);
      
      const { apiService } = await import('@/services/api');
      
      // Obtener el post de la API
      const response = await apiService.getPost(postId);
      
      if (response) {
        setPost(response);
      } else {
        setPost(null);
      }
    } catch (error: unknown) {
      setPost(null);
    } finally {
      setLoading(false);
    }
  };



  // useEffect para cargar el post cuando cambie el ID
  useEffect(() => {
    if (postId) {
      loadPost();
    }
  }, [postId]);



  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  if (loading) {
    return (
      <div className="text-[#0C1523] overflow-x-hidden">
        <UnifiedHeader />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5FA9DF] mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando artículo...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-[#0C1523] overflow-x-hidden">
        <UnifiedHeader />
        
        {/* Back Navigation */}
        <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 pt-24 pb-4">
          <div className="flex items-center">
            <Link
              href="/blog"
              className="flex items-center gap-3 text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors text-lg font-medium"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al blog
            </Link>
          </div>
        </div>

        {/* Error Message */}
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-0 py-16 md:py-20 lg:py-24">
          <div className="text-center">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-700 mb-4">📝 Artículo no encontrado</h1>
            <p className="text-lg text-gray-600 mb-8">
              El artículo que buscas no existe o ha sido removido.
            </p>
            <Link
              href="/blog"
              className="px-6 py-3 bg-[#5FA9DF] text-white font-medium rounded-lg hover:bg-[#4A9BCE] transition-colors"
            >
              Volver al blog
            </Link>
          </div>
        </div>

        <WellbynFooter />
      </div>
    );
  }

  return (
    <div className="text-[#0C1523] overflow-x-hidden">
      <UnifiedHeader />
      
              {/* Back Navigation */}
        <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 pt-24 pb-4">
        <div className="flex items-center">
          <Link
            href="/blog"
            className="flex items-center gap-3 text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors text-lg font-medium"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-0 py-16 md:py-20 lg:py-24">
        {/* Article Header */}
        <header className="mb-12">
          {post.category && (
            <div className="inline-block bg-[#E8F4FD] text-[#5FA9DF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              {post.category}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#18181B] mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B7280] mb-8">
            <span>{calculateReadTime(post.content)} de lectura</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
            <span>•</span>
            <span>Por {post.authorName}</span>
          </div>

          {post.excerpt && (
            <p className="text-lg md:text-xl text-[#3C4147] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-[#3C4147] leading-relaxed"
          />
        </article>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8 mb-16">
          <div className="flex items-center justify-between text-sm text-[#6B7280]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#5FA9DF]" />
                <span>{post.viewCount} vistas</span>
              </div>
            </div>
            <span>Última actualización: {formatDate(post.updatedAt)}</span>
          </div>
        </footer>
      </div>

      <WellbynFooter />
    </div>
  );
};

export default BlogPostPage;
