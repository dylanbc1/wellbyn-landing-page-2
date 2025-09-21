"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Download, Trash2, Eye, LogOut, Users, FileText } from 'lucide-react';

// Estilos CSS personalizados para scrollbar
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
  clinicName?: string;
  message?: string;
  type: 'waitlist' | 'demo' | 'admin';
  status: string;
  createdAt: string;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorEmail: string;
  status: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'users' | 'posts' | 'create'>('users');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para creación de artículos
  const [articleForm, setArticleForm] = useState({
    title: '',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [articleMessage, setArticleMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const router = useRouter();

  // Verificar autenticación
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    
    loadData();
  }, [router]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Cargar registros de usuarios
      const { apiService } = await import('@/services/api');
      const usersResponse = await apiService.getRegistrations();
      if (usersResponse && Array.isArray(usersResponse)) {
        setRegistrations(usersResponse);
      } else {
        console.warn('Respuesta de usuarios no es un array:', usersResponse);
        setRegistrations([]);
      }

      // Cargar posts del blog
      const postsResponse = await apiService.getPosts();
      if (postsResponse && postsResponse.posts && Array.isArray(postsResponse.posts)) {
        setBlogPosts(postsResponse.posts);
      } else {
        console.warn('Respuesta de posts no es válida:', postsResponse);
        setBlogPosts([]);
      }
    } catch (error) {
      console.error('Error cargando datos:', error);
      setRegistrations([]);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminEmail');
    router.push('/login');
  };

  const exportToCSV = (data: (Registration | BlogPost)[], filename: string) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const value = (row as any)[header];
          return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteRegistration = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;
    
    try {
      const { apiService } = await import('@/services/api');
      await apiService.deleteRegistration(id);
      setRegistrations(prev => prev.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error eliminando usuario:', error);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este artículo?')) return;
    
    try {
      const { apiService } = await import('@/services/api');
      await apiService.deletePost(id);
      setBlogPosts(prev => prev.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error eliminando artículo:', error);
    }
  };

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!articleForm.title.trim() || !articleForm.content.trim()) {
      setArticleMessage({ type: 'error', text: 'Por favor completa todos los campos requeridos' });
      return;
    }

    try {
      setSubmitting(true);
      setArticleMessage(null);

      const { apiService } = await import('@/services/api');
      
      // Primero, crear o obtener el registro de Wellbyn
      let wellbynRegistration = null;
      
      try {
        // Intentar crear el registro de Wellbyn si no existe
        wellbynRegistration = await apiService.createRegistration({
          firstName: 'Wellbyn',
          lastName: 'Team',
          email: 'info@wellbyn.com',
          phone: '+12345678901',
          role: 'provider',
          type: 'demo',
          clinicName: 'Wellbyn Medical Platform',
          message: 'Cuenta administrativa para crear contenido oficial'
        });
      } catch {
        // Si ya existe, buscar por email
        const registrations = await apiService.getRegistrations();
        wellbynRegistration = registrations.find(r => r.email === 'info@wellbyn.com');
        
        if (!wellbynRegistration) {
          throw new Error('No se pudo crear ni encontrar el registro de Wellbyn');
        }
      }
      
      const postData = {
        title: articleForm.title.trim(),
        content: articleForm.content.trim(),
        authorName: 'Wellbyn',
        authorEmail: 'info@wellbyn.com',
        authorId: wellbynRegistration.id,
        authorType: 'registration',
        status: 'published'
      };

      await apiService.createPost(postData);
      
      setArticleMessage({ 
        type: 'success', 
        text: '¡Artículo publicado exitosamente!' 
      });
      
      // Limpiar formulario
      setArticleForm({ title: '', content: '' });
      
      // Recargar posts
      loadData();
      
      // Cambiar a la tab de posts para ver el nuevo artículo
      setTimeout(() => {
        setActiveTab('posts');
        setArticleMessage(null);
      }, 2000);

    } catch {
      setArticleMessage({ 
        type: 'error', 
        text: 'Error al crear el artículo. Por favor, intenta nuevamente.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const filteredRegistrations = registrations.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F3F7FA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5FA9DF] mx-auto mb-4"></div>
          <p className="text-[#3C4147]">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F7FA]">
      {/* Estilos CSS personalizados */}
      <style jsx global>{scrollbarStyles}</style>
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-[#0C1523]">Admin Dashboard</h1>
              <span className="text-xs sm:text-sm text-[#6B7280]">
                {localStorage.getItem('adminEmail')}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
              <span className="sm:hidden">Cerrar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 py-8">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 bg-white p-2 sm:p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-md font-medium transition-colors text-sm sm:text-base ${
              activeTab === 'users'
                ? 'bg-[#5FA9DF] text-white'
                : 'text-[#6B7280] hover:text-[#0C1523]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Usuarios</span>
            <span className="sm:hidden">Usuarios</span>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
              {registrations.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-md font-medium transition-colors text-sm sm:text-base ${
              activeTab === 'posts'
                ? 'bg-[#5FA9DF] text-white'
                : 'text-[#6B7280] hover:text-[#0C1523]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Artículos</span>
            <span className="sm:hidden">Artículos</span>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
              {blogPosts.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-md font-medium transition-colors text-sm sm:text-base ${
              activeTab === 'create'
                ? 'bg-[#5FA9DF] text-white'
                : 'text-[#6B7280] hover:text-[#0C1523]'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Crear Artículo</span>
            <span className="sm:hidden">Crear</span>
          </button>
        </div>

        {/* Search and Export */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent text-sm sm:text-base"
            />
          </div>
          <button
            onClick={() => exportToCSV(
              activeTab === 'users' ? filteredRegistrations : filteredPosts,
              activeTab === 'users' ? 'usuarios-wellbyn' : 'articulos-wellbyn'
            )}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar CSV</span>
            <span className="sm:hidden">Exportar</span>
          </button>
        </div>

        {/* Users Table */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Usuario
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Contacto
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Rol
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Tipo
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Fecha
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRegistrations.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </div>
                          {user.clinicName && (
                            <div className="text-sm text-gray-500">{user.clinicName}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                        <div className="text-sm text-gray-500">{user.phone}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'provider' ? 'bg-blue-100 text-blue-800' :
                          user.role === 'patient' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {user.role === 'provider' ? 'Proveedor' :
                           user.role === 'patient' ? 'Paciente' : 'Ambos'}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.type === 'waitlist' ? 'bg-yellow-100 text-yellow-800' : 'bg-indigo-100 text-indigo-800'
                        }`}>
                          {user.type === 'waitlist' ? 'Waitlist' : 'Demo'}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            onClick={() => deleteRegistration(user.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Posts Table */}
        {activeTab === 'posts' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Artículo
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Autor
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Estado
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Estadísticas
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Fecha
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500 line-clamp-2">
                            {post.content.substring(0, 100)}...
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{post.authorName}</div>
                        <div className="text-sm text-gray-500">{post.authorEmail}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' :
                          post.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {post.status === 'published' ? 'Publicado' :
                           post.status === 'draft' ? 'Borrador' : 'Archivado'}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.viewCount}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Ver"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => deletePost(post.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

                            {/* Create Article Tab */}
                    {activeTab === 'create' && (
                      <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-8">
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                              Crear Nuevo Artículo
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                              Comparte conocimientos y experiencias con la comunidad médica a través de nuestro blog.
                            </p>
                          </div>

                          <form onSubmit={handleArticleSubmit} className="space-y-6">
                            {/* Título */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Título del Artículo *
                              </label>
                              <input
                                type="text"
                                value={articleForm.title}
                                onChange={(e) => setArticleForm(prev => ({ ...prev, title: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                                placeholder="Escribe un título atractivo para tu artículo..."
                                required
                              />
                            </div>

                            {/* Contenido */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contenido del Artículo *
                              </label>
                              <textarea
                                value={articleForm.content}
                                onChange={(e) => setArticleForm(prev => ({ ...prev, content: e.target.value }))}
                                rows={12}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                                placeholder="Escribe tu artículo aquí. Puedes usar HTML básico para formatear el texto..."
                                required
                              />
                              <p className="text-sm text-gray-500 mt-2">
                                Puedes usar HTML básico como &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
                              </p>
                            </div>

                            {/* Mensaje de estado */}
                            {articleMessage && (
                              <div className={`p-4 rounded-lg ${
                                articleMessage.type === 'success'
                                  ? 'bg-green-50 text-green-800 border border-green-200'
                                  : 'bg-red-50 text-red-800 border border-red-200'
                              }`}>
                                {articleMessage.text}
                              </div>
                            )}

                            {/* Botones */}
                            <div className="flex gap-4 pt-4">
                              <button
                                type="submit"
                                disabled={submitting}
                                className="px-8 py-3 bg-[#5FA9DF] text-white font-medium rounded-lg hover:bg-[#4A9BCE] transition-colors disabled:opacity-50"
                              >
                                {submitting ? 'Creando artículo...' : 'Publicar Artículo'}
                              </button>
                              
                              <button
                                type="button"
                                onClick={() => setArticleForm({ title: '', content: '' })}
                                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                Limpiar
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

                    {/* Empty State */}
                    {((activeTab === 'users' && filteredRegistrations.length === 0) ||
                      (activeTab === 'posts' && filteredPosts.length === 0)) && (
                      <div className="text-center py-12">
                        <div className="text-gray-500 mb-4">
                          {searchTerm ? 'No se encontraron resultados para tu búsqueda.' : 'No hay datos para mostrar.'}
                        </div>
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm('')}
                            className="text-[#5FA9DF] hover:text-[#4A9BCE]"
                          >
                            Limpiar búsqueda
                          </button>
                        )}
                      </div>
                    )}
      </div>
    </div>
  );
}
