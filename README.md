# Oliver Dangelo Magallanes - Sitio Web Personal

Sitio web personal de Oliver Dangelo Magallanes Espinoza, estudiante de ASIR de segundo año y escritor.

## 🚀 Características

- **Inicio**: Página de presentación personal
- **Escritos**: Sección para poemas, poesías y reflexiones
- **Proyectos**: Portfolio de proyectos académicos (ASIR) y personales
- **Galería**: Colección de fotos de viajes e imágenes inspiradoras
- **Sobre mí**: Información personal y filosofía

## 🛠️ Tecnologías

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **UI**: React 18

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## 🏃 Ejecución

```bash
# Modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Linter
npm run lint
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
oliver-personal-web/
├── src/
│   └── app/
│       ├── escritos/        # Página de escritos
│       ├── proyectos/       # Página de proyectos
│       ├── galeria/         # Página de galería
│       ├── sobre-mi/        # Página sobre mí
│       ├── layout.tsx       # Layout principal
│       ├── page.tsx         # Página de inicio
│       └── globals.css      # Estilos globales
├── public/                  # Archivos estáticos
├── .github/                 # Configuración del proyecto
└── package.json            # Dependencias
```

## 🎨 Personalización

### Agregar Escritos

Edita el array `escritos` en [src/app/escritos/page.tsx](src/app/escritos/page.tsx):

```typescript
const escritos = [
  {
    id: 1,
    titulo: "Tu Poema",
    tipo: "Poema",
    fecha: "Enero 2026",
    extracto: "Extracto de tu escrito...",
  },
  // Agrega más escritos aquí
];
```

### Agregar Proyectos

Edita el array `proyectos` en [src/app/proyectos/page.tsx](src/app/proyectos/page.tsx):

```typescript
const proyectos = [
  {
    id: 1,
    titulo: "Nombre del Proyecto",
    categoria: "Estudio", // o "Personal"
    descripcion: "Descripción del proyecto",
    tecnologias: ["Linux", "Docker", "Redes"],
  },
  // Agrega más proyectos aquí
];
```

### Agregar Imágenes a la Galería

1. Coloca tus imágenes en la carpeta `public/images/`
2. Edita [src/app/galeria/page.tsx](src/app/galeria/page.tsx) para mostrarlas

## 🌐 Despliegue

Este proyecto se puede desplegar fácilmente en:

- **Vercel** (recomendado): [vercel.com](https://vercel.com)
- **Netlify**: [netlify.com](https://netlify.com)
- **GitHub Pages** (con adaptador)

## 📝 Licencia

Proyecto personal de Oliver D'Angelo Magallanes Espinoza © 2026

## ✨ Autor

**Oliver Dangelo Magallanes Espinoza**
- Estudiante de ASIR (2º año)
- Escritor de poemas y poesías
- Apasionado por la tecnología y la literatura
