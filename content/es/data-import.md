# Importar datos

Si tu iglesia ya tiene sus registros en una planilla, Importar datos te permite traerlos en
lugar de tipearlos a mano. Primero elegí **qué querés importar**: **Miembros**,
**Visitantes**, **Historial de ofrendas** o **Grupos**. Cada uno tiene su plantilla y sus
columnas; los pasos son los mismos para los cuatro (ver "Visitantes, ofrendas y grupos" más
abajo).

## Antes de empezar

- **Usá tu archivo tal como está.** Funcionan archivos de Excel (`.xlsx`, `.xls`),
  LibreOffice (`.ods`) y CSV. Las columnas pueden tener cualquier nombre y estar en cualquier
  orden, y puede haber columnas de más: en el paso siguiente elegís qué completa cada una.
- **¿Empezás de cero?** Tocá **Descargar plantilla** (Excel o CSV). Tiene las columnas
  correctas, una fila de ejemplo y, en la versión de Excel, una hoja de *Instrucciones* que
  dice qué escribir en cada columna. Completala e importala acá.
- **Primero los campos personalizados.** Si tu archivo tiene información para la que HolyCRM
  no tiene un campo (fecha de bautismo, clase de membresía…), creá un campo personalizado en
  **Configuración → Campos personalizados** (app completa) antes de importar. Así aparece en
  la lista de columnas y en la plantilla. La pantalla de Importar datos muestra los campos
  personalizados que ya tenés.

## Los cuatro pasos

### 1. Subir archivo

Subí el archivo. Si un Excel tiene varias hojas con datos, elegí la que tiene a tu gente. La
primera fila tiene que ser la de los encabezados. Los archivos con más de **500 filas** se
rechazan: dividí un archivo más grande e importalo en tandas.

### 2. Relacionar columnas

Para cada columna de tu archivo, elegí qué campo de HolyCRM completa —nombre, apellido,
correo, teléfono, fecha de nacimiento, estado, etiquetas, sede, tus campos personalizados y
más— o **No importar**. HolyCRM adivina las relaciones a partir de los encabezados, en
español, inglés o portugués ("Apellido", "Nome", "Celular"…), y una plantilla completa se
relaciona sola. Al lado de cada columna se muestran algunos de sus valores, para que veas qué
hay realmente en las celdas.

**Nombre** y **Apellido** son los únicos campos obligatorios.

### 3. Vista previa

Mirá cada fila tal como se va a guardar, con todas las columnas que relacionaste. Cada fila
indica si está **Lista**, lista con un **aviso** (algo menor quedó vacío, como una fecha
ilegible; la fila igual se importa) o tiene un **error** (falta el nombre o el apellido; la
fila se omite). Con **Mostrar** ves solo las filas con avisos, con errores o las personas que
ya están en HolyCRM.

### 4. Importar

Las filas se guardan de a pocas, con un contador en vivo. Al final ves cuántas personas se
crearon, se actualizaron y se omitieron, y el motivo de lo que haya fallado.

## Personas que ya están en HolyCRM

La vista previa compara cada fila con tu directorio:

- **Misma persona**: el mismo correo, el mismo teléfono (aunque esté escrito distinto:
  `+54 9 11 5555-1234` y `11 5555 1234` coinciden) o el mismo nombre y apellido (sin importar
  tildes ni mayúsculas).
- **Posible coincidencia**: un nombre parecido. Un error de tipeo ("Jonatan" / "Jonathan"),
  un apodo ("Pepe" / "José", "Paco" / "Francisco"), un nombre corto ("Ale" / "Alejandra",
  "Juanito" / "Juan") o uno de dos apellidos ("María López" / "María López García").

Para las filas de la **misma persona**, elegís una vez qué pasa con todas:

- **Omitirlas** (lo predeterminado): los registros existentes quedan como están.
- **Actualizar a las personas existentes**: completa las columnas de tu archivo. Las celdas
  vacías nunca borran nada, las etiquetas se suman a las que la persona ya tiene y **el
  nombre nunca cambia**.
- **Importarlas igual como personas nuevas.**

Las **posibles coincidencias** se importan como personas nuevas salvo que elijas otra cosa,
porque un nombre parecido puede ser otra persona. Además, cada fila con coincidencia tiene su
propia opción en la tabla —**Omitir**, **Actualizar a esta persona** o **Importar como
nueva**—, así podés decidir de a una.

Si la misma persona aparece dos veces en tu archivo, la segunda fila muestra un aviso
("Parece la fila 4"). Las dos se importan, así que borrá una del archivo si hace falta. Para
ordenar a las personas que ya quedaron cargadas dos veces, usá
[Buscar duplicados](#/find-duplicates); la pantalla final tiene un botón para abrirlo.

## Bueno saber

- **Las etiquetas se crean solas** si el nombre de una etiqueta de tu archivo todavía no
  existe.
- **Las sedes se buscan por nombre y nunca se crean.** Si una sede de tu archivo no coincide
  con una que configuraste, esa celda queda vacía, con un aviso.
- **Fechas:** una celda de fecha de Excel se lee exacta. Las fechas escritas como texto se
  leen como día-mes o mes-día lo mejor posible, así que conviene revisar algunas fechas de
  nacimiento después de importar. Un CSV guarda las fechas y los números largos como los
  *mostraba* la planilla (`3/7/85`, `5.49E+12`), así que, si podés, subí el Excel.
- **Los campos personalizados** se leen según su tipo: un número, una fecha, sí/no o una de
  las opciones de un campo de lista. Un valor que no corresponde queda vacío, con un aviso.
- El estado de menor de edad se calcula con la fecha de nacimiento y la edad límite de tu
  iglesia — ver [Miembros](#/members).

## Visitantes, ofrendas y grupos

- **Visitantes** — nombre (obligatorio), apellido, correo, teléfono, WhatsApp, dirección,
  primera visita, cómo nos conoció, etapa y notas. Los visitantes que ya están en HolyCRM se
  detectan igual que los miembros.
- **Historial de ofrendas** — una ofrenda por fila: fecha y monto son obligatorios. El
  **dador** se busca entre tus miembros por correo o por nombre y apellido; si no coincide
  nadie (o dos personas tienen ese nombre), la ofrenda se registra sin dador y no aparece en
  el resumen de ofrendas de nadie. Los montos pueden escribirse `1500.00` o `1.500,00`. Una
  moneda vacía es la de tu iglesia; otra moneda necesita una columna de **tipo de cambio**.
  Una **categoría** que no existe se crea; vacía usa tu primera categoría de ingreso. Las
  ofrendas que ya están en HolyCRM (misma fecha, monto, dador y referencia) se marcan, así
  importar dos veces el mismo archivo no las cuenta dos veces.
- **Grupos** — nombre (obligatorio), tipo, líder (se busca igual que el dador), día y hora de
  reunión, dónde se reúnen, anfitrión, descripción y estado. Un grupo con el mismo nombre que
  uno que ya tenés se puede omitir o actualizar.

## Lo que todavía no hace

Importar más de 500 filas a la vez, los miembros de cada grupo, o egresos.
