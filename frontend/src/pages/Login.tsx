import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  password: z.string().min(1, { message: 'La contraseña no puede estar vacía.' }),
});

const forgotSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
});

const loginUser = async (values: z.infer<typeof loginSchema>) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al iniciar sesión');
  }

  return response.json();
};

const forgotPassword = async (values: z.infer<typeof forgotSchema>) => {
  const response = await fetch('/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al solicitar recuperación');
  }

  return response.json();
};

const PARTICLE_COUNT = 18;
const particleColors = [
  "#3b82f6", // azul
  "#60a5fa", // celeste
  "#a78bfa", // violeta
  "#fbbf24", // amarillo
  "#f472b6", // rosa
  "#34d399", // verde
  "#f87171", // rojo
  "#38bdf8", // azul claro
  "#f59e42", // naranja
];

const particles = Array.from({ length: PARTICLE_COUNT });

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isFocused, setIsFocused] = useState(false);
  const [view, setView] = useState<'login' | 'forgot'>('login');

  // Login
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login(data.token, data.user);
      toast.success('¡Bienvenido!');
      navigate('/admin');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Forgot Password
  const forgotMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success('¡Revisa tu correo para recuperar tu contraseña!');
      setView('login');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const forgotForm = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: '' },
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    loginMutation.mutate(values);
  };

  const handleForgot = (values: z.infer<typeof forgotSchema>) => {
    forgotMutation.mutate(values);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Fondo dinámico de partículas coloridas centradas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {particles.map((_, i) => {
          const color = particleColors[i % particleColors.length];
          const size = 60 + Math.random() * 40;
          const xCenter = window.innerWidth / 2 + (Math.random() - 0.5) * 320;
          const yCenter = window.innerHeight / 2 + (Math.random() - 0.5) * 220;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `11000px`,
                height: `100px`,
                background: `radial-gradient(circle, ${color} 60%, rgba(21, 21, 210, 0.27) 80%)`,
                opacity: 0.22 + Math.random() * 0.18,
                filter: 'blur(22px)',
                left: xCenter,
                top: yCenter,
                zIndex: 0,
              }}
              initial={{
                scale: 0.10 + Math.random() * 0.4,
                opacity: 0.22 + Math.random() * 0.18,
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.22 + Math.random() * 0.18, 0.36, 0.22 + Math.random() * 0.18],
                x: [0, (Math.random() - 0.5) * 40, 0],
                y: [0, (Math.random() - 0.5) * 40, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 + Math.random() * 6,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </motion.div>
      <Header />
      <main className="flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="w-full flex justify-center"
        >
          <motion.div
            layout
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex justify-center"
          >
            <Card className="w-full max-w-xs sm:max-w-sm bg-white border border-blue-300 shadow-xl rounded-2xl px-5 py-6 sm:px-8 sm:py-8 mt-36 mb-10">
              <CardHeader>
                <div className="flex flex-col items-center mb-2">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 mb-3 shadow-lg"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <CardTitle className="text-xl sm:text-2xl font-bold text-blue-700">
                      {view === 'login' && 'Iniciar Sesión'}
                      {view === 'forgot' && 'Recuperar Contraseña'}
                    </CardTitle>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-gray-500 text-xs sm:text-sm mt-1 text-center"
                  >
                    {view === 'login' && 'Accede con tu cuenta institucional'}
                    {view === 'forgot' && 'Ingresa tu email para recuperar tu contraseña'}
                  </motion.p>
                </div>
              </CardHeader>
              <CardContent>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  {view === 'login' && (
                    <Form {...loginForm}>
                      <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                        <FormField
                          control={loginForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 text-sm">Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="tu@email.com"
                                  {...field}
                                  disabled={loginMutation.isPending}
                                  className="pl-9 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150 text-sm shadow-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 text-sm">Contraseña</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder="********"
                                  {...field}
                                  disabled={loginMutation.isPending}
                                  className="pl-9 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150 text-sm shadow-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <motion.button
                          type="submit"
                          className="w-full text-white font-semibold py-2 rounded-lg transition-colors duration-200 text-sm shadow"
                          disabled={loginMutation.isPending}
                          style={{
                            background: isFocused ? "linear-gradient(45deg, #3b82f6, #60a5fa, #3b82f6)" : "#2563eb",
                            backgroundSize: "200% 200%",
                          }}
                          whileHover={{
                            scale: 1.04,
                            background: isFocused ? "linear-gradient(45deg, #3b82f6, #60a5fa, #3b82f6)" : "#3b82f6",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            backgroundPosition: isFocused ? ["0% 50%", "100% 50%"] : "0% 50%",
                          }}
                          transition={{
                            backgroundPosition: {
                              duration: 3,
                              ease: "easeInOut",
                              repeat: isFocused ? Infinity : 0,
                            },
                          }}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                        >
                          {loginMutation.isPending ? 'Ingresando...' : 'Entrar'}
                        </motion.button>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="text-center mt-2"
                        >
                          <a
                            href="#"
                            className="text-blue-600 hover:underline text-xs"
                            onClick={e => { e.preventDefault(); setView('forgot'); }}
                          >
                            ¿Olvidaste tu contraseña?
                          </a>
                        </motion.div>
                      </form>
                    </Form>
                  )}
                  {view === 'forgot' && (
                    <Form {...forgotForm}>
                      <form onSubmit={forgotForm.handleSubmit(handleForgot)} className="space-y-4">
                        <FormField
                          control={forgotForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 text-sm">Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="tu@email.com"
                                  {...field}
                                  disabled={forgotMutation.isPending}
                                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150 text-sm shadow-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <motion.button
                          type="submit"
                          className="w-full text-white font-semibold py-2 rounded-lg transition-colors duration-200 text-sm shadow"
                          disabled={forgotMutation.isPending}
                          style={{
                            background: isFocused ? "linear-gradient(45deg, #3b82f6, #60a5fa, #3b82f6)" : "#2563eb",
                            backgroundSize: "200% 200%",
                          }}
                          whileHover={{
                            scale: 1.04,
                            background: isFocused ? "linear-gradient(45deg, #3b82f6, #60a5fa, #3b82f6)" : "#3b82f6",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            backgroundPosition: isFocused ? ["0% 50%", "100% 50%"] : "0% 50%",
                          }}
                          transition={{
                            backgroundPosition: {
                              duration: 3,
                              ease: "easeInOut",
                              repeat: isFocused ? Infinity : 0,
                            },
                          }}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                        >
                          {forgotMutation.isPending ? 'Enviando...' : 'Recuperar'}
                        </motion.button>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="text-center mt-2"
                        >
                          <a
                            href="#"
                            className="text-blue-600 hover:underline text-xs"
                            onClick={e => { e.preventDefault(); setView('login'); }}
                          >
                            Volver a iniciar sesión
                          </a>
                        </motion.div>
                      </form>
                    </Form>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
