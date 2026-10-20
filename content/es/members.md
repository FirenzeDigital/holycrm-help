# Miembros

Miembros es el directorio de tu iglesia — cada persona de tu congregación, con sus datos de
contacto, su estado y las etiquetas/relaciones que la conectan con el resto de la app.

## Agregar un miembro

Usá **+ Miembro**, completá los campos que sepas (solo el nombre es obligatorio) y guardá.
Siempre podés volver más adelante y completar el resto.

Campos útiles:

- **Estado** — activo, inactivo, etc. La mayoría de los reportes y selectores solo cuentan
  miembros *activos*.
- **Sirve en turnos** — una casilla que marca a alguien como disponible para servir. Esto importa
  para la programación de turnos — ver [Ministerios y turnos](#/ministries).
- **Etiquetas** — un selector flexible de etiquetas (ver
  [Etiquetas y roles de etiqueta](#/tags)) para agrupar personas de la forma que le sirva a
  tu iglesia, más allá de ministerios y grupos.
- **Fecha de nacimiento** — se usa para los recordatorios de cumpleaños y para calcular
  automáticamente si alguien es menor de edad.
- **Etapa de crecimiento** — en qué punto de su camino con la iglesia está esa persona:
  Nuevo, Asistiendo, Conectado, Sirviendo o Liderando. Ver
  [Escalera de crecimiento](#/growth-ladder).

## Campos personalizados

La información para la que HolyCRM no tiene un campo — una fecha de bautismo, una clase de
membresía, un talle de remera — se puede agregar como **campo personalizado** en
**Configuración → Campos personalizados**: texto, número, fecha, una lista de opciones o sí/no.
Aparecen en la ficha de cada miembro. Opciones de cada campo:

- **Obligatorio** — la ficha no se guarda sin una respuesta.
- **Mínimo / Máximo** — para números, los valores permitidos.
- **Mostrar en la lista de Miembros** — lo agrega como columna en la lista (cada persona igual
  puede ocultarla con el botón de columnas). Los campos de lista y de sí/no también sirven como
  filtros.
- **Oculto** — lo saca de la ficha sin borrar las respuestas ya guardadas.

## Menores y tutores

Si la fecha de nacimiento de un miembro lo ubica por debajo de la "edad límite para menores"
configurada por tu iglesia (Configuración de la iglesia → Edad límite para menores,
predeterminado 18), aparece un campo **Tutores** en su ficha — elegí a su padre, madre o
tutor(es) entre el resto de tus miembros. Esto es lo que permite que el **Check-in de niños**
pueda buscar a alguien por el nombre de su padre/madre — ver
[Asistencia y check-in](#/attendance).

Si un miembro no tiene fecha de nacimiento cargada, "menor" pasa a ser una simple casilla que
podés marcar a mano en lugar de calcularse automáticamente.

## El correo queda bloqueado para miembros con acceso

Si un miembro también tiene un acceso a HolyCRM (es Servidor, Coordinador o Administrador y ya inició
sesión), su campo de correo queda bloqueado en el formulario de Miembros, con una nota que te
lleva a la pantalla de Usuarios. Esto es intencional: su correo de acceso y el correo de su
ficha de miembro se mantienen sincronizados automáticamente, y editarlo en dos lugares
distintos haría que una edición deshaga silenciosamente a la otra. Cambialo desde
**Configuración → Usuarios** — ver
[Usuarios, roles y permisos](#/users-roles).

## Invitar a un miembro a ingresar

Para darle a un miembro su propio usuario (y que vea Mis turnos, Mis ofrendas…), tocá **Invitar
como usuario** en su fila. Se abre la invitación de Usuarios con ese miembro ya elegido y su
email completo — elegí el rol y enviá. El botón no aparece en miembros que ya tienen usuario.

## Traer los miembros que ya tenés

No vuelvas a tipear todo tu directorio a mano — ver [Importar datos](#/data-import) para
traer una planilla. ¿Alguien quedó cargado dos veces? [Buscar duplicados](#/find-duplicates)
une los dos registros en uno.

## Buscar y filtrar

La lista de Miembros tiene búsqueda y filtros por columna (estado, etiquetas, etc.) para que
puedas acotar rápido a, por ejemplo, "voluntarios activos etiquetados Equipo de Alabanza."

La lista muestra lo esencial: nombre, teléfono, correo, etapa de crecimiento, etiquetas y estado. Usá el **botón de columnas** (arriba a la derecha de la lista) para ver más, como fecha de nacimiento, notas o adultos responsables; tu elección queda guardada en ese dispositivo.

**Etiquetar…**, al lado del buscador, agrega o quita una etiqueta a todos los que la lista
está mostrando — ver [Etiquetas y roles de etiqueta](#/tags).
