# Wellbyn Landing Page

Frontend de la landing page de Wellbyn construido con Next.js y conectado al backend de NestJS.

## 🚀 Características

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Código completamente tipado
- **Tailwind CSS**: Estilos modernos y responsivos
- **Integración con Backend**: Conectado a la API de NestJS
- **Formularios Interactivos**: Waitlist y solicitudes de demo
- **Manejo de Estados**: Loading states y mensajes de éxito/error
- **Validación**: Validación de formularios en tiempo real

## 📋 Prerrequisitos

- Node.js 18+
- npm o yarn
- Backend de NestJS corriendo (ver [landing-back/README.md](../landing-back/README.md))

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
cd landing-page
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env.local` en la raíz del proyecto:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

# Environment
NODE_ENV=development
```

4. **Asegurarse de que el backend esté corriendo**
El backend debe estar ejecutándose en `http://localhost:3001` para que los formularios funcionen correctamente.

## 🏃‍♂️ Ejecución

### Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Producción
```bash
npm run build
npm run start
```

## 🔌 Integración con el Backend

### Servicio de API
El frontend utiliza un servicio centralizado de API (`src/services/api.ts`) que:

- Maneja todas las comunicaciones con el backend
- Incluye interceptores para logging y manejo de errores
- Proporciona métodos tipados para cada endpoint
- Maneja automáticamente los estados de carga y error

### Endpoints Utilizados

#### Waitlist
- `POST /api/v1/waitlist` - Crear nueva entrada en la waitlist

#### Demo Requests
- `POST /api/v1/requests` - Crear nueva solicitud de demo

### Manejo de Errores
- Errores de validación mostrados al usuario
- Estados de carga en botones de envío
- Mensajes de éxito/error con estilos apropiados
- Logging automático en consola para debugging

## 📱 Páginas y Componentes

### Páginas Principales
- **Home** (`/`) - Landing page principal
- **Waitlist** (`/waitlist`) - Formulario de registro en lista de espera
- **Request Demo** (`/request`) - Formulario de solicitud de demo
- **Contact** (`/contact`) - Página de contacto
- **Blog** (`/blog`) - Blog de la empresa
- **Case Studies** (`/case-study`) - Casos de estudio

### Componentes Reutilizables
- `UnifiedHeader` - Header unificado para todas las páginas
- `WellbynFooter` - Footer de la empresa
- `Input` - Componente de input reutilizable
- Formularios con validación y manejo de estado

## 🎨 Estilos y UI

### Tailwind CSS
- Sistema de diseño consistente
- Componentes responsivos
- Paleta de colores personalizada para Wellbyn
- Utilidades para espaciado, tipografía y layout

### Componentes UI
- Inputs con estados de focus y error
- Botones con estados de loading
- Mensajes de estado con colores apropiados
- Layouts responsivos para móvil y desktop

## 🔧 Configuración de Desarrollo

### TypeScript
- Configuración estricta habilitada
- Tipos para todas las respuestas de API
- Interfaces para formularios y estados

### ESLint y Prettier
- Reglas de linting configuradas
- Formateo automático de código
- Integración con VS Code

### Hot Reload
- Recarga automática en desarrollo
- Preservación de estado del formulario
- Fast Refresh habilitado

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Tests en modo watch
npm run test:watch

# Tests de linting
npm run lint
```

## 📦 Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run type-check` - Verificar tipos de TypeScript

## 🚨 Notas Importantes

1. **Backend Requerido**: Los formularios no funcionarán sin el backend corriendo.

2. **Variables de Entorno**: Asegúrate de configurar `NEXT_PUBLIC_API_URL` correctamente.

3. **CORS**: El backend debe tener CORS configurado para `http://localhost:3000`.

4. **Validación**: Los formularios incluyen validación tanto del lado del cliente como del servidor.

## 🔒 Seguridad

- Validación de entrada en formularios
- Sanitización de datos antes del envío
- Manejo seguro de errores (no exponer información sensible)
- Headers de seguridad configurados

## 📱 Responsividad

- Diseño mobile-first
- Breakpoints para tablet y desktop
- Componentes adaptativos
- Navegación optimizada para móvil

## 🚀 Optimizaciones

- Lazy loading de componentes
- Optimización de imágenes
- Bundle splitting automático
- Prefetching de páginas

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contacta al equipo de desarrollo de Wellbyn.

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Backend API](../landing-back/README.md)
