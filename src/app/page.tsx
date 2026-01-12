"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 relative overflow-hidden">
      {/* Efecto de fondo interactivo */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 113, 108, 0.15), transparent 40%)`
        }}
      />

      {/* Navegación minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD'AM
          </Link>
          <div className="flex gap-8 text-sm">
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
        <section className="min-h-screen flex items-center px-8 pt-32 pb-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            {/* Columna izquierda - Texto */}
            <div className={`space-y-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="space-y-4">
                <p className="text-sm tracking-[0.2em] uppercase text-accent">
                  Escritor & Administrador de Sistemas
                </p>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-stone-900 dark:text-stone-50">
                  Oliver
                  <br />
                  <span className="italic font-light">Dangelo</span>
                  <br />
                  Magallanes
                </h1>
              </div>

              <div className="h-px w-24 bg-accent" />

              <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-lg font-light">
                Donde la <span className="italic font-serif">poesía</span> se encuentra con el <span className="font-mono text-sm">código</span>.
                Estudiante de ASIR explorando el arte de las palabras y la arquitectura de sistemas.
              </p>

              <div className="flex gap-6 pt-4">
                <Link 
                  href="/escritos"
                  className="group relative px-8 py-4 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-stone-900 dark:bg-stone-100 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full" />
                  <span className="relative z-10 text-stone-900 dark:text-stone-100 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors duration-300">
                    Leer mis escritos
                  </span>
                </Link>
                <Link 
                  href="/proyectos"
                  className="px-8 py-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>

            {/* Columna derecha - Elemento visual artístico */}
            <div className={`relative h-[600px] ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              {/* Marco decorativo animado */}
              <div className="absolute inset-0 border border-stone-300 dark:border-stone-700 transform rotate-3 transition-transform hover:rotate-6 duration-700" />
              <div className="absolute inset-0 border border-stone-300 dark:border-stone-700 transform -rotate-3 transition-transform hover:-rotate-6 duration-700" />
              
              {/* Contenedor central con efecto */}
              <div className="absolute inset-8 bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900 flex items-center justify-center overflow-hidden group">
                <div className="text-center space-y-6 p-8 relative z-10">
                  <div className="text-6xl animate-float">✍️</div>
                  <p className="font-serif text-2xl italic text-stone-700 dark:text-stone-300">
                    "El código construye,
                    <br />
                    la poesía da sentido"
                  </p>
                  <div className="text-sm tracking-widest text-stone-500">— O.D.M</div>
                </div>
                {/* Efecto de overlay al hover */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección de especialidades - Grid artístico */}
        <section className="py-32 px-8 bg-stone-100 dark:bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl text-center mb-20 text-stone-900 dark:text-stone-50">
              Un viaje entre dos mundos
            </h2>

            <div className="grid md:grid-cols-3 gap-1 bg-stone-300 dark:bg-stone-700">
              {/* Card 1 - Escritos */}
              <Link href="/escritos" className="group bg-stone-50 dark:bg-stone-950 p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500">
                <div className="space-y-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">📝</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                    Escritos
                  </h3>
                  <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                  <p className="text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                    Poemas y reflexiones que exploran la condición humana, la tecnología y el arte.
                  </p>
                  <div className="text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                    Explorar →
                  </div>
                </div>
              </Link>

              {/* Card 2 - Proyectos */}
              <Link href="/proyectos" className="group bg-stone-50 dark:bg-stone-950 p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500">
                <div className="space-y-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">💻</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                    Proyectos
                  </h3>
                  <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                  <p className="text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                    Soluciones técnicas en ASIR: redes, sistemas, virtualización y automatización.
                  </p>
                  <div className="text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                    Ver trabajos →
                  </div>
                </div>
              </Link>

              {/* Card 3 - Galería */}
              <Link href="/galeria" className="group bg-stone-50 dark:bg-stone-950 p-12 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors duration-500">
                <div className="space-y-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">📸</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                    Galería
                  </h3>
                  <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                  <p className="text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors leading-relaxed">
                    Viajes, momentos e imágenes que alimentan la creatividad y la inspiración.
                  </p>
                  <div className="text-sm text-accent group-hover:text-stone-400 transition-colors pt-4">
                    Descubrir →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Sección de cita inspiradora */}
        <section className="py-32 px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="font-serif text-4xl md:text-5xl italic text-stone-800 dark:text-stone-200 leading-relaxed">
              "En cada línea de código encuentro ritmo,
              <br />
              en cada verso descubro estructura"
            </p>
            <div className="h-px w-32 bg-accent mx-auto" />
            <p className="text-sm tracking-[0.3em] uppercase text-accent-light">
              Filosofía Personal
            </p>
          </div>
        </section>

        {/* Footer minimalista */}
        <footer className="py-16 px-8 border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-stone-600 dark:text-stone-400">
                © 2026 Oliver Dangelo Magallanes Espinoza
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                Diseñado con ♥ y código
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="mailto:oliver@ejemplo.com" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                Contacto
              </a>
              <a href="#" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
