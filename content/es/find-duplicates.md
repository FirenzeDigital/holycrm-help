# Buscar duplicados

A veces la misma persona queda cargada dos veces en tu directorio: se importó de dos listas,
se cargó una vez como "Pepe" y otra como "José", o se registró en la entrada y de nuevo en
la oficina. **Buscar duplicados** (en **Configuración**) te muestra a esas personas una al
lado de la otra para que las unas en un solo registro.

Lo pueden usar Administradores y Coordinadores: quienes pueden editar y borrar miembros.

## Qué encuentra

- **Mismo correo**, **mismo teléfono** (aunque esté escrito distinto) o **mismo nombre**:
  casi seguro es la misma persona.
- **Nombre parecido**: un error de tipeo ("Jonatan" / "Jonathan"), un apodo ("Pepe" /
  "José", "Paco" / "Francisco"), un nombre corto ("Ale" / "Alejandra", "Juanito" / "Juan") o
  uno de dos apellidos ("María López" / "María López García"). Estos llevan la marca
  **Revisá antes de unir**: dos hermanos o una madre y su hija pueden tener nombres muy
  parecidos.

## Unir dos registros

1. Compará las dos tarjetas: nombre, correo, teléfono, fecha de nacimiento, dirección, sexo, estado, cuándo se
   cargó cada uno y si alguno tiene acceso a HolyCRM.
2. Elegí **Conservar esta** en el registro que querés mantener. HolyCRM elige el que tiene
   acceso o, si no, el más antiguo, pero podés cambiarlo.
3. Donde los dos registros tienen un valor **distinto** (dos teléfonos, dos formas de escribir
   un nombre…), cada lado muestra **Usar este**: elegí el valor que tiene que quedar.
4. Tocá **Unir** y confirmá.

Al unir:

- **Todo lo vinculado al otro registro pasa al que conservás:** asistencia y check-ins,
  grupos pequeños y ministerios, fechas de servicio y confirmaciones, ofrendas, inscripciones
  a eventos, tutores e hijos, asignaciones de visitas y de pedidos de oración, y su acceso.
- **Los campos vacíos se completan** con el otro registro (un correo, un teléfono, una fecha
  de nacimiento…). Las etiquetas y los tutores se suman, las notas se juntan y los campos
  personalizados se combinan. Si los dos registros tienen un valor, queda el del que
  conservás.
- Si las dos personas estaban en el mismo grupo, evento o culto, quedan **una sola vez**.
- El otro registro se borra. Donde los dos tenían un valor, queda el que elegiste con
  **Usar este**.

**¿Alguien cargado tres veces?** Después de la primera unión, la lista muestra el registro que
quedó junto con la tercera copia: uní de nuevo.

## Deshacer una unión

**Uniones recientes**, arriba de la página, lista las uniones de los últimos 30 días.
**Deshacer** trae de vuelta a la persona eliminada como estaba, con todo lo que tenía vinculado,
y le devuelve sus datos a la persona que quedó — salvo lo que alguien haya cambiado desde
entonces, que se mantiene. Pasados 30 días, una unión ya no se puede deshacer.

**¿Las dos tienen acceso?** No se pueden unir hasta quitar uno. Andá a
[Usuarios](#/users-roles), quitá el acceso que sobra y volvé a unir.

## No es la misma persona

Si el par son dos personas distintas, tocá **No es la misma persona** y desaparece de la
lista. Esto se recuerda solo en ese dispositivo y navegador: otro administrador, o vos en
otra computadora, puede volver a ver el par.

## Consejos

- Después de [importar](#/data-import), la pantalla final tiene un botón **Buscar
  duplicados**.
- La lista muestra 25 pares por vez; **Ver más** carga los siguientes.
- Volver a importar no crea duplicados nuevos de personas que ya están: la vista previa de la
  importación las detecta y te deja omitirlas o actualizarlas.
