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

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  password: z.string().min(1, { message: 'La contraseña no puede estar vacía.' }),
});

const loginUser = async (values: z.infer<typeof formSchema>) => {
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

const PARTICLE_COUNT = 14;
const particles = Array.from({ length: PARTICLE_COUNT });

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isFocused, setIsFocused] = useState(false);

  const mutation = useMutation({
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Fondo dinámico con partículas que recorren la pantalla como focos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${48 + Math.random() * 24}px`,
              height: `${48 + Math.random() * 24}px`,
              background: `radial-gradient(circle, #3b82f6 60%, #60a5fa 100%)`,
              opacity: 0.16 + Math.random() * 0.10,
              filter: 'blur(18px)',
              zIndex: 0,
            }}
            initial={{
              x: -100 - Math.random() * 50, // Aparece fuera de la pantalla izquierda
              y: Math.random() * 100, // Posición vertical aleatoria
            }}
            animate={{
              x: window.innerWidth + 100 + Math.random() * 50, // Recorre hasta fuera de la derecha
              y: Math.random() * 100, // Puede variar verticalmente
              opacity: [
                0.16 + Math.random() * 0.10,
                0.32 + Math.random() * 0.10,
                0.16 + Math.random() * 0.10,
              ],
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 12 + Math.random() * 6, // Duración larga para recorrido lento
              ease: "easeInOut",
              delay: Math.random() * 4, // Delay aleatorio para que no todas empiecen juntas
            }}
          />
        ))}
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
                    <CardTitle className="text-xl sm:text-2xl font-bold text-blue-700">Iniciar Sesión</CardTitle>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-gray-500 text-xs sm:text-sm mt-1 text-center"
                  >
                    Accede con tu cuenta institucional
                  </motion.p>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm">Email</FormLabel>
                          <FormControl>
                            <motion.div
                              initial={false}
                              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #3b82f6" }}
                              className="relative"
                            >
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                                </svg>
                              </span>
                              <Input
                                placeholder="tu@email.com"
                                {...field}
                                disabled={mutation.isPending}
                                className="pl-9 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150 text-sm shadow-sm"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm">Contraseña</FormLabel>
                          <FormControl>
                            <motion.div
                              initial={false}
                              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #3b82f6" }}
                              className="relative"
                            >
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-1m0-4a4 4 0 014 4v1a4 4 0 01-8 0v-1a4 4 0 014-4zm0 0V7a4 4 0 118 0v6" />
                                </svg>
                              </span>
                              <Input
                                type="password"
                                placeholder="********"
                                {...field}
                                disabled={mutation.isPending}
                                className="pl-9 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150 text-sm shadow-sm"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <motion.button
                      type="submit"
                      className="w-full text-white font-semibold py-2 rounded-lg transition-colors duration-200 text-sm shadow"
                      disabled={mutation.isPending}
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
                      {mutation.isPending ? 'Ingresando...' : 'Entrar'}
                    </motion.button>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="text-center mt-2"
                    >
                      <a href="#" className="text-blue-600 hover:underline text-xs">¿Olvidaste tu contraseña?</a>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
