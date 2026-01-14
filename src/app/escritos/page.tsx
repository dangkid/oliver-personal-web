"use client";

import Link from "next/link";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { BookIcon } from "@/components/Icons";

export default function Escritos() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState("todas");
  const [searchTerm, setSearchTerm] = useState("");

  const escritos = [
    {
      id: 1,
      titulo: "Entre Líneas de Código",
      tipo: "Poema",
      fecha: "Enero 2026",
      extracto: "En el silencio de la noche digital, donde los bytes danzan en perfecta armonía, escribo versos entre paréntesis y puntos y coma...",
      tiempoLectura: "3 min",
      categoria: "Tecnología y Arte",
      completo: `En el silencio de la noche digital,
donde los bytes danzan en perfecta armonía,
escribo versos entre paréntesis y puntos y coma.

Cada función es una estrofa,
cada variable un suspiro contenido
en la memoria del tiempo.

Los bucles repiten mis pensamientos,
las condicionales deciden mis caminos,
y en el debugger encuentro
las verdades que busco.

Compilar emociones,
ejecutar sentimientos,
renderizar sueños
en la pantalla del alma.

El código no miente,
las palabras tampoco deberían.
Ambos construyen mundos,
uno con lógica, otro con magia.

Y aquí estoy yo,
entre dos lenguajes,
traduciendo la vida
en sintaxis y metáforas.`,
    },
    {
      id: 2,
      titulo: "La Arquitectura del Alma",
      tipo: "Reflexión",
      fecha: "Diciembre 2025",
      extracto: "Como un sistema bien estructurado, el alma tiene sus capas: la interfaz que mostramos al mundo, la lógica que gobierna nuestras decisiones...",
      tiempoLectura: "5 min",
      categoria: "Filosofía",
      completo: `Como un sistema bien estructurado, el alma tiene sus capas:

La interfaz que mostramos al mundo,
pulida y amigable, diseñada para conectar.
Detrás, la lógica de negocio,
donde procesamos experiencias y tomamos decisiones.

Más profundo aún, la base de datos,
donde guardamos recuerdos, miedos y sueños.
Todo conectado por una red invisible
de emociones que fluyen como paquetes de datos.

¿Somos acaso servidores de nuestra propia existencia?
Respondiendo a requests del destino,
manejando errores con resiliencia,
escalando cuando la vida lo demanda.

Mantenemos logs de nuestras vivencias,
creamos backups de momentos importantes,
y a veces, necesitamos un restart
para volver a funcionar correctamente.

La arquitectura del alma es compleja,
distribuida entre razón y sentimiento,
con latencias imperceptibles
entre pensar y sentir.

Y así como optimizamos código,
debemos optimizar nuestra esencia,
eliminando procesos innecesarios,
liberando memoria de rencores.

Porque al final del día,
todos somos sistemas vivos,
ejecutando el programa de la vida,
en busca de nuestro uptime perfecto.`,
    },
    {
      id: 3,
      titulo: "Protocolos del Corazón",
      tipo: "Poema",
      fecha: "Noviembre 2025",
      extracto: "Si el amor fuera un protocolo de red, ¿sería TCP o UDP? ¿Necesita confirmación de entrega o es mejor dejarlo fluir sin garantías?",
      tiempoLectura: "2 min",
      categoria: "Amor y Tecnología",
      completo: `Si el amor fuera un protocolo de red,
¿sería TCP o UDP?

¿Necesita confirmación de entrega,
el three-way handshake de miradas y palabras,
la garantía de que el mensaje llegó intacto?

¿O es mejor UDP,
rápido, sin compromisos,
enviando sentimientos al viento
sin esperar respuesta?

Yo prefiero pensar en HTTP,
peticiones y respuestas,
GET para conocerte,
POST para compartir secretos,
PUT para actualizar lo que somos,
DELETE para los errores que cometemos.

Status 200: Todo va bien.
Status 404: Te perdí entre la multitud.
Status 500: Mi corazón tiene un error interno.

Y cuando hay conflicto,
un merge conflict del alma,
donde tus cambios y los míos
chocan en el mismo archivo,
debemos sentarnos,
revisar línea por línea,
y decidir qué versión
de nosotros queremos mantener.

Porque el amor, al final,
es el mejor sistema de versionado,
donde cada commit cuenta,
cada push es un acto de fe,
y cada pull request
es una invitación a crecer juntos.`,
    },
    {
      id: 4,
      titulo: "Viaje a Córdoba",
      tipo: "Reflexión",
      fecha: "Octubre 2025",
      extracto: "Las calles empedradas guardan historias que ningún servidor podría almacenar. Córdoba me enseñó que no todo se puede optimizar...",
      tiempoLectura: "4 min",
      categoria: "Viajes",
      completo: `Las calles empedradas guardan historias
que ningún servidor podría almacenar.

Córdoba me enseñó que no todo se puede optimizar,
que hay belleza en lo ineficiente,
en perderse sin Google Maps,
en dejar que el algoritmo del azar
decida tus próximos pasos.

Caminé por la Mezquita-Catedral,
admirando una arquitectura que fusiona culturas
como yo intento fusionar arte y tecnología.
Cada columna, un commit en la historia,
cada arco, una función que sostiene el tiempo.

En los patios llenos de flores,
entendí que la vida necesita espacios en blanco,
momentos sin comprimir,
silencios sin optimizar.

Las fotos que tomé no son solo píxeles,
son fragmentos de una experiencia
que no cabe en ninguna base de datos.

Y mientras veía el atardecer desde el puente,
pensé en todos los algoritmos del mundo
incapaces de predecir
la emoción de estar presente,
de simplemente ser.

Córdoba me recordó
que antes de ser administradores de sistemas,
somos exploradores de la vida,
y que el mejor proyecto
es el que construimos
un paso a la vez,
sin prisa, sin caché,
solo memoria viva.`,
    },
    {
      id: 5,
      titulo: "El Bug de la Existencia",
      tipo: "Reflexión",
      fecha: "Septiembre 2025",
      extracto: "Todos tenemos bugs en nuestro código personal. La pregunta no es cómo eliminarlos, sino cómo convivir con ellos mientras buscamos la solución...",
      tiempoLectura: "3 min",
      categoria: "Filosofía",
      completo: `Todos tenemos bugs en nuestro código personal.

Errores de lógica en nuestras decisiones,
excepciones no manejadas en nuestras emociones,
memory leaks de recuerdos que no podemos olvidar.

La pregunta no es cómo eliminarlos,
sino cómo convivir con ellos
mientras buscamos la solución.

A veces el bug está en el diseño,
en cómo fuimos programados por la vida,
en las estructuras heredadas
de generaciones anteriores.

Otras veces es un error de runtime,
algo que funcionaba bien
hasta que las condiciones cambiaron,
y de repente, todo crashea.

He aprendido que el debugging de uno mismo
requiere paciencia,
imprimir nuestros pensamientos en el log,
rastrear el origen del error
hasta la línea exacta del pasado.

Y cuando finalmente encuentras el bug,
ese momento de claridad
es como hacer git commit
de una versión mejorada de ti mismo.

Pero nunca estaremos libres de bugs,
porque somos software en constante desarrollo,
en eterna beta,
mejorando con cada iteración.

Y eso, lejos de ser un problema,
es lo que nos hace humanos,
perfectamente imperfectos,
funcionando a pesar de los errores,
escribiendo nuestra propia historia
una línea de vida a la vez.`,
    },
    {
      id: 6,
      titulo: "Sudo Sentir",
      tipo: "Poema",
      fecha: "Agosto 2025",
      extracto: "A veces necesito permisos de administrador para acceder a mis propias emociones, para ejecutar cambios en la configuración de mi corazón...",
      tiempoLectura: "2 min",
      categoria: "Emociones",
      completo: `sudo sentir

A veces necesito permisos de administrador
para acceder a mis propias emociones,
para ejecutar cambios
en la configuración de mi corazón.

Permission denied.
You are not in the sudoers file.
This incident will be reported.

¿A quién se reportan
los sentimientos bloqueados?
¿Quién es el root user
de mi sistema emocional?

chmod 777 alma.txt
Abrirlo todo,
hacerlo vulnerable,
legible, escribible, ejecutable
para cualquiera.

Pero no.
Mejor chmod 700,
solo yo tengo acceso total,
los demás, solo lo que elijo compartir.

Cada día hago:
sudo apt-get update feelings
sudo apt-get upgrade happiness
sudo systemctl restart motivation.service

Y cuando algo falla,
cuando el sistema se vuelve inestable,
no queda más que:
sudo reboot life

Esperar esos segundos de oscuridad,
y confiar en que al volver a encender,
todo estará un poco mejor,
los procesos reorganizados,
la memoria liberada,
listo para un nuevo día
con privilegios renovados.`,
    },
  ];

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
            <Link href="/escritos" className="text-stone-900 dark:text-stone-100 font-medium">
              Escritos
            </Link>
            <Link href="/proyectos" className="hidden sm:block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:tracking-wider">
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

          {/* Filtros y búsqueda */}
          <div className="mb-12 md:mb-16 space-y-6">
            {/* Buscador */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar escritos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-accent focus:outline-none transition-colors"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-400">
                  <BookIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap justify-center gap-3">
              {["todas", "Tecnología y Arte", "Filosofía", "Amor y Tecnología", "Viajes", "Emociones"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategoria(cat)}
                  className={`px-4 md:px-6 py-2 text-xs md:text-sm tracking-[0.1em] uppercase transition-all ${
                    selectedCategoria === cat
                      ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                      : "border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de escritos */}
          <div className="space-y-0.5 md:space-y-1">
            {escritos
              .filter((escrito) => 
                (selectedCategoria === "todas" || escrito.categoria === selectedCategoria) &&
                (searchTerm === "" || 
                  escrito.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  escrito.extracto.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map((escrito, index) => (
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
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent group-hover:text-stone-400 transition-colors">
                          {escrito.tipo}
                        </span>
                        <span className="text-[10px] md:text-xs text-stone-500 dark:text-stone-500 group-hover:text-stone-400 transition-colors">
                          {escrito.fecha}
                        </span>
                        <span className="text-[10px] md:text-xs text-stone-500 dark:text-stone-500 group-hover:text-stone-400 transition-colors">
                          • {escrito.tiempoLectura} lectura
                        </span>
                        <span className="text-[10px] md:text-xs px-2 py-1 bg-accent/10 text-accent group-hover:bg-stone-700 group-hover:text-stone-300 transition-colors">
                          {escrito.categoria}
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
