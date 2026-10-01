# Turnos de servicio

Los turnos son cómo programás voluntarios en roles de servicio para una ocurrencia
específica de un evento o actividad de ministerio — "quién está en Sonido este domingo",
"quién recibe en el culto de las 9am".

## Los bloques que lo componen

1. **Roles de servicio** — definí los roles en los que tu iglesia programa gente (Sonido,
   Proyección, Bienvenida, Voluntario de Check-in de niños, etc.). Configurá esto una vez.
2. **Turnos (Requisitos de rol)** — indicá que un rol es necesario para un Evento o Actividad
   de ministerio específico, y cuánta gente hace falta. Se puede acceder directamente desde
   el panel de un evento en el [Calendario](#/calendar), ya pre-completado con ese evento o
   actividad.
3. **Asignación de turno** — quién efectivamente va a cubrir ese requisito. Un turno vinculado
   a un requisito hereda automáticamente su fecha, hora y sede — no volvés a ingresar el
   horario, solo elegís al/a los voluntario(s).

**A quién se puede elegir.** Escribí un nombre en **Voluntarios** para buscar. Las iglesias
nuevas permiten que sirva cualquier miembro. Si tu iglesia lo desactivó en Configuración de
Iglesia (*Cualquier miembro puede ser voluntario*), aparecen solo las personas marcadas como
voluntarias en su ficha de Miembros; si todavía no hay ninguna, el formulario te dice qué hacer.
La disponibilidad nunca limita la lista: solo sugiere a quién le queda mejor.

## Ver qué necesita cobertura

El control de **foco de turnos** del [Calendario](#/calendar) tiene una vista de **necesitan
voluntarios** — todo lo que tenga menos gente asignada que la requerida aparece ahí,
resaltado con color, con un desglose "Rol — asignados / requeridos" en los detalles del
evento. El [Panel principal](#/dashboard) también muestra los próximos turnos con falta de
personal.

El **doble compromiso** de un voluntario también se detecta automáticamente — si la misma
persona está asignada a dos turnos que se superponen, se marca como choque de horario en el
calendario, sin importar qué filtro de sede tengas seleccionado.

## Planificar la semana

**Turnos** muestra una semana a la vez — usá **‹ Esta semana ›** para moverte. Cada culto y
actividad de esa semana es una tarjeta con su fecha y hora, y las actividades semanales aparecen
en su fecha real (por ejemplo *vie 9 oct · 20:00*), así siempre sabés qué día estás cubriendo.

- **Cubrir** (o **Editar**) abre una ventanita en el mismo tablero: buscá personas por nombre,
  tocá para agregarlas, tocá × para sacar a alguien y **Guardar**. No salís del tablero.
- En las actividades semanales, la persona se agrega **solo para esa fecha**, salvo que marques
  **Repetir todas las semanas**. Quien sirve todas las semanas tiene un 🔁 al lado del nombre.
- **Copiar semana pasada** repite el equipo de la semana anterior en las actividades semanales,
  en los roles donde había gente asignada solo para esa fecha. Solo agrega, no saca a nadie.
- **+ Rol** agrega un rol que el culto necesita (y cuántas personas). Si el rol todavía no
  existe, elegí **Rol nuevo…** y escribí el nombre. Los cultos y actividades que todavía no
  tienen roles aparecen abajo, en *También esta semana, sin roles*.
- Si la gente cargó su disponibilidad, la ventanita sugiere quién está libre en ese horario —
  un toque y se agrega.

Los voluntarios ven sus fechas en [Mis turnos](#/my-serving) y pueden confirmar desde ahí.

## Pedir a los voluntarios que confirmen

En el tablero de **Turnos**, cada servicio próximo tiene un botón **Confirmaciones** que muestra
cuántas personas respondieron (por ejemplo *Confirmaciones · 3/5*). Abrilo para ver a todos los
que sirven en esa fecha y en qué estado está cada uno: ✅ confirmado, ❌ no puede, ⏳ esperando
respuesta, o todavía sin pedir.

1. Hacé clic en **Pedir confirmación**. Todos los que tienen email reciben un correo con un
   botón para confirmar o avisar que no pueden. No necesitan iniciar sesión — el enlace es
   personal.
2. Para quien no tiene email, o casi no lo lee, hacé clic en **WhatsApp** al lado de su nombre.
   Se abre WhatsApp en tu celular o computadora con el mensaje ya escrito, incluido su enlace
   personal — solo tocás enviar. **Copiar enlace** te deja mandarlo por cualquier otro medio.
3. Las respuestas aparecen en el tablero al instante, al lado de cada nombre.
4. Si alguien no respondió y falta menos de un día para el servicio, recibe automáticamente un
   email de recordatorio.
5. Si alguien avisa que no puede, quien pidió la confirmación recibe un email (con el mensaje
   del voluntario, si dejó uno) para buscar un reemplazo.

En las actividades semanales, las confirmaciones son para la **próxima** fecha de la actividad.

**WhatsApp y números de teléfono:** cargá el **Código de país del teléfono** en
[Configuración de Iglesia](#/church-settings) para que los números guardados sin él (como
*11 5555-1234*) abran el chat correcto. En Argentina, WhatsApp necesita el 9 después del código
de país para los celulares — lo más seguro es guardarlos completos, como *+54 9 11 5555-1234*.

## Lo que todavía no existe

Historial de sustituciones, un mensaje de WhatsApp automático sin que nadie toque enviar, mover o cancelar una sola ocurrencia de un turno recurrente de forma
independiente del resto de la serie, y un modelo de programación totalmente vinculado a
eventos (el modelo actual vincula un turno a un evento o actividad, pero la estructura más
profunda "serie → ocurrencia → requisito" descrita en las notas internas de arquitectura
todavía no se construyó).
