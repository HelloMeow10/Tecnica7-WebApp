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
import {
  FaRegCircle,
  FaRegSquare,
  FaRegStar,
  FaRegHeart,
  FaTimes,
  FaPlus,
  FaRegGem,
  FaRegSmile,
  FaRegSun,
  FaRegMoon,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaNetworkWired,
  FaRobot,
  FaCamera,
  FaVideo,
  FaPalette,
  FaMusic,
  FaMicrophoneAlt,
  FaRegKeyboard,
  FaMobileAlt,
  FaCloud,
  FaTerminal,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobepremierepro, SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiFigma } from "react-icons/si";

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

  // Fondo de iconos animados estilo programación y multimedios
  const icons = [
    { icon: <FaCode size={90} />, color: "text-blue-400", x: "8%", y: "18%", delay: 0 },
    { icon: <FaLaptopCode size={80} />, color: "text-green-400", x: "75%", y: "20%", delay: 0.7 },
    { icon: <FaDatabase size={70} />, color: "text-yellow-300", x: "15%", y: "70%", delay: 1.2 },
    { icon: <FaNetworkWired size={100} />, color: "text-pink-400", x: "80%", y: "65%", delay: 0.4 },
    { icon: <FaRobot size={110} />, color: "text-blue-500", x: "50%", y: "10%", delay: 1.5 },
    { icon: <FaCamera size={80} />, color: "text-red-400", x: "60%", y: "80%", delay: 1.1 },
    { icon: <FaVideo size={70} />, color: "text-green-300", x: "35%", y: "50%", delay: 0.9 },
    { icon: <FaPalette size={90} />, color: "text-purple-400", x: "15%", y: "85%", delay: 1.7 },
    { icon: <FaMusic size={60} />, color: "text-yellow-400", x: "30%", y: "30%", delay: 0.5 },
    { icon: <FaMicrophoneAlt size={80} />, color: "text-yellow-200", x: "70%", y: "75%", delay: 1.3 },
    { icon: <FaRegKeyboard size={70} />, color: "text-blue-200", x: "85%", y: "40%", delay: 0.8 },
    { icon: <FaMobileAlt size={60} />, color: "text-blue-300", x: "20%", y: "10%", delay: 0.2 },
    { icon: <FaCloud size={50} />, color: "text-green-200", x: "60%", y: "15%", delay: 1.6 },
    { icon: <FaTerminal size={55} />, color: "text-yellow-200", x: "40%", y: "80%", delay: 1.9 },
    { icon: <FaProjectDiagram size={65} />, color: "text-pink-200", x: "10%", y: "60%", delay: 1.4 },
    { icon: <SiAdobephotoshop size={60} />, color: "text-blue-400", x: "80%", y: "10%", delay: 1.8 },
    { icon: <SiAdobepremierepro size={50} />, color: "text-purple-500", x: "30%", y: "85%", delay: 1.1 },
    { icon: <SiJavascript size={60} />, color: "text-yellow-400", x: "55%", y: "60%", delay: 0.6 },
    { icon: <SiPython size={50} />, color: "text-blue-400", x: "65%", y: "50%", delay: 1.2 },
    { icon: <SiHtml5 size={55} />, color: "text-orange-500", x: "45%", y: "25%", delay: 0.3 },
    { icon: <SiCss3 size={55} />, color: "text-blue-500", x: "25%", y: "60%", delay: 1.1 },
    { icon: <SiReact size={60} />, color: "text-cyan-400", x: "10%", y: "40%", delay: 1.5 },
    { icon: <SiFigma size={60} />, color: "text-pink-500", x: "70%", y: "50%", delay: 1.7 },
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Fondo de iconos animados tipo PlayStation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color}`}
            style={{ left: item.x, top: item.y, filter: "drop-shadow(0 0 18px rgba(59,130,246,0.18))" }}
            animate={{
              y: [0, 30, -30, 0],
              x: [0, 18, -18, 0],
              rotate: [0, 12, -12, 0],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 10 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
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
