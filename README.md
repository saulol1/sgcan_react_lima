# Temario
1. [Instalación](#instalación)
2. [Documentación](#documentación)

## Instalación

- Clonar el repositorio: `git clone https://github.com/saulol1/sgcan_react_lima.git`

- Ejecutar el comando `npm install` para instalar las dependencias necesarias.

- Ejecutar el comando `npm run start` para levantar el proyecto.


## Documentación

- Estructura: Se utilizó un combinación entre Atomic Design y MVC para manejar la lógica y los componentes para el diseño modular.
- La invocación de los componentes es de manera jerárquica.
- Los contextos se encuentran en la carpeta `models/context`.
- Las peticiones hacia la api se manejan por Axios en la carpeta `controllers/video`.
- Los componentes que es encuentran dentro de las carpetas `video` hacen referencia a los componentes directos de la lógica de la aplicación.
- Tecnologías utilizadas: ReactJS, TypeScript, BootStrap, Axios y VideoJS.