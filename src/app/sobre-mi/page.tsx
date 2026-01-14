"use client";

import Link from "next/link";
import { GraduationIcon, PenIcon, SparklesIcon, EmailIcon, LinkedinIcon, GithubIcon } from "@/components/Icons";
import SkillBar from "@/components/SkillBar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
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
            <Link href="/escritos" className="hidden sm:block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Escritos
            </Link>
            <Link href="/proyectos" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/galeria" className="hidden md:block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
              Galería
            </Link>
            <Link href="/sobre-mi" className="text-stone-900 dark:text-stone-100 font-medium">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header minimalista */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 md:mb-6">
              Presentación
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-50 mb-4 md:mb-6">
              Sobre mí
            </h1>
            <div className="h-px w-20 md:w-32 bg-accent mx-auto" />
          </div>

          {/* Contenido principal - Layout de dos columnas */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
            {/* Columna principal */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Introducción */}
              <div className="border-l-2 border-accent pl-4 md:pl-8">
                <h2 className="font-serif text-2xl md:text-4xl text-stone-900 dark:text-stone-50 mb-4 md:mb-6">
                  Hola, soy Oliver Dangelo Magallanes Espinoza
                </h2>
                <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  Un explorador entre dos mundos: el técnico y el artístico.
                  Estudiante de segundo año de ASIR que encuentra poesía en el código
                  y estructura en las palabras.
                </p>
              </div>

              {/* Sección ASIR */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="text-stone-600 dark:text-stone-400">
                    <GraduationIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50">
                    Estudiante de ASIR
                  </h3>
                </div>
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed pl-10 md:pl-16">
                  Segundo año en Administración de Sistemas Informáticos en Red.
                  Apasionado por la infraestructura IT, virtualización, redes y seguridad.
                  Cada sistema que configuro es como escribir un nuevo capítulo técnico.
                </p>
                <div className="pl-10 md:pl-16 pt-3 md:pt-4 space-y-3">
                  <SkillBar skill="Linux & Bash" percentage={85} delay={100} />
                  <SkillBar skill="Redes & Cisco" percentage={78} delay={200} />
                  <SkillBar skill="Docker & Kubernetes" percentage={72} delay={300} />
                  <SkillBar skill="Ansible & Automatización" percentage={68} delay={400} />
                  <SkillBar skill="Seguridad IT" percentage={75} delay={500} />
                  <SkillBar skill="Cloud (AWS/Azure)" percentage={65} delay={600} />
                </div>
              </div>

              {/* Sección Escritor */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="text-stone-600 dark:text-stone-400">
                    <PenIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50">
                    Escritor
                  </h3>
                </div>
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed pl-10 md:pl-16">
                  Me expreso a través de poemas, poesías y reflexiones de inspiración propia.
                  La escritura es mi forma de procesar el mundo, de dar sentido a las experiencias
                  y de conectar con las emociones que la tecnología no puede tocar.
                </p>
              </div>

              {/* Filosofía */}
              <div className="p-6 md:p-8 bg-stone-100 dark:bg-stone-900 border-l-4 border-accent">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-stone-600 dark:text-stone-400">
                    <SparklesIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50">
                    Mi Visión
                  </h3>
                </div>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                  <p className="italic font-serif text-lg md:text-xl">
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
            <div className="space-y-6 md:space-y-8">
              {/* Info rápida */}
              <div className="p-4 md:p-6 border border-stone-200 dark:border-stone-800">
                <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent mb-4 md:mb-6">
                  Info Rápida
                </h4>
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
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
              <div className="p-4 md:p-6 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900">
                <p className="font-serif text-base md:text-lg italic leading-relaxed">
                  &quot;En el equilibrio entre el código y el verso,
                  encuentro mi verdadera voz&quot;
                </p>
                <p className="text-[10px] md:text-xs mt-3 md:mt-4 opacity-70">— Oliver Dangelo</p>
              </div>

              {/* Enlaces */}
              <div className="space-y-2 md:space-y-3">
                <a href="mailto:oliverdangelo.magallanes@gmail.com" className="flex items-center gap-3 p-3 md:p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <EmailIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Contacto</span>
                </a>
                <a href="https://www.linkedin.com/in/olivermagallanes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">LinkedIn</span>
                </a>
                <a href="https://github.com/dangkid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-colors text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100">
                  <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Nueva sección: Experiencia y Certificaciones */}
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 dark:text-stone-50 mb-8 md:mb-12 text-center">
              Formación y Experiencia
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Educación */}
              <div className="space-y-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Educación</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-50">
                        ASIR - Ciclo Superior
                      </h4>
                      <span className="text-xs text-stone-500">Actual</span>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      IES Cura Valera, Huércal-Overa, Almería
                    </p>
                    <p className="text-xs text-stone-500 mt-2">
                      Administración de Sistemas Informáticos en Red - En curso
                    </p>
                  </div>

                  <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-50">
                        Desarrollo de Software
                      </h4>
                      <span className="text-xs text-stone-500">Abr 2023 - Actual</span>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Instituto San Ignacio de Loyola, Miraflores, Lima
                    </p>
                    <p className="text-xs text-stone-500 mt-2">
                      Formación en desarrollo de software y programación
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificaciones y Cursos */}
              <div className="space-y-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Certificaciones y Cursos</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-50">
                        Ciberseguridad Avanzada
                      </h4>
                      <span className="text-xs text-accent">2025</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Virensis - IFCT0050 Entornos de tecnologías de operación
                    </p>
                  </div>

                  <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-50">
                        Fundamentos de IA
                      </h4>
                      <span className="text-xs text-accent">Nov 2025</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      OpenWebinars - 7 horas (Machine Learning, Redes Neuronales, Python)
                    </p>
                  </div>

                  <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-50">
                        IT Essentials: PC Hardware
                      </h4>
                      <span className="text-xs text-accent">Cisco</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Cisco Networking Academy - Hardware y Software
                    </p>
                  </div>

                  <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-50">
                        Introducción a Ciberseguridad
                      </h4>
                      <span className="text-xs text-accent">Cisco</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Cisco Networking Academy
                    </p>
                  </div>

                  <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-50">
                Experiencia profesional */}
            <div className="mt-12 md:mt-16 p-8 md:p-12 bg-stone-100 dark:bg-stone-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Experiencia</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base md:text-lg font-serif text-stone-900 dark:text-stone-50">Soporte Técnico Moodle</h4>
                    <span className="text-xs text-stone-500">Mar - Jun 2024</span>
                  </div>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Zoluciones - Lima, Perú</p>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Soporte académico y técnico en plataforma Moodle para UCAL, Toulouse Lautrec y CERTUS.
                    Resolución de incidencias, gestión de cursos y asistencia a estudiantes y docentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Habilidades técnicas */}
            <div className="mt-8 md:mt-12 p-8 md:p-12 bg-stone-100 dark:bg-stone-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Habilidades Técnicas</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Desarrollo Web</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    React, JavaScript, HTML, CSS, Bootstrap, Sass
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">DevOps & Cloud</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Docker, Kubernetes, AWS, Git
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Redes</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Switches, Routers, Access Points, Cisco
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Sistemas Operativos</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Windows, Linux, macOS, Active Directory
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Bases de Datos</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    MySQL, SQL Server
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Virtualización</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    VirtualBox, Docker, Moodle
                  </p>
                </div>
              </div>
            </div>

            {/* Competencias blandas */}
            <div className="mt-8 md:mt-12 p-8 md:p-12 bg-stone-100 dark:bg-stone-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Competencias Blandas</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Empatía, trabajo en equipo, resolución de problemas, atención al detalle, comunicación efectiva, 
                capacidad de aprendizaje continuo y adaptabilidad.
              </pv>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">DevOps</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Git, CI/CD, Terraform, Ansible
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Monitorización</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Nagios, Zabbix, Prometheus, Grafana
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Scripting</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Bash, Python, PowerShell
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Web</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    HTML, CSS, JavaScript, React, Next.js
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Bases de Datos</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    MySQL, PostgreSQL, MongoDB
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 dark:text-stone-50 mb-2">Cloud</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    AWS, Azure, Digital Ocean
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
