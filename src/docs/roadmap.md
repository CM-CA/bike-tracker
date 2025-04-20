1. Autenticación (Clerk.js)
* Clerk tiene un plan gratuito muy generoso para proyectos personales y prototipos.
* Alternativa: Auth.js (antes NextAuth.js) con GitHub/Google como proveedores, completamente open source.
2. Base de datos y almacenamiento de imágenes
* Supabase: Base de datos (PostgreSQL), autenticación, almacenamiento de archivos e imágenes. El plan gratuito es suficiente para proyectos personales.
* Alternativa:
* Firebase: Firestore y Storage gratuitos hasta ciertos límites.
* MongoDB Atlas: Plan gratuito con base de datos en la nube.
* Imágenes: Puedes almacenar imágenes en Supabase Storage o Firebase Storage sin costo en proyectos pequeños.
3. Mapas
* Leaflet.js: Librería open source, sin coste.
* Tiles gratuitos: Usa OpenStreetMap (OSM) como proveedor de mapas base. Hay servicios gratuitos como MapTiler o directamente los tiles de OSM para proyectos personales.
4. Notificaciones
* Email:
* EmailJS tiene plan gratuito con límite mensual.
* Alternativa: Usar SMTP de Gmail (para proyectos personales) o servicios open source como Postal.
* Push notifications:
* Firebase Cloud Messaging es gratuito.
5. Hosting/Despliegue
* Vercel, Netlify o Cloudflare Pages: Todos tienen planes gratuitos para proyectos JAMstack como Astro.

Resumen de stack recomendado 100% gratuito
* Frontend: Astro + Clerk.js (plan free) + Leaflet.js
* Backend y base de datos: Supabase (plan free) o Firebase (plan free)
* Almacenamiento de imágenes: Supabase Storage o Firebase Storage (plan free)
* Mapas: Leaflet.js + OpenStreetMap tiles
* Notificaciones: EmailJS (plan free) o SMTP gratuito, Firebase Cloud Messaging
* Hosting: Vercel, Netlify o Cloudflare Pages
