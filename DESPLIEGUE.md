# 🚀 Guía de Despliegue en Vercel

## Paso 1: Subir a GitHub

### 1.1 Inicializar Git (ya hecho abajo con comandos)

```bash
git init
git add .
git commit -m "✨ Initial commit - Sitio web personal Oliver Dangelo"
```

### 1.2 Crear repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Click en el **+** (arriba derecha) → **New repository**
3. Nombre del repositorio: `oliver-personal-web`
4. Descripción: "Sitio web personal - Escritor y estudiante de ASIR"
5. Déjalo **público** (o privado si prefieres)
6. **NO** marques "Initialize with README" (ya lo tienes)
7. Click en **Create repository**

### 1.3 Conectar y subir

Copia los comandos que GitHub te muestra, serán algo así:

```bash
git remote add origin https://github.com/TU-USUARIO/oliver-personal-web.git
git branch -M main
git push -u origin main
```

**Nota**: Reemplaza `TU-USUARIO` con tu usuario de GitHub

---

## Paso 2: Desplegar en Vercel ⚡

### 2.1 Acceder a Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en **Sign Up** o **Log In**
3. Selecciona **Continue with GitHub**
4. Autoriza a Vercel para acceder a tus repositorios

### 2.2 Importar tu proyecto

1. Una vez dentro, click en **Add New...** → **Project**
2. Verás una lista de tus repositorios de GitHub
3. Busca `oliver-personal-web`
4. Click en **Import**

### 2.3 Configurar (automático)

Vercel detectará automáticamente que es Next.js y configurará:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

¡No necesitas cambiar nada! Todo está correcto por defecto.

### 2.4 Desplegar

1. Click en **Deploy**
2. Espera 1-2 minutos mientras Vercel:
   - Instala dependencias
   - Compila el proyecto
   - Despliega en su CDN global

### 2.5 ¡Listo! 🎉

Tu sitio estará disponible en:
```
https://oliver-personal-web.vercel.app
```

O algo similar. Vercel te mostrará la URL exacta.

---

## 🎯 Próximos Pasos

### Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio (ej: `oliverdangelo.com`)
4. Sigue las instrucciones para configurar el DNS

### Actualizaciones Automáticas

¡La magia de Vercel!

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

**Vercel desplegará automáticamente** la nueva versión en ~1 minuto.

---

## 📱 Características de Vercel (incluidas gratis)

- ✅ **HTTPS automático** - Certificado SSL gratis
- ✅ **CDN global** - Tu sitio rápido en todo el mundo
- ✅ **Deploy automático** - Push a GitHub = deploy automático
- ✅ **Preview deployments** - Cada pull request tiene su propia URL
- ✅ **Analytics** - Estadísticas de visitantes
- ✅ **Zero config** - Funciona sin configuración

---

## 🆘 Troubleshooting

### Error: "Git not found"
```bash
# Instalar Git (si no lo tienes)
# macOS
brew install git

# O descarga desde: https://git-scm.com
```

### Error al hacer push
```bash
# Configurar tu identidad en Git
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Error de build en Vercel
- Revisa los logs en la sección "Deployments"
- Verifica que `npm run build` funcione localmente
- Asegúrate de que todas las dependencias estén en package.json

---

## 📚 Recursos Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Student Pack](https://education.github.com/pack)

---

**¡Tu sitio web estará en línea en menos de 5 minutos!** 🚀
