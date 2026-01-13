"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Galeria() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Tus fotos - Puedes editar los títulos, ubicaciones y descripciones
  const fotos = [
    {
      id: 1,
      titulo: "Foto 1",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto1.jpg",
    },
    {
      id: 2,
      titulo: "Foto 2",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto2.jpg",
    },
    {
      id: 3,
      titulo: "Foto 3",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto3.jpg",
    },
    {
      id: 4,
      titulo: "Foto 4",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto4.jpg",
    },
    {
      id: 5,
      titulo: "Foto 5",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto5.jpg",
    },
    {
      id: 6,
      titulo: "Foto 6",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto6.jpg",
    },
    {
      id: 7,
      titulo: "Foto 7",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto7.jpg",
    },
    {
      id: 8,
      titulo: "Foto 8",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto8.jpg",
    },
    {
      id: 9,
      titulo: "Foto 9",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto9.jpg",
    },
    {
      id: 10,
      titulo: "Foto 10",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto10.jpg",
    },
    {
      id: 11,
      titulo: "Foto 11",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto11.jpg",
    },
    {
      id: 12,
      titulo: "Foto 12",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto12.jpg",
    },
    {
      id: 13,
      titulo: "Foto 13",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto13.jpg",
    },
    {
      id: 14,
      titulo: "Foto 14",
      ubicacion: "Ubicación",
      descripcion: "Descripción de la foto",
      imagen: "/images/foto14.jpg",
    },
  ];
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD&apos;ME
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Inicio
            </Link>
            <Link href="/escritos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Escritos
            </Link>
            <Link href="/proyectos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/galeria" className="text-stone-900 dark:text-stone-100 font-medium">
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Colección Visual
            </p>
            <h1 className="font-serif text-6xl md:text-7xl text-stone-900 dark:text-stone-50 mb-6">
              Galería
            </h1>
            <div className="h-px w-32 bg-accent mx-auto mb-8" />
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
              Momentos capturados que inspiran palabras,
              lugares que despiertan la creatividad
            </p>
          </div>

          {/* Grid asimétrico de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-stone-300 dark:bg-stone-700">
            {fotos.map((foto, i) => (
              <div 
                key={foto.id}
                className={`group relative overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer transition-all duration-500 hover:z-10 ${
                  i === 0 || i === 11 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Imagen real */}
                <Image
                  src={foto.imagen}
                  alt={foto.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Overlay oscuro al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 to-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Información que aparece al hacer hover */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="space-y-2">
                    <p className="text-xs tracking-[0.2em] uppercase text-stone-400">
                      {foto.ubicacion}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-medium">
                      {foto.titulo}
                    </h3>
                    <div className="h-px w-16 bg-white/50" />
                    <p className="text-sm text-stone-300 italic">
                      {foto.descripcion}
                    </p>
                  </div>
                </div>

                {/* Borde decorativo al hover */}
                <div className="absolute inset-4 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="mt-20 p-12 border border-stone-200 dark:border-stone-800 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="text-4xl mb-4">🎨</div>
              <p className="font-serif text-2xl italic text-stone-700 dark:text-stone-300">
                &quot;Cada imagen cuenta una historia,
                <br />
                cada momento inspira un verso&quot;
              </p>
              <div className="h-px w-24 bg-accent mx-auto my-6" />
              <p className="text-sm text-stone-500 dark:text-stone-500">
                Coloca tus fotos de viajes, momentos especiales e imágenes inspiradoras en la carpeta{' '}
                <span className="font-mono text-xs px-2 py-1 bg-stone-100 dark:bg-stone-900">public/images</span>
                {' '}para que aparezcan aquí.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
