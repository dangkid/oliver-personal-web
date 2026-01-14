"use client";

import { useEffect, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024-2026",
    title: "ASIR - Segundo Año",
    description: "Profundizando en administración de sistemas, redes avanzadas, virtualización y seguridad informática.",
    icon: "🎓"
  },
  {
    year: "2023-2024",
    title: "ASIR - Primer Año",
    description: "Fundamentos de sistemas operativos, redes, bases de datos y scripting.",
    icon: "💻"
  },
  {
    year: "2020-2023",
    title: "Descubriendo la Escritura",
    description: "Inicio de mi pasión por la poesía y la escritura creativa, explorando la intersección entre tecnología y arte.",
    icon: "✍️"
  },
  {
    year: "2019",
    title: "Primeros Pasos en Tecnología",
    description: "Fascinación inicial con la programación y los sistemas informáticos.",
    icon: "🚀"
  }
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="space-y-12 md:space-y-16">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={`flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Contenido */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`inline-block p-6 md:p-8 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-accent transition-colors ${
                  index % 2 === 0 ? 'ml-16 md:ml-0' : 'ml-16 md:ml-0'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50">
                          {item.title}
                        </h3>
                        <span className="text-2xl">{item.icon}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50">
                          {item.title}
                        </h3>
                      </>
                    )}
                  </div>
                  <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent mb-4">
                    {item.year}
                  </p>
                  <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Punto central */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-stone-50 dark:border-stone-950 z-10" />

              {/* Espaciador invisible para grid */}
              <div className="hidden md:block flex-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
