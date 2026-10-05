# Usuarios, roles y permisos

Hay una diferencia importante entre un **Miembro** (una persona de tu congregación) y un
**Usuario** (alguien con acceso a esta app). La mayoría de los miembros nunca inician sesión;
un usuario es alguien de tu equipo/voluntariado que necesita acceso a HolyCRM.

## Invitar a alguien

**Configuración de administración → Usuarios → Invitar usuario**. Buscá y elegí primero a un
Miembro existente (si ya está en tu directorio) — esto vincula su acceso a su ficha existente
en lugar de crear una persona duplicada. Si todavía no es miembro, podés invitarlo solo con
nombre y correo.

Vincular importa especialmente para el rol **Miembro**: es lo que le permite ver sus
propios datos de contacto e historial de ofrendas (ver [Mi perfil](#/profile) y
[Mis ofrendas](#/my-giving)) — un Miembro invitado sin ficha vinculada solo ve un Perfil
vacío.

Elegí su **rol**:

| Rol | Qué puede hacer (por defecto) |
|---|---|
| **Administrador** | Todo, incluidos usuarios, permisos personalizados, Datos y privacidad y facturación. |
| **Coordinador** | El día a día del ministerio y la administración: personas, grupos pequeños, ministerios y turnos, eventos, asistencia, finanzas, correo y configuración de la iglesia. No puede cambiar permisos, Datos y privacidad ni facturación, ni ascender a nadie a Coordinador/Administrador. |
| **Servidor** | Servicio práctico en la puerta y en los cultos: recibir visitantes, tomar asistencia y hacer el check-in, buscando a las personas solo por nombre. Sin acceso al directorio de miembros, finanzas, pedidos de oración, grupos pequeños, ministerios, planificación de turnos, correo ni informes. |
| **Miembro** | Solo autoservicio: su propio perfil, sus turnos, su disponibilidad y su historial de ofrendas. Sin acceso a los datos de nadie más. |

Estos límites los aplica el servidor de HolyCRM, no solo se ocultan del menú, así que nadie
puede llegar por otro camino a datos que su rol no permite. Un usuario **suspendido** pierde
todo acceso a la iglesia de inmediato.

La mayoría de quienes sirven en turnos solo necesitan el rol **Miembro**: estar en un turno depende de **Sirve en turnos** en su ficha de miembro, no de su usuario, y los Miembros ya ven sus propios turnos y su disponibilidad.

La persona invitada recibe un correo con un enlace para configurar su contraseña. Hasta que lo
haga, su estado figura como **Invitado**; una vez que configura su contraseña — o entra con
**Continuar con Google** usando ese mismo correo — pasa a **Activo** automáticamente.

## Gestionar usuarios existentes

Desde la lista de Usuarios podés **cambiar el rol** de alguien, **suspenderlo** (pierde
acceso sin borrar su cuenta ni su historial), **reactivarlo**, **quitarlo de la iglesia** por
completo, **reenviar una invitación** que todavía no fue aceptada, o **editar su correo de
acceso**.

Algunas reglas de seguridad incorporadas: solo podés asignar o gestionar roles *por debajo*
del tuyo (un Coordinador no puede tocar a un Administrador ni a otro Coordinador), no podés editar tu propia
fila desde esta pantalla, y una iglesia siempre conserva al menos un Administrador — al último no se
lo puede quitar ni degradar.

## Vincular un usuario con un miembro

Un usuario funciona mejor vinculado a la **ficha de miembro** de la persona: de ahí salen su
nombre, Mis turnos, Mis ofrendas y Mi disponibilidad. En la lista de Usuarios, quien no tiene
vínculo muestra *Sin miembro vinculado*.

- Tocá **Vincular miembro** (o **Cambiar miembro**) en su fila, buscá al miembro y **Guardar**.
  **Desvincular** saca el vínculo sin borrar nada.
- También podés vincular **tu propio** usuario, desde tu fila.
- Cada miembro se puede vincular a un solo usuario. Los que ya tienen uno aparecen como *ya
  tiene usuario* en la búsqueda.

## Permisos personalizados

Cada rol viene con el acceso recomendado por HolyCRM. Un Administrador puede cambiarlo para tu
iglesia en **Administración → Permisos Personalizados**:

1. Elegí el rol arriba (Coordinador, Servidor o Miembro). Un número al lado del rol indica
   cuántas pantallas personalizaste para él.
2. Cada pantalla tiene hasta cuatro casillas: **Ver**, **Agregar**, **Editar** y **Eliminar**.
   Un guion significa que esa acción no existe en esa pantalla. Marcar Agregar, Editar o
   Eliminar también marca Ver; desmarcar Ver quita las demás.
3. Las filas cambiadas quedan marcadas; nada se aplica hasta que tocás **Guardar cambios**.
   Los cambios valen para todas las personas con ese rol, y HolyCRM los respeta en todos
   lados, no solo en el menú.

Algunas pantallas comparten un mismo ajuste — por ejemplo, Check-in y Check-in de niños siguen
a **Asistencia** — y aparecen como "También aplica a" debajo de ella. **Restaurar
predeterminado** deshace una pantalla; **Restaurar todo lo predeterminado** deshace todo para
ese rol.

Dos cosas no se pueden cambiar acá: el rol **Administrador** siempre tiene acceso completo
(para que nadie deje a la iglesia sin acceso a esta pantalla), y Facturación, Datos y
privacidad y Permisos Personalizados quedan para los Administradores (Usuarios, para
Administradores y Coordinadores).

## Mi perfil vs. Usuarios

**Mi perfil** (en Cuenta) es donde cualquiera gestiona su *propio* acceso — nombre, avatar,
contraseña y correo. La pantalla de Usuarios es donde un Administrador/Coordinador gestiona el acceso de
*los demás*. Ver [Mi perfil](#/profile).
