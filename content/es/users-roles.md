# Usuarios, roles y permisos

Hay una diferencia importante entre un **Miembro** (una persona de tu congregación) y un
**Usuario** (alguien con acceso a esta app). La mayoría de los miembros nunca inician sesión;
un usuario es alguien de tu equipo/voluntariado que necesita acceso a HolyCRM.

## Invitar a alguien

**Configuración de administración → Usuarios → Invitar usuario**. Buscá y elegí primero a un
Miembro existente (si ya está en tu directorio) — esto vincula su acceso a su ficha existente
en lugar de crear una persona duplicada. Si todavía no es miembro, podés invitarlo solo con
nombre y correo.

Elegí su **rol**:

| Rol | Puede hacer típicamente |
|---|---|
| **Admin** | Todo, incluida la Configuración de la iglesia e invitar/gestionar otros usuarios. |
| **Gestor (Manager)** | Operación del día a día en la mayoría de los módulos, pero no la Configuración de la iglesia ni ascender a nadie a Gestor/Admin. |
| **Voluntario** | Acceso acotado y enfocado en una tarea — comúnmente asistencia/check-in — según lo que tu iglesia configure. |
| **Miembro** | Autoservicio de solo lectura, principalmente su propio Perfil. |

La persona invitada recibe un correo con un enlace para configurar su contraseña. Hasta que lo
haga, su estado figura como **Invitado**; una vez que configura su contraseña, pasa a
**Activo** automáticamente.

## Gestionar usuarios existentes

Desde la lista de Usuarios podés **cambiar el rol** de alguien, **suspenderlo** (pierde
acceso sin borrar su cuenta ni su historial), **reactivarlo**, **quitarlo de la iglesia** por
completo, **reenviar una invitación** que todavía no fue aceptada, o **editar su correo de
acceso**.

Algunas reglas de seguridad incorporadas: solo podés asignar o gestionar roles *por debajo*
del tuyo (un Gestor no puede tocar a un Admin ni a otro Gestor), no podés editar tu propia
fila desde esta pantalla, y una iglesia siempre conserva al menos un Admin — al último no se
lo puede quitar ni degradar.

## Permisos personalizados

Más allá de los cuatro roles estándar, un Admin puede ajustar el acceso por módulo en
**Configuración de administración → Acceso personalizado de usuario** — por ejemplo,
permitiendo que los Voluntarios creen Eventos aunque eso no forme parte del rol Voluntario por
defecto. Estos ajustes se aplican por encima de los valores predeterminados del rol,
específicamente para tu iglesia.

## Mi perfil vs. Usuarios

**Mi perfil** (en Cuenta) es donde cualquiera gestiona su *propio* acceso — nombre, avatar,
contraseña y correo. La pantalla de Usuarios es donde un Admin/Gestor gestiona el acceso de
*los demás*. Ver [Mi perfil](#/profile).
