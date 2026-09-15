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

## Ver qué necesita cobertura

El control de **foco de turnos** del [Calendario](#/calendar) tiene una vista de **necesitan
voluntarios** — todo lo que tenga menos gente asignada que la requerida aparece ahí,
resaltado con color, con un desglose "Rol — asignados / requeridos" en los detalles del
evento. El [Panel principal](#/dashboard) también muestra los próximos turnos con falta de
personal.

El **doble compromiso** de un voluntario también se detecta automáticamente — si la misma
persona está asignada a dos turnos que se superponen, se marca como choque de horario en el
calendario, sin importar qué filtro de sede tengas seleccionado.

## Lo que todavía no existe

Respuestas individuales de aceptar/rechazar por parte de los voluntarios, historial de
sustituciones, mover o cancelar una sola ocurrencia de un turno recurrente de forma
independiente del resto de la serie, y un modelo de programación totalmente vinculado a
eventos (el modelo actual vincula un turno a un evento o actividad, pero la estructura más
profunda "serie → ocurrencia → requisito" descrita en las notas internas de arquitectura
todavía no se construyó).
