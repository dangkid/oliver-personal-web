"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import RevealOnScroll from "@/components/RevealOnScroll";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import { PenIcon, BookIcon, TerminalIcon, ImageIcon } from "@/components/Icons";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 relative overflow-hidden cursor-none md:cursor-none">
      {/* Componentes interactivos globales */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Efecto de fondo interactivo */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 113, 108, 0.15), transparent 40%)`
        }}
      />

      {/* Navegación minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD&apos;ME
          </Link>
          <div className="flex gap-4 md:gap-8 text-xs md:text-sm">
            <Link href="/escritos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Escritos
            </Link>
            <Link href="/proyectos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/galeria" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Galería
            </Link>
            <Link href="/sobre-mi" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diseño asimétrico */}
      <main>
        <section className="min-h-screen flex items-center px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Columna izquierda - Texto */}
            <div className={`space-y-6 md:space-y-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="space-y-3 md:space-y-4">
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent">
                  Escritor &amp; Administrador de Sistemas
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-stone-900 dark:text-stone-50">
                  Oliver
                  <br />
                  <span className="italic font-light">Dangelo</span>
                  <br />
                  Magallanes
                </h1>
              </div>

              <div className="h-px w-16 md:w-24 bg-accent" />

              <p className="text-base md:text-lg lg:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-lg font-light">
                Donde la <span className="italic font-serif">poesía</span> se encuentra con el <span className="font-mono text-sm">código</span>.
                Estudiante de ASIR explorando el arte de las palabras y la arquitectura de sistemas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
                <MagneticButton 
                  href="/escritos"
                  className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden text-center"
                >
                  <span className="absolute inset-0 bg-stone-900 dark:bg-stone-100 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full" />
                  <span className="relative z-10 text-sm md:text-base text-stone-900 dark:text-stone-100 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors duration-300">
                    Leer mis escritos
                  </span>
                </MagneticButton>
                <MagneticButton 
                  href="/proyectos"
                  className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-center"
                >
                  Ver proyectos
                </MagneticButton>
              </div>
            </div>

            {/* Columna derecha - Video artístico */}
            <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              {/* Marco decorativo animado */}
              <div className="absolute inset-0 border border-stone-300 dark:border-stone-700 transform rotate-2 md:rotate-3 transition-transform hover:rotate-4 md:hover:rotate-6 duration-700" />
              <div className="absolute inset-0 border border-stone-300 dark:border-stone-700 transform -rotate-2 md:-rotate-3 transition-transform hover:-rotate-4 md:hover:-rotate-6 duration-700" />
              
              {/* Contenedor central con video */}
              <div className="absolute inset-4 md:inset-8 overflow-hidden group">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/IMG_2008.MOV" type="video/mp4" />
                </video>
                {/* Overlay oscuro sutil */}
                <div className="absolute inset-0 bg-stone-900/20 dark:bg-stone-950/30 group-hover:bg-stone-900/10 dark:group-hover:bg-stone-950/20 transition-all duration-500" />
                {/* Icono overlay */}
                <div className="absolute top-6 right-6 text-stone-50/70 group-hover:text-stone-50 transition-colors duration-500">
                  <PenIcon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                {/* Texto overlay */}
                <div className="absolute inset-0 flex items-end justify-center p-6 md:p-8">
                  <div className="text-center space-y-2 md:space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-serif text-lg md:text-xl italic text-stone-50 drop-shadow-lg">
                      &quot;El código construye,
                      <br />
                      la poesía da sentido&quot;
                    </p>
                    <div className="text-xs md:text-sm tracking-widest text-stone-200">— O.D.M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de especialidades - Grid artístico */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-stone-100 dark:bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-20 text-stone-900 dark:text-stone-50 px-4">
                Un viaje entre dos mundos
              </h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-1 bg-stone-300 dark:bg-stone-700">
              {/* Card 1 - Escritos */}
              <RevealOnScroll delay={100}>
                <TiltCard>
                  <Link href="/escritos" className="block group bg-stone-50 dark:bg-stone-950 p-8 md:p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500 h-full">
                    <div className="space-y-4 md:space-y-6">
                      <div className="text-stone-600 dark:text-stone-400 group-hover:text-stone-50 dark:group-hover:text-stone-900 group-hover:scale-110 transition-all duration-500">
                        <BookIcon className="w-12 h-12 md:w-14 md:h-14" />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                        Escritos
                      </h3>
                      <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                      <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                        Poemas y reflexiones que exploran la condición humana, la tecnología y el arte.
                      </p>
                      <div className="text-xs md:text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                        Explorar →
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </RevealOnScroll>

              {/* Card 2 - Proyectos */}
              <RevealOnScroll delay={200}>
                <TiltCard>
                  <Link href="/proyectos" className="block group bg-stone-50 dark:bg-stone-950 p-8 md:p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500 h-full">
                    <div className="space-y-4 md:space-y-6">
                      <div className="text-stone-600 dark:text-stone-400 group-hover:text-stone-50 dark:group-hover:text-stone-900 group-hover:scale-110 transition-all duration-500">
                        <TerminalIcon className="w-12 h-12 md:w-14 md:h-14" />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                        Proyectos
                      </h3>
                      <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                      <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                        Soluciones técnicas en ASIR: redes, sistemas, virtualización y automatización.
                      </p>
                      <div className="text-xs md:text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                        Ver trabajos →
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </RevealOnScroll>

              {/* Card 3 - Galería */}
              <RevealOnScroll delay={300}>
                <TiltCard>
                  <Link href="/galeria" className="block group bg-stone-50 dark:bg-stone-950 p-8 md:p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500 h-full">
                    <div className="space-y-4 md:space-y-6">
                      <div className="text-stone-600 dark:text-stone-400 group-hover:text-stone-50 dark:group-hover:text-stone-900 group-hover:scale-110 transition-all duration-500">
                        <ImageIcon className="w-12 h-12 md:w-14 md:h-14" />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                        Galería
                      </h3>
                      <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                      <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                        Viajes, momentos e imágenes que alimentan la creatividad y la inspiración.
                      </p>
                      <div className="text-xs md:text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                        Descubrir →
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Sección de estadísticas */}
        <section className="py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <Stats />
          </RevealOnScroll>
        </section>

        {/* Sección de últimos escritos destacados */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-stone-100 dark:bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Del Alma al Papel
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 mb-6">
                  Escritos Destacados
                </h2>
                <div className="h-px w-24 bg-accent mx-auto" />
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <RevealOnScroll delay={100}>
                <Link href="/escritos" className="group block p-8 md:p-12 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 hover:border-accent transition-all duration-500 h-full">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] uppercase text-accent">Poema</span>
                      <span className="text-xs text-stone-500">Enero 2026</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-accent transition-colors">
                      Entre Líneas de Código
                    </h3>
                    <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed italic line-clamp-4">
                      &quot;En el silencio de la noche digital, donde los bytes danzan en perfecta armonía, escribo versos entre paréntesis y puntos y coma. Cada función es una estrofa, cada variable un suspiro contenido en la memoria del tiempo...&quot;
                    </p>
                    <div className="flex items-center gap-2 text-xs text-accent group-hover:gap-4 transition-all">
                      <span>Leer más</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <Link href="/escritos" className="group block p-8 md:p-12 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 hover:border-accent transition-all duration-500 h-full">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] uppercase text-accent">Reflexión</span>
                      <span className="text-xs text-stone-500">Diciembre 2025</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-accent transition-colors">
                      La Arquitectura del Alma
                    </h3>
                    <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed italic line-clamp-4">
                      &quot;Como un sistema bien estructurado, el alma tiene sus capas: la interfaz que mostramos al mundo, la lógica que gobierna nuestras decisiones, y en lo más profundo, los datos esenciales que definen quiénes somos...&quot;
                    </p>
                    <div className="flex items-center gap-2 text-xs text-accent group-hover:gap-4 transition-all">
                      <span>Leer más</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={300}>
              <div className="text-center">
                <Link 
                  href="/escritos"
                  className="inline-block px-8 py-4 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 hover:bg-stone-900 dark:hover:bg-stone-100 hover:text-stone-50 dark:hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.1em] uppercase"
                >
                  Ver Todos los Escritos
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sección de proyectos destacados */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Trabajo Técnico
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 mb-6">
                  Proyectos Destacados
                </h2>
                <div className="h-px w-24 bg-accent mx-auto" />
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-1 bg-stone-300 dark:bg-stone-700 mb-12">
              <RevealOnScroll delay={100}>
                <div className="group bg-stone-50 dark:bg-stone-950 p-8 hover:bg-stone-900 dark:hover:bg-stone-100 transition-colors duration-500 h-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Docker</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Linux</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Nginx</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                      Infraestructura Web con Contenedores
                    </h3>
                    <div className="h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors line-clamp-3">
                      Sistema de despliegue automatizado usando Docker Compose para múltiples aplicaciones web con balanceo de carga.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="group bg-stone-50 dark:bg-stone-950 p-8 hover:bg-stone-900 dark:hover:bg-stone-100 transition-colors duration-500 h-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Ansible</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Python</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Bash</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                      Automatización de Configuraciones
                    </h3>
                    <div className="h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors line-clamp-3">
                      Playbooks de Ansible para configuración automática de servidores, usuarios y servicios en entornos de producción.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="group bg-stone-50 dark:bg-stone-950 p-8 hover:bg-stone-900 dark:hover:bg-stone-100 transition-colors duration-500 h-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Cisco</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">VLANs</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent">Routing</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                      Diseño de Red Empresarial
                    </h3>
                    <div className="h-px w-12 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors line-clamp-3">
                      Arquitectura de red segmentada con VLANs, ACLs y protocolos de routing dinámico para empresa mediana.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={400}>
              <div className="text-center">
                <Link 
                  href="/proyectos"
                  className="inline-block px-8 py-4 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 hover:bg-stone-900 dark:hover:bg-stone-100 hover:text-stone-50 dark:hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.1em] uppercase"
                >
                  Ver Todos los Proyectos
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sección de Timeline */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-stone-100 dark:bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16 md:mb-24">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Mi Trayectoria
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 mb-6">
                  El Camino Recorrido
                </h2>
                <div className="h-px w-24 bg-accent mx-auto" />
              </div>
            </RevealOnScroll>
            
            <Timeline />
          </div>
        </section>

        {/* Sección de cita inspiradora */}
        <RevealOnScroll>
          <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic text-stone-800 dark:text-stone-200 leading-relaxed px-4">
                &quot;En cada línea de código encuentro ritmo,
                <br className="hidden sm:block" />
                en cada verso descubro estructura&quot;
              </p>
              <div className="h-px w-24 md:w-32 bg-accent mx-auto" />
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent">
                Filosofía Personal
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* Sección de contacto */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-stone-100 dark:bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Conectemos
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 mb-6">
                  Hablemos
                </h2>
                <div className="h-px w-24 bg-accent mx-auto mb-6" />
                <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                  Ya sea para colaborar en un proyecto, discutir sobre tecnología o simplemente compartir ideas, estoy aquí.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </section>

        {/* Footer con redes sociales */}
        <footer className="py-12 md:py-16 px-4 md:px-8 border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              {/* Redes sociales */}
              <RevealOnScroll>
                <div className="text-center space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-stone-500 dark:text-stone-500">
                    Conecta conmigo
                  </p>
                  <SocialLinks />
                </div>
              </RevealOnScroll>
              
              {/* Copyright */}
              <div className="text-center pt-8 border-t border-stone-200 dark:border-stone-800 w-full">
                <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400">
                  © 2026 Oliver Dangelo Magallanes Espinoza
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-500 mt-2">
                  Donde el arte se encuentra con la tecnología
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
