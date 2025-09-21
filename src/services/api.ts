import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Configuración de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

// Tipos para las respuestas de la API
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'patient' | 'provider' | 'both';
  clinicName?: string;
  message?: string;
  isActive: boolean;
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DemoRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  companySize?: 'small' | 'medium' | 'large' | 'enterprise';
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  source?: string;
  preferredDate?: string;
  preferredTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Registration {
  id: string;
  type: 'waitlist' | 'demo';
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: 'patient' | 'provider' | 'both';
  clinicName?: string;
  message?: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  source?: string;
  preferredDate?: string;
  preferredTime?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Clase principal de la API
class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000, // Aumentar a 30 segundos
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptor para requests
    this.api.interceptors.request.use(
      (config) => {
        // Log de requests en desarrollo

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Interceptor para responses
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        // Log de responses en desarrollo

        return response;
      },
      (error: AxiosError) => {
        // Log de errores en desarrollo
        if (process.env.NODE_ENV === 'development') {
          console.error(`❌ API Error: ${error.response?.status} ${error.config?.url}`, error.response?.data);
        }
        return Promise.reject(error);
      }
    );
  }

  // Métodos para Waitlist
  async createWaitlistEntry(data: {
    firstName: string;
    lastName: string;
    email: string;
    role: 'patient' | 'provider' | 'both';
    clinicName?: string;
    message?: string;
    source?: string;
  }): Promise<WaitlistEntry> {
    try {
      const response = await this.api.post<WaitlistEntry>('/waitlist', data);
      return response.data;
    } catch (_error) {
      this.handleError(_error, 'Error al crear entrada en la waitlist');
    }
  }

  async getWaitlistStats() {
    try {
      const response = await this.api.get('/waitlist/stats');
      return response.data;
    } catch (_error) {
      this.handleError(_error, 'Error al obtener estadísticas de la waitlist');
    }
  }

  // Métodos para Demo Requests
  async createDemoRequest(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    companySize?: 'small' | 'medium' | 'large' | 'enterprise';
    notes?: string;
    source?: string;
    preferredDate?: string;
    preferredTime?: string;
  }): Promise<DemoRequest> {
    try {
      const response = await this.api.post<DemoRequest>('/requests', data);
      return response.data;
    } catch (_error) {
      this.handleError(_error, 'Error al crear solicitud de demo');
    }
  }

  async getDemoRequestStats() {
    try {
      const response = await this.api.get('/requests/stats');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error al obtener estadísticas de las solicitudes');
    }
  }

  // Métodos para Registration (nueva entidad unificada)
  async createRegistration(data: {
    type: 'waitlist' | 'demo';
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role: 'patient' | 'provider' | 'both';
    clinicName?: string;
    message?: string;
    source?: string;
    preferredDate?: string;
    preferredTime?: string;
  }): Promise<Registration> {
    try {
      const response = await this.api.post<Registration>('/registrations', data);
      return response.data;
    } catch (_error) {
      this.handleError(_error, 'Error al crear registro');
    }
  }

  async getRegistrationStats() {
    try {
      const response = await this.api.get('/registrations/stats');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error al obtener estadísticas de registros');
    }
  }

  async verifyEmailRegistration(email: string) {
    try {
      const response = await this.api.get(`/blog/verify-email/${encodeURIComponent(email)}`);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error al verificar email');
    }
  }

  async createPost(postData: {
    title: string;
    content: string;
    authorName: string;
    authorEmail: string;
    authorId?: string;
    authorType?: string;
    status?: string;
  }) {
    try {
      const response = await this.api.post('/blog/posts', postData);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error al crear el post');
    }
  }

  async getPosts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
  }) {
    try {
      const queryParams = new URLSearchParams();
      if (params?.page) queryParams.append('page', params.page.toString());
      if (params?.limit) queryParams.append('limit', params.limit.toString());
      if (params?.search) queryParams.append('search', params.search);
      if (params?.category) queryParams.append('category', params.category);
      
      const url = `/blog/posts${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

      
      const response = await this.api.get(url);
      
      
      return response.data;
    } catch (error) {
      console.error('🔍 Error en getPosts:', error);
      this.handleError(error, 'Error al obtener posts');
    }
  }

  async getPost(id: string) {
    try {

      
      const response = await this.api.get(`/blog/posts/${id}`);
      
      
      return response.data;
    } catch (error) {
      console.error('🔍 Error en getPost:', error);
      this.handleError(error, 'Error al obtener post');
    }
  }

  async toggleLike(postId: string, userIdentifier: string, userName?: string) {
    try {

      
      const response = await this.api.post(`/blog/posts/${postId}/like`, {
        postId,
        userIdentifier,
        userName
      });
      
      
      return response.data;
    } catch (error) {
      console.error('🔍 Error en toggleLike:', error);
      this.handleError(error, 'Error al manejar like');
    }
  }

  async checkUserLike(postId: string, userIdentifier: string) {
    try {
      const response = await this.api.get(`/blog/posts/${postId}/like/${userIdentifier}`);
      return response.data;
    } catch (error) {
      console.error('🔍 Error en checkUserLike:', error);
      return false;
    }
  }

  // Método para obtener todos los registros (admin)
  async getRegistrations(): Promise<Registration[]> {
    try {
      const response = await this.api.get('/registrations');
      return response.data;
    } catch (error) {
      console.error('🔍 Error en getRegistrations:', error);
      return [];
    }
  }

  // Método para eliminar un registro (admin)
  async deleteRegistration(id: string): Promise<boolean> {
    try {
      await this.api.delete(`/registrations/${id}`);
      return true;
    } catch (error) {
      console.error('🔍 Error en deleteRegistration:', error);
      return false;
    }
  }

  // Método para eliminar un post (admin)
  async deletePost(id: string): Promise<boolean> {
    try {
      await this.api.delete(`/blog/posts/${id}`);
      return true;
    } catch (error) {
      console.error('🔍 Error en deletePost:', error);
      return false;
    }
  }

  // Método para verificar el estado de la API
  async healthCheck(): Promise<boolean> {
    try {
      await this.api.get('/health');
      return true;
    } catch (error) {
      return false;
    }
  }

  // Manejo centralizado de errores
  private handleError(error: unknown, defaultMessage: string): never {
    if (error && typeof error === 'object' && 'response' in error && 
        error.response && typeof error.response === 'object' && 'data' in error.response &&
        error.response.data && typeof error.response.data === 'object' && 'message' in error.response.data) {
      throw new Error((error.response.data as { message: string }).message);
    } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
      throw new Error(error.message);
    } else {
      throw new Error(defaultMessage);
    }
  }
}

// Instancia singleton del servicio
export const apiService = new ApiService();

// Exportar también la instancia de axios para casos especiales
export { axios as apiClient };
export default apiService;
