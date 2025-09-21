'use client';

import React, { useState, useEffect } from 'react';
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Link from "next/link";

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

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // Posts de ejemplo como fallback
  const fallbackPosts: BlogPost[] = [
    {
      id: '1',
      title: "¿Cómo funciona la inteligencia artificial en Wellbyn?",
      content: "Descubre cómo nuestra IA médica automatiza la documentación clínica y mejora la eficiencia de tu clínica. La inteligencia artificial está transformando la forma en que los profesionales de la salud gestionan la información de sus pacientes.",
      excerpt: "Descubre cómo nuestra IA médica automatiza la documentación clínica y mejora la eficiencia de tu clínica.",
      category: "Tecnología",
      authorName: "Equipo Wellbyn",
      authorEmail: "info@wellbyn.com",
      status: "published",
      publishedAt: "2024-01-15T00:00:00.000Z",
      createdAt: "2024-01-15T00:00:00.000Z",
      updatedAt: "2024-01-15T00:00:00.000Z",
      viewCount: 150,
      likeCount: 25
    },
    {
      id: '2',
      title: "Guía completa para implementar Wellbyn en tu clínica",
      content: "Pasos prácticos para migrar tu clínica a Wellbyn y aprovechar todas las funcionalidades de la plataforma. Desde la configuración inicial hasta la capacitación del personal, te guiamos en todo el proceso.",
      excerpt: "Pasos prácticos para migrar tu clínica a Wellbyn y aprovechar todas las funcionalidades de la plataforma.",
      category: "Implementación",
      authorName: "Equipo Wellbyn",
      authorEmail: "info@wellbyn.com",
      status: "published",
      publishedAt: "2024-01-10T00:00:00.000Z",
      createdAt: "2024-01-10T00:00:00.000Z",
      updatedAt: "2024-01-10T00:00:00.000Z",
      viewCount: 89,
      likeCount: 12
    }
  ];

  // Función para cargar posts
  const loadPosts = async () => {
    try {
      setLoading(true);
      
      const { apiService } = await import('@/services/api');
      
      const response = await apiService.getPosts({
        page: 1,
        limit: 20,
        search: searchQuery || undefined,
      });
      
      if (response && response.posts && Array.isArray(response.posts)) {
        const sortedPosts = [...response.posts].sort((a, b) => {
          const dateA = new Date(a.publishedAt || a.createdAt);
          const dateB = new Date(b.publishedAt || b.createdAt);
          
          return sortBy === 'newest' 
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });
        
        setPosts(sortedPosts);
      } else {
        setPosts(fallbackPosts);
      }
    } catch (error: unknown) {
      setPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para cargar posts al montar el componente y cuando cambien los filtros
  useEffect(() => {
    loadPosts();
  }, [searchQuery, sortBy]);

  // Función para formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Función para calcular tiempo de lectura estimado
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };



  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };



  return (
    <div className="text-[#0C1523] overflow-x-hidden relative">
      <UnifiedHeader />
      
      {/* Hero Section */}
      <div className="w-full bg-[#F3F7FA] flex items-center justify-center">
        <div className="max-w-[1295px] w-full px-6 md:px-8 lg:px-0 pt-24">
          <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-[120px]">
            <div style={{letterSpacing: '-4px', lineHeight: '120%'}}
                 className="font-bold gradient-01 text-[80px] sm:text-6xl md:text-8xl lg:text-[110px] text-center px-4 mb-8">
              Blog de Wellbyn
            </div>
            <div className="text-base md:text-lg lg:text-[20px] max-w-[800px] mx-auto text-center text-[#3C4147]">
              Descubre insights, mejores prácticas y las últimas novedades en tecnología médica
            </div>
          </div>
        </div>
      </div>



      {/* Search and Date Filter */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos por título o contenido..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            {/* Date Filter */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Ordenar por:</label>
              <select 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
              >
                <option value="newest">Más recientes primero</option>
                <option value="oldest">Más antiguos primero</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0">
        {/* Featured Post 
        <div className="mt-8 md:mt-12 lg:mt-16 mb-16 md:mb-20">
          <div className="bg-[#F3F7FA] rounded-[20px] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-block bg-[#5FA9DF] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Destacado
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#18181B] mb-4 leading-tight">
                  El futuro de la atención médica: Cómo Wellbyn está revolucionando la industria
                </h1>
                <p className="text-lg md:text-xl text-[#3C4147] mb-6 leading-relaxed">
                  Descubre cómo la combinación de inteligencia artificial, automatización y diseño centrado en el usuario está transformando la forma en que las clínicas y pacientes interactúan con la tecnología médica.
                </p>
                <div className="flex items-center gap-6 text-sm text-[#6B7280]">
                  <span>15 min de lectura</span>
                  <span>•</span>
                  <span>15 de Enero, 2024</span>
                </div>
                <div className="mt-6">
                  <Link
                    href="/blog/featured"
                    className="inline-block bg-[#5FA9DF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4A9BCE] transition-colors"
                  >
                    Leer artículo completo
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[500px] h-[300px] bg-[#E8F4FD] rounded-lg flex items-center justify-center">
                  <span className="text-[#5FA9DF] text-lg">Imagen del blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5FA9DF] mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando artículos...</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No hay artículos disponibles</h3>
              <p className="text-gray-500">
                {searchQuery ? 'No se encontraron artículos que coincidan con tu búsqueda.' : 'Aún no se han publicado artículos.'}
              </p>
            </div>
          ) : posts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-[16px] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {post.category && (
                    <span className="inline-block bg-[#E8F4FD] text-[#5FA9DF] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  )}
                  <span className="text-sm text-[#6B7280]">{calculateReadTime(post.content)}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#18181B] mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[#3C4147] mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt || post.content.substring(0, 150) + '...'}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#6B7280]">
                    <div>{formatDate(post.publishedAt || post.createdAt)}</div>
                    <div className="text-xs mt-1">Por {post.authorName}</div>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-[#5FA9DF] font-medium hover:text-[#4A9BCE] transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#5FA9DF] rounded-[20px] p-8 md:p-12 lg:p-16 text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Quieres saber más sobre Wellbyn?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra waitlist o solicita una demo para descubrir cómo Wellbyn 
            puede transformar la gestión de tu clínica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-8 py-4 bg-white text-[#5FA9DF] font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Únete a la Waitlist
            </Link>
            <Link
              href="/request"
              className="px-8 py-4 bg-[#0C1523] text-white font-medium rounded-lg hover:bg-[#1a2a3a] transition-colors"
            >
              Solicita una Demo
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#F3F7FA] rounded-[20px] p-8 md:p-12 lg:p-16 text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#18181B] mb-4">
            Mantente actualizado
          </h2>
          <p className="text-lg text-[#3C4147] mb-8 max-w-[600px] mx-auto">
            Recibe las últimas noticias, consejos y actualizaciones de Wellbyn directamente en tu bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
            />
            <button className="bg-[#5FA9DF] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4A9BCE] transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <WellbynFooter />
    </div>
  );
};

export default BlogPage;
