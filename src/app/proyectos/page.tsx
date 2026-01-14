"use client";

import Link from "next/link";
import { useState } from "react";
import { TerminalIcon, GithubIcon } from "@/components/Icons";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Proyectos() {
  const [filter, setFilter] = useState<"todos" | "estudio" | "personal">("todos");

  const proyectos = [
    {
      id: 1,
      titulo: "Infraestructura de Red Corporativa",
      categoria: "estudio",
      descripcion: "Diseño e implementación completa de una infraestructura de red para una empresa mediana, incluyendo segmentación con VLANs, routing dinámico, seguridad perimetral con firewall y políticas de acceso. Proyecto de fin de ciclo enfocado en soluciones empresariales escalables.",
      tecnologias: ["Cisco", "VLANs", "OSPF", "Firewall", "ACLs", "Packet Tracer"],
      año: "2026",
      github: "",
      demo: "",
      detalles: "Red empresarial de 3 plantas con 150+ dispositivos, segmentación por departamentos, redundancia y alta disponibilidad."
    },
    {
      id: 2,
      titulo: "Automatización con Ansible",
      categoria: "personal",
      descripcion: "Suite completa de playbooks de Ansible para automatizar el despliegue, configuración y mantenimiento de servidores Linux. Incluye aprovisionamiento de contenedores Docker, gestión de usuarios, configuración de servicios y monitorización básica.",
      tecnologias: ["Ansible", "Docker", "Linux", "Bash", "Python", "YAML"],
      año: "2025",
      github: "https://github.com/dangkid",
      demo: "",
      detalles: "Más de 20 playbooks para diferentes escenarios: web servers, bases de datos, reverse proxies, etc."
    },
    {
      id: 3,
      titulo: "Clúster de Kubernetes Local",
      categoria: "personal",
      descripcion: "Implementación de un clúster de Kubernetes en local usando Minikube para aprender orquestación de contenedores, deployments, services, ingress controllers y persistent volumes. Incluye aplicaciones de ejemplo con CI/CD.",
      tecnologias: ["Kubernetes", "Docker", "Helm", "Minikube", "kubectl"],
      año: "2025",
      github: "https://github.com/dangkid",
      demo: "",
      detalles: "3 nodos workers, monitorización con Prometheus y Grafana, despliegue de apps con Helm charts."
    },
    {
      id: 4,
      titulo: "Sistema de Monitorización",
      categoria: "estudio",
      descripcion: "Implementación de un sistema de monitorización completo para infraestructura IT usando Nagios/Zabbix. Monitorea servidores, servicios, recursos y genera alertas en tiempo real. Dashboard personalizado con métricas clave.",
      tecnologias: ["Nagios", "Zabbix", "SNMP", "Grafana", "MySQL"],
      año: "2025",
      github: "",
      demo: "",
      detalles: "Monitoriza 15+ servidores, 30+ servicios, alertas por email y Telegram, uptime 99.9%."
    },
    {
      id: 5,
      titulo: "Servidor Web con Alta Disponibilidad",
      categoria: "estudio",
      descripcion: "Configuración de un entorno web con alta disponibilidad usando Nginx como load balancer, múltiples servidores web Apache/Nginx, base de datos MySQL en replicación maestro-esclavo y sistema de backup automático.",
      tecnologias: ["Nginx", "Apache", "MySQL", "HAProxy", "Linux", "Bash"],
      año: "2025",
      github: "",
      demo: "",
      detalles: "2 servidores web balanceados, replicación de BD, backups diarios automatizados, SSL/TLS."
    },
    {
      id: 6,
      titulo: "Laboratorio de Seguridad",
      categoria: "personal",
      descripcion: "Entorno de laboratorio para practicar seguridad informática: auditorías de red, análisis de tráfico con Wireshark, pentesting básico, hardening de sistemas Linux y configuración de IDS/IPS con Snort.",
      tecnologias: ["Kali Linux", "Wireshark", "Nmap", "Snort", "Metasploit"],
      año: "2025",
      github: "",
      demo: "",
      detalles: "VMs aisladas, escenarios de ataque/defensa, documentación de vulnerabilidades encontradas."
    },
    {
      id: 7,
      titulo: "Backup Automatizado con Restic",
      categoria: "personal",
      descripcion: "Sistema de backups automáticos incrementales y cifrados usando Restic, con almacenamiento local y en la nube (S3). Scripts Bash para programación, rotación de copias y verificación de integridad.",
      tecnologias: ["Restic", "Bash", "Cron", "AWS S3", "Rclone"],
      año: "2025",
      github: "https://github.com/dangkid",
      demo: "",
      detalles: "Backups diarios incrementales, cifrado AES-256, retención 30 días, restauración automática."
    },
    {
      id: 8,
      titulo: "Servidor VPN con WireGuard",
      categoria: "personal",
      descripcion: "Configuración de servidor VPN moderno y seguro usando WireGuard para acceso remoto. Incluye gestión de claves, configuración de clientes multiplataforma y routing de tráfico seguro.",
      tecnologias: ["WireGuard", "Linux", "iptables", "UFW"],
      año: "2024",
      github: "",
      demo: "",
      detalles: "10 clientes configurados, velocidades 500+ Mbps, latencia < 5ms, zero-trust network."
    },
    {
      id: 9,
      titulo: "Sistema de Logs Centralizado",
      categoria: "estudio",
      descripcion: "Implementación de un sistema de gestión de logs centralizado usando ELK Stack (Elasticsearch, Logstash, Kibana). Recolecta, procesa y visualiza logs de múltiples servidores en tiempo real.",
      tecnologias: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "Docker"],
      año: "2024",
      github: "",
      demo: "",
      detalles: "Procesamiento de 10k+ logs/día, dashboards personalizados, alertas automáticas."
    },
    {
      id: 10,
      titulo: "Infraestructura como Código",
      categoria: "personal",
      descripcion: "Proyecto de aprendizaje sobre IaC usando Terraform para aprovisionar infraestructura en AWS: VPCs, subnets, EC2 instances, security groups. Todo versionado con Git y documentado.",
      tecnologias: ["Terraform", "AWS", "Git", "HCL"],
      año: "2024",
      github: "https://github.com/dangkid",
      demo: "",
      detalles: "Multi-región, módulos reutilizables, estado remoto en S3, plan/apply automatizado."
    },
  ];

  const proyectosFiltrados = proyectos.filter(p => 
    filter === "todos" || p.categoria === filter
  );

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
            <Link href="/proyectos" className="text-stone-900 dark:text-stone-100 font-medium">
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 md:mb-6">
              Portfolio Técnico
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-50 mb-4 md:mb-6">
              Proyectos
            </h1>
            <div className="h-px w-20 md:w-32 bg-accent mx-auto mb-6 md:mb-8" />
            <p className="text-base md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Soluciones técnicas desarrolladas durante mi formación en ASIR
              y proyectos personales de experimentación
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4">
            <button
              onClick={() => setFilter("todos")}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider transition-all ${
                filter === "todos"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              TODOS
            </button>
            <button
              onClick={() => setFilter("estudio")}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider transition-all ${
                filter === "estudio"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              ESTUDIO
            </button>
            <button
              onClick={() => setFilter("personal")}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider transition-all ${
                filter === "personal"
                  ? "bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                  : "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-100"
              }`}
            >
              PERSONAL
            </button>
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <article 
                key={proyecto.id}
                className="group border border-stone-200 dark:border-stone-800 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Header del proyecto */}
                <div className="p-6 md:p-8 bg-stone-100 dark:bg-stone-900 group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent group-hover:text-stone-400 transition-colors">
                      {proyecto.categoria}
                    </span>
                    <span className="text-xs md:text-sm text-stone-500 dark:text-stone-500 group-hover:text-stone-400 transition-colors font-mono">
                      {proyecto.año}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-xl md:text-3xl text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors mb-3 md:mb-4 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  
                  <div className="h-px w-12 md:w-16 bg-accent group-hover:w-full transition-all duration-500" />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6 md:p-8">
                  <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4 md:mb-6">
                    {proyecto.descripcion}
                  </p>

                  {/* Detalles adicionales */}
                  {proyecto.detalles && (
                    <p className="text-xs md:text-sm text-stone-500 dark:text-stone-500 leading-relaxed mb-4 italic">
                      📋 {proyecto.detalles}
                    </p>
                  )}

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-mono border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                    {proyecto.github && (
                      <a 
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {proyecto.demo && (
                      <a 
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2"
                      >
                        <span>Demo</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {!proyecto.github && !proyecto.demo && (
                      <span className="text-stone-500 dark:text-stone-500 italic">
                        Proyecto académico
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="mt-12 md:mt-20 p-6 md:p-12 border border-stone-200 dark:border-stone-800 text-center">
            <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
              <div className="flex justify-center text-stone-600 dark:text-stone-400 mb-3 md:mb-4">
                <TerminalIcon className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <p className="font-serif text-lg md:text-2xl italic text-stone-700 dark:text-stone-300 px-4">
                &quot;Cada proyecto es una oportunidad de aprender,
                <br className="hidden sm:block" />
                cada línea de código, un nuevo descubrimiento&quot;
              </p>
              <div className="h-px w-16 md:w-24 bg-accent mx-auto my-4 md:my-6" />
              <p className="text-xs md:text-sm text-stone-500 dark:text-stone-500 px-4">
                Portfolio en evolución donde cada proyecto representa un paso más
                en el camino del aprendizaje continuo y la experimentación técnica.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
