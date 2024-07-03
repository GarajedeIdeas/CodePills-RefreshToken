# Usuarios

POST http://localhost:3000/api/usuarios/register
BODY: name, email, password

POST http://localhost:3000/api/usuarios/login
BODY: email, password

POST http://localhost:3000/api/usuarios/refresh
BODY: refreshToken

# Empleados

GET http://localhost:3000/api/empleados
Necesita Authorization -> TOKEN