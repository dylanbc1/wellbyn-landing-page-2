'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Alert from "@/app/components/ui/Alert";

interface CreatePostFormData {
  title: string;
  content: string;
  authorName: string;
  authorEmail: string;
  authorId?: string;
  authorType?: 'registration' | 'admin';
}

const CreatePostForm = () => {
  const [formData, setFormData] = useState<CreatePostFormData>({
    title: '',
    content: '',
    authorName: 'Wellbyn',
    authorEmail: 'info@wellbyn.com',
    authorId: 'admin-wellbyn',
    authorType: 'admin'
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    // Verificar si el usuario es admin
    const isAdmin = localStorage.getItem('adminAuthenticated');
    if (!isAdmin) {
      window.location.href = '/login';
      return;
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      setMessage({ type: 'error', text: 'Por favor completa todos los campos requeridos' });
      return;
    }

    try {
      setSubmitting(true);
      setMessage(null);

      // Crear el post usando la API
      const { apiService } = await import('@/services/api');
      
      const postData = {
        title: formData.title.trim(),
        content: formData.content.trim(),
        authorName: formData.authorName,
        authorEmail: formData.authorEmail,
        authorId: formData.authorId,
        authorType: formData.authorType,
        status: 'published'
      };

      await apiService.createPost(postData);
      
      setMessage({ 
        type: 'success', 
        text: '¡Artículo publicado exitosamente! Redirigiendo al blog...' 
      });
      
      // Redirigir al blog después de 2 segundos
      setTimeout(() => {
        window.location.href = '/blog';
      }, 2000);

    } catch (error) {
      console.error('Error creating post:', error);
      setMessage({ 
        type: 'error', 
        text: 'Error al crear el artículo. Por favor, intenta nuevamente.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-[#0C1523] overflow-x-hidden">
      <UnifiedHeader />
      
      {/* Back Arrow */}
      <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 pt-8 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg font-medium">Volver al blog</span>
        </Link>
      </div>

      {/* Create Post Form */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-0 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C1523] mb-4">
            Crear Nuevo Artículo
          </h1>
          <p className="text-lg text-[#3C4147] max-w-2xl mx-auto">
            Comparte conocimientos y experiencias con la comunidad médica a través de nuestro blog.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-8">
            <h2 className="text-2xl font-bold mb-6">Información Básica</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título del Artículo *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                  placeholder="Escribe un título atractivo para tu artículo..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-8">
            <h2 className="text-2xl font-bold mb-6">Contenido del Artículo</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenido *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                placeholder="Escribe tu artículo aquí. Puedes usar HTML básico para formatear el texto..."
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Puedes usar HTML básico como &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
              </p>
            </div>
          </div>

          {/* Author Information */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-8">
            <h2 className="text-2xl font-bold mb-6">Información del Autor</h2>
            
            <div className="max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autor
                </label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                  readOnly
                />
                <p className="text-xs text-gray-500 mt-1">Artículo creado por el equipo de Wellbyn</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-8 py-4 bg-[#5FA9DF] text-white font-medium rounded-lg hover:bg-[#4A9BCE] transition-colors disabled:opacity-50"
            >
              {submitting ? 'Creando artículo...' : 'Publicar Artículo'}
            </button>
            
            <Link
              href="/blog"
              className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Cancelar
            </Link>
          </div>
        </form>

        {/* Mensaje de estado */}
        {message && (
          <div className="mt-6">
            <Alert
              type={message.type}
              message={message.text}
            />
          </div>
        )}

        {/* Guidelines */}
        <div className="mt-16 bg-[#F3F7FA] rounded-[20px] p-8">
          <h3 className="text-xl font-bold mb-4">Guías para Publicar</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Asegúrate de que tu contenido sea relevante para la comunidad médica</li>
            <li>• Usa un lenguaje claro y profesional</li>
            <li>• Incluye ejemplos prácticos cuando sea posible</li>
            <li>• Respeta la privacidad y confidencialidad médica</li>
            <li>• Tu artículo será publicado inmediatamente</li>
            <li>• Solo administradores pueden publicar contenido</li>
          </ul>
        </div>
      </div>

      <WellbynFooter />
    </div>
  );
};

const CreatePostPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5FA9DF] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <CreatePostForm />
    </Suspense>
  );
};

export default CreatePostPage;
