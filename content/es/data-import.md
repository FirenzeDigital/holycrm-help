# Importar datos

Si tu iglesia ya tiene una lista de miembros en una planilla, Importar datos te permite
traerla en lugar de tipearla a mano. Por ahora importa **solo Miembros**.

## Los cuatro pasos

### 1. Subir archivo

Exportá tu planilla como **archivo CSV** (desde Excel, Google Sheets, o casi cualquier otro
sistema de iglesia) y subila acá. Los archivos con más de **500 filas** se rechazan de
entrada — dividí un archivo más grande e importalo en tandas.

### 2. Asignar columnas

Para cada columna de tu archivo, elegí a qué campo de HolyCRM corresponde (nombre, apellido,
correo, teléfono, fecha de nacimiento, estado, etiquetas, y más). HolyCRM adivina
coincidencias razonables a partir de los encabezados de tus columnas (incluyendo algunos
encabezados comunes en español como "Apellido"), pero siempre revisá esas sugerencias antes
de continuar.

Se muestra una muestra de los valores reales de cada columna, ya que un encabezado por sí
solo ("Estado", "Status") no siempre dice qué hay realmente en las celdas.

**Nombre** y **Apellido** son las únicas asignaciones obligatorias — todo lo demás es
opcional.

### 3. Vista previa

Vé exactamente qué se va a crear — nombre, correo, y un estado por fila:

- **Listo** — se importará sin problemas.
- **Listo con advertencia** — algo menor se omitió (por ejemplo, una fecha ilegible), la fila
  igual se importa.
- **Error** — falta el nombre o el apellido; esta fila se omitirá por completo.

### 4. Importar

Las filas se crean de a pocas por vez con un contador de progreso en vivo. Al terminar vas a
ver un resumen de creados/omitidos con el motivo de cada omisión.

## Cosas a tener en cuenta antes de importar

- **No hay detección de duplicados.** Cada importación crea registros de miembro
  completamente nuevos — no se compara contra personas que ya estén en tu directorio. Si no
  estás seguro de si alguien ya está en HolyCRM, revisá primero; importarlo de nuevo crea un
  segundo registro.
- **Las etiquetas se crean automáticamente** si el nombre de una etiqueta en tu archivo
  todavía no existe en tu iglesia.
- **Las sedes se buscan solo por nombre, nunca se crean automáticamente.** Si el nombre de
  una sede en tu archivo no coincide con una que ya hayas configurado, ese campo queda en
  blanco para esa fila (con una advertencia) en lugar de crear un registro de sede a medio
  configurar.
- **Fechas**: HolyCRM intenta leer las fechas de nacimiento tanto en formato día-primero como
  mes-primero, pero es una estimación de mejor esfuerzo — vale la pena revisar algunas fechas
  de nacimiento después de una importación real.
- El estado de menor de edad (`is_minor`) se calcula automáticamente a partir de la fecha de
  nacimiento importada usando la edad límite configurada por tu iglesia — ver
  [Miembros](#/members).

## Lo que todavía no hace

Importar algo que no sean Miembros (Visitantes, historial de ofrendas, etc.), archivos Excel
`.xlsx` directamente (exportá a CSV primero), o hacer coincidir/actualizar registros
existentes en lugar de crear siempre nuevos.
