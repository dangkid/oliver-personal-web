"use client";

import Link from "next/link";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-sm tracking-[0.3em] uppercase text-stone-800 dark:text-stone-200 hover:text-accent transition-colors"
          >
            OD&apos;AM
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
            <Link href="/galeria" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Galería
            </Link>
            <Link href="/sobre-mi" className="text-stone-900 dark:text-stone-100 font-medium">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header minimalista */}
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Presentación
            </p>
            <h1 className="font-serif text-6xl md:text-7xl text-stone-900 dark:text-stone-50 mb-6">
              Sobre mí
            </h1>
            <div className="h-px w-32 bg-accent mx-auto" />
          </div>

          {/* Contenido principal - Layout de dos columnas */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Columna principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introducción */}
              <div className="border-l-2 border-accent pl-8">
                <h2 className="font-serif text-4xl text-stone-900 dark:text-stone-50 mb-6">
                  Hola, soy Oliver Dangelo Magallanes Espinoza
                </h2>
                <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  Un explorador entre dos mundos: el técnico y el artístico.
                  Estudiante de segundo año de ASIR que encuentra poesía en el código
                  y estructura en las palabras.
                </p>
              </div>

              {/* Sección ASIR */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">🎓</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50">
                    Estudiante de ASIR
                  </h3>
                </div>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed pl-16">
                  Segundo año en Administración de Sistemas Informáticos en Red.
                  Apasionado por la infraestructura IT, virtualización, redes y seguridad.
                  Cada sistema que configuro es como escribir un nuevo capítulo técnico.
                </p>
                <div className="pl-16 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {["Linux", "Redes", "Docker", "Ansible", "Seguridad", "Cloud"].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs font-mono border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sección Escritor */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">✍️</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50">
                    Escritor
                  </h3>
                </div>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed pl-16">
                  Me expreso a través de poemas, poesías y reflexiones de inspiración propia.
                  La escritura es mi forma de procesar el mundo, de dar sentido a las experiencias
                  y de conectar con las emociones que la tecnología no puede tocar.
                </p>
              </div>

              {/* Filosofía */}
              <div className="p-8 bg-stone-100 dark:bg-stone-900 border-l-4 border-accent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🌟</div>
                  <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-50">
                    Mi Visión
                  </h3>
                </div>
                <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
                  <p className="italic font-serif text-xl">
                    &quot;La tecnología construye el futuro, pero las palabras dan sentido al presente.&quot;
                  </p>
                  <p>
                    Creo que el arte y la ciencia no son opuestos, sino complementarios.
                    En cada línea de código encuentro ritmo, en cada verso descubro estructura.
                    Este sitio es la manifestación de esa creencia: un espacio donde lo técnico
                    y lo poético coexisten en armonía.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Info rápida */}
              <div className="p-6 border border-stone-200 dark:border-stone-800">
                <h4 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">
                  Info Rápida
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-stone-500 dark:text-stone-500 mb-1">Educación</p>
                    <p className="text-stone-900 dark:text-stone-100">ASIR - 2º Año</p>
                  </div>
                  <div className="h-px bg-stone-200 dark:bg-stone-800" />
                  <div>
                    <p className="text-stone-500 dark:text-stone-500 mb-1">Pasiones</p>
                    <p className="text-stone-900 dark:text-stone-100">Escritura & Tecnología</p>
                  </div>
                  <div className="h-px bg-stone-200 dark:bg-stone-800" />
                  <div>
                    <p className="text-stone-500 dark:text-stone-500 mb-1">Ubicación</p>
                    <p className="text-stone-900 dark:text-stone-100">España</p>
                  </div>
                </div>
              </div>

              {/* Quote inspiracional */}
              <div className="p-6 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900">
                <p className="font-serif text-lg italic leading-relaxed">
                  &quot;En el equilibrio entre el código y el verso,
                  encuentro mi verdadera voz&quot;
                </p>
                <p className="text-xs mt-4 opacity-70">— Oliver Dangelo</p>
              </div>

              {/* Enlaces */}
              <div className="space-y-3">
                <a href="mailto:oliver@ejemplo.com" className="block p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <span className="text-sm">📧 Contacto</span>
                </a>
                <a href="#" className="block p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <span className="text-sm">💼 LinkedIn</span>
                </a>
                <a href="#" className="block p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <span className="text-sm">🐙 GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
