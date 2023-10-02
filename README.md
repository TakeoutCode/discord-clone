# Discord-Clone
### Descripción
##### _Discord-Clone es un clon completo de Discord, que te da la posibilidad de acceder con tu cuenta, crear canales, servidores, hablar con tu amigos ya sea por chat o videollamadas._

##### Visita la página web oficial de [Discord-Clone](https://discord.takeoutcode.com/)

### Tecnologías usadas
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

# Requerimientos
- Node.js
- yarn
> Para este proyecto se utilizó yarn como administrador de paquetes.
> En caso de no tener yarn, puedes instalarlo con el siguiente comando:

```
npm install --global yarn
```

### _Instalación del repositorio_
> Clonar Repositorio con HTTPS:
```
git clone https://github.com/TakeoutCode/discord-clone.git
```

> Clonar Repositorio con SSH:
```
git clone git@github.com:TakeoutCode/discord-clone.git
```

> En caso de que se haga un fork, instalar con el enlace que se generó.

### Para correr localmente, se necesita la base de datos

```bash
  npx prisma generate
  yarn prisma db push
```

### _Instalación de dependencias_

```
  yarn install
```

### _Renombra el archivo para las variables de entonrno_
En la raiz del proyecto, renombra el archivo **.env.template** a **.env**

Después del símbolo =, debes agregar lo valores de tus variables de entorno. A continuación, te comparto dónde encontrarás las claves:

| Variable de entorno | Ejemplo | Descripcion |
| --- | --- | ---|
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= | API-Key-Clerk | API Key que nos proporciona [Clerk](https://clerk.com/)
CLERK_SECRET_KEY= | Secret-Cloudinary | Secret que nos proporciona [Clerk](https://clerk.com/)
NEXT_PUBLIC_CLERK_SIGN_IN_URL= | /sign-in | Nombre de la ruta en la que quieres iniciar sesion
NEXT_PUBLIC_CLERK_SIGN_UP_URL= | /sign-up | Nombre de la ruta en la que quieres crear una cuenta
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL= | / | Nombre de la ruta a la que quieres ser redirigido despues de iniciar sesion
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL= | / | Nombre de la ruta a la que quieres ser redirigido despues de crear una cuenta
DATABASE_URL= | mysql://url | URL que nos proporciona nuestra base de datos
UPLOADTHING_SECRET= | Secret-Database | secret que nos proporciona nuestra base de datos
UPLOADTHING_APP_ID= | App-Id-Database | API AID que nos proporciona nuestra base de datos
LIVEKIT_API_KEY= | API-Livekit | API Key que nos proporciona [Livekit](https://livekit.io/)
LIVEKIT_API_SECRET= | Secret-Livekit | Secret que nos proporciona [Livekit](https://livekit.io/)
NEXT_PUBLIC_LIVEKIT_URL= | URL-Livekit | URL que nos proporciona [Livekit](https://livekit.io/)

Una vez que tengas las claves, agrega cada una a su respectivo campo sin agregar espacios ni comillas de ningún tipo.

### _Inicializar app_
```
  yarn start
```
# Contribuir
- Si deseas contribuir al desarrollo de Teslo-Shop, siéntete libre de hacer un fork de este repositorio y enviar un pull request con tus mejoras.

# Autor
- Discor-Clone fue desarrollado por **Braulio Quezada @TakeoutCode**.- 

# Licencia
- Discor-Clone se distribuye bajo la licencia (MIT). Para más información, revisa el archivo LICENSE en este repositorio.

**_Espero que esta información te sea útil. Si necesitas más ayuda, no dudes en preguntar. ¡Que tengas un buen día!_**
