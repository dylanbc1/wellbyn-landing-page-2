"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Credenciales quemadas (no se muestran en placeholders)
  const ADMIN_EMAIL = 'admin@wellbyn.com';
  const ADMIN_PASSWORD = 'wellbyn2026*';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simular delay de validación
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Guardar estado de autenticación
      localStorage.setItem('adminAuthenticated', 'true');
      localStorage.setItem('adminEmail', email);
      
      // Redirigir al dashboard
      router.push('/admin/dashboard');
    } else {
      setError('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      {/* Logo */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <Image
          src="/images/logo-horizontal-azul-hd.png"
          alt="Wellbyn Logo"
          width={160}
          height={43}
          className="w-32 sm:w-36 md:w-40 h-auto"
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white border-2 border-[#5FA9DF]/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="text-center mb-5 sm:mb-6">
            <h1 
              className="font-medium text-[#0C1523] text-xl sm:text-2xl md:text-3xl leading-tight mb-2"
              style={{letterSpacing: '-0.5px'}}
            >
              ¡Bienvenido/a de vuelta!
            </h1>
            <p className="text-sm md:text-base font-normal text-[#3C4147] leading-relaxed">
              Accede a tu cuenta de Wellbyn
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0C1523] mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#0C1523] mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent text-sm sm:text-base"
                required
              />
              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors text-xs sm:text-sm font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#5FA9DF] text-white py-3 px-6 rounded-full font-medium text-base hover:bg-[#4A9BCE] transition-all duration-200 ease-in-out cursor-pointer ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center">
            <Link href="/">
              <div className="w-full mx-auto flex items-center justify-center gap-2 border rounded-full py-2.5 px-6 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                <span>← Volver al inicio</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
