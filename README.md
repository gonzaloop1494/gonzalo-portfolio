# Portfolio de Gonzalo Pacheco

Portfolio personal creado con Next.js y preparado para desplegar en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Formulario de contacto

El formulario usa Resend desde `app/api/contact/route.ts`. Para activar los envios, crea `.env.local` a partir de `.env.example` y define:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=Portfolio <hola@tu-dominio.com>
CONTACT_TO_EMAIL=gonzalo.pachecoagredano@gmail.com
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

`CONTACT_FROM_EMAIL` debe usar un dominio verificado en Resend. La ultima variable genera enlaces de metadatos correctos cuando el portfolio se comparte en LinkedIn.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repositorio desde Vercel.
3. Configura las cuatro variables de entorno anteriores en Production, Preview y Development.
4. Despliega y registra el dominio resultante en `NEXT_PUBLIC_SITE_URL`.

El CV publico se sirve desde `public/cv-gonzalo-pacheco-agredano.pdf`. Al renovarlo, sustituye ese archivo manteniendo el mismo nombre.
