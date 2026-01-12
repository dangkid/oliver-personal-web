"use client";

import Link from "next/link";
import { useState } from "react";

export default function Proyectos() {
  const [filter, setFilter] = useState<"todos" | "estudio" | "personal">("todos");

  const proyectos = [
    {
      id: 1,
      titulo: "Infraestructura de Red Corporativa",
      categoria: "estudio",
      descripcion: "Diseño e implementación de una infraestructura de red para una empresa mediana, incluyendo VLANs, routing y seguridad perimetral.",
      tecnologias: ["Cisco", "VLANs", "Routing", "Firewall"],
      año: "2026",
    },
    {
      id: 2,
      titulo: "Automatización con Ansible",
      categoria: "personal",
      descripcion: "Scripts de automatización para despliegue y configuración de servidores Linux usando Ansible y Docker.",
      tecnologias: ["Ansible", "Docker", "Linux", "Bash"],
      año: "2025",
    },
    // Aquí podrás agregar más proyectos
  ];

  const proyectosFiltrados = proyectos.filter(p => 
    filter === "todos" || p.categoria === filter
  );

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD'AM
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Inicio
            </Link>
            <Link href="/escritos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Escritos
            </Link>
            <Link href="/proyectos" className="text-stone-900 dark:text-stone-100 font-medium">
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

      {/* Contenido */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Portfolio Técnico
            </p>
            <h1 className="font-serif text-6xl md:text-7xl text-stone-900 dark:text-stone-50 mb-6">
              Proyectos
            </h1>
            <div className="h-px w-32 bg-accent mx-auto mb-8" />
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
              Soluciones técnicas desarrolladas durante mi formación en ASIR
              y proyectos personales de experimentación
            </p>
          </div>

          {/* Filtros */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setFilter("todos")}
              className={`px-6 py-3 text-sm tracking-wider transition-all ${
                filter === "todos"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              TODOS
            </button>
            <button
              onClick={() => setFilter("estudio")}
              className={`px-6 py-3 text-sm tracking-wider transition-all ${
                filter === "estudio"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              ESTUDIO
            </button>
            <button
              onClick={() => setFilter("personal")}
              className={`px-6 py-3 text-sm tracking-wider transition-all ${
                filter === "personal"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              PERSONAL
            </button>
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <article 
                key={proyecto.id}
                className="group border border-stone-200 dark:border-stone-800 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Header del proyecto */}
                <div className="p-8 bg-stone-100 dark:bg-stone-900 group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-accent group-hover:text-stone-400 transition-colors">
                      {proyecto.categoria}
                    </span>
                    <span className="text-sm text-stone-500 dark:text-stone-500 group-hover:text-stone-400 transition-colors font-mono">
                      {proyecto.año}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors mb-4 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  
                  <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-8">
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                    {proyecto.descripcion}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-mono border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex gap-4 text-sm">
                    <button className="text-accent hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2">
                      <span>Ver detalles</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="mt-20 p-12 border border-stone-200 dark:border-stone-800 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="text-4xl mb-4">💻</div>
              <p className="font-serif text-2xl italic text-stone-700 dark:text-stone-300">
                "Cada proyecto es una oportunidad de aprender,
                <br />
                cada línea de código, un nuevo descubrimiento"
              </p>
              <div className="h-px w-24 bg-accent mx-auto my-6" />
              <p className="text-sm text-stone-500 dark:text-stone-500">
                Documenta aquí tus proyectos de ASIR y desarrollos personales.
                Incluye documentación técnica, diagramas y aprendizajes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
