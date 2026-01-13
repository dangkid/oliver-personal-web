"use client";

import Link from "next/link";
import { useState } from "react";

export default function Escritos() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const escritos = [
    {
      id: 1,
      titulo: "Entre Líneas de Código",
      tipo: "Poema",
      fecha: "Enero 2026",
      extracto: "En el silencio de la noche digital, donde los bytes danzan en perfecta armonía, escribo versos entre paréntesis y puntos y coma...",
      completo: false,
    },
    {
      id: 2,
      titulo: "La Arquitectura del Alma",
      tipo: "Reflexión",
      fecha: "Diciembre 2025",
      extracto: "Como un sistema bien estructurado, el alma tiene sus capas: la interfaz que mostramos al mundo, la lógica que gobierna nuestras decisiones...",
      completo: false,
    },
    // Aquí podrás agregar más escritos
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD&apos;ME
          </Link>
          <div className="flex gap-3 md:gap-8 text-xs md:text-sm">
            <Link href="/" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Inicio
            </Link>
            <Link href="/escritos" className="text-stone-900 dark:text-stone-100 font-medium">
              Escritos
            </Link>
            <Link href="/proyectos" className="hidden sm:block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/galeria" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Galería
            </Link>
            <Link href="/sobre-mi" className="hidden md:block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 md:mb-6">
              Colección Literaria
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-50 mb-4 md:mb-6">
              Escritos
            </h1>
            <div className="h-px w-20 md:w-32 bg-accent mx-auto mb-6 md:mb-8" />
            <p className="text-base md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Palabras que nacen entre el código y el alma,
              reflexiones de un estudiante que escribe
            </p>
          </div>

          {/* Lista de escritos */}
          <div className="space-y-0.5 md:space-y-1">
            {escritos.map((escrito, index) => (
              <article 
                key={escrito.id}
                className="group relative bg-stone-100 dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-100 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(escrito.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="p-6 md:p-12 lg:p-16">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent group-hover:text-stone-400 transition-colors">
                          {escrito.tipo}
                        </span>
                        <span className="text-[10px] md:text-xs text-stone-500 dark:text-stone-500 group-hover:text-stone-400 transition-colors">
                          {escrito.fecha}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors mb-4 md:mb-6">
                        {escrito.titulo}
                      </h2>
                      <div 
                        className="h-px bg-accent transition-all duration-500"
                        style={{
                          width: hoveredId === escrito.id ? '100%' : '60px'
                        }}
                      />
                    </div>
                    <div className="text-4xl md:text-6xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      ✍️
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-lg text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 leading-relaxed mb-6 md:mb-8 font-light italic line-clamp-3">
                    &quot;{escrito.extracto}&quot;
                  </p>
                  
                  <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-accent group-hover:text-stone-400 transition-colors">
                    <span>Leer completo</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="mt-12 md:mt-20 p-6 md:p-12 border border-stone-200 dark:border-stone-800 text-center">
            <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
              <p className="font-serif text-lg md:text-2xl italic text-stone-700 dark:text-stone-300 px-4">
                &quot;Cada escrito es un pedazo de código emocional,
                <br className="hidden sm:block" />
                compilado desde el corazón&quot;
              </p>
              <div className="h-px w-16 md:w-24 bg-accent mx-auto my-4 md:my-6" />
              <p className="text-xs md:text-sm text-stone-500 dark:text-stone-500 px-4">
                Una colección en construcción de versos, pensamientos y reflexiones
                nacidas entre el código y la contemplación del mundo.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
