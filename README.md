# TaskFlow API

API REST para gestión de tareas y equipos (TaskFlow).

## 🛠️ Requisitos

- Node.js (v16+ recomendado)
- PostgreSQL (local o remoto)

---

## ✅ Instalación de dependencias

En la raíz del proyecto ejecuta:

```bash
npm install
```

> El proyecto utiliza dependencias como `express`, `bcrypt`, `pg`, entre otras.

---

## 🔧 Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto con al menos estas variables:

```env
DBHOST=postgresql://user:password@localhost:5432/taskflow
PORT=3000
```

> Nota: los valores anteriores son ejemplos ficticios. Reemplaza `user`, `password`, `host` y `port` según tu configuración local.

---

## 🚀 Ejecutar el servidor

Inicia el servidor con:

```bash
npm start
```

O en modo de desarrollo (si tienes instalado `nodemon`):

```bash
npm run dev
```

Luego accede a la API en:

```
http://localhost:3000
```

---

## 📄 Estructura del proyecto (resumen)

- `src/controllers/` → Controladores de rutas
- `src/models/` → Modelos y lógica de datos
- `src/routes/` → Definición de rutas de la API
- `src/db/` → Conexión a la base de datos

---

¡Listo! Con esto deberías poder arrancar el servidor y conectarlo a tu base de datos PostgreSQL.
