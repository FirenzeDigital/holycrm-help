# Usar HolyCRM desde ChatGPT o Claude

Podés conectar HolyCRM a ChatGPT, Claude u otro asistente de IA y preguntar sobre tu iglesia
con tus propias palabras. Por ejemplo:

- *"¿Qué visitantes vinieron en el último mes y nadie contactó todavía?"*
- *"¿Quién no vino a su célula en las últimas tres semanas?"*
- *"¿Qué eventos tenemos en noviembre?"*
- *"Agregá a María Gómez como visitante. Vino hoy y le interesa el grupo de jóvenes."*

El asistente busca la respuesta en HolyCRM y te la explica, sin que tengas que recorrer
pantallas.

## Qué puede hacer

- **Consultar:** personas, [visitantes](#/visitors) (incluido quién no fue contactado
  todavía), ausencias en las [células](#/groups) y [eventos](#/events).
- **Hacer algunos cambios:** agregar un visitante, registrar un seguimiento (una llamada, un
  WhatsApp, una visita) y cambiar la etapa de un visitante. **No se guarda nada hasta que lo
  confirmás**: el asistente te muestra exactamente qué va a cambiar y espera tu "sí".
- Solo ve lo que **tu rol** puede ver en HolyCRM, y **nunca ve los registros de niños**.
- Convertir un visitante en miembro se sigue haciendo en la app.

## Antes de empezar: un Administrador lo activa

Los asistentes de IA están desactivados en todas las iglesias hasta que un Administrador los
activa:

1. Andá a **Configuración → Asistentes de IA**.
2. Leé qué se comparte (más abajo) y hacé clic en **Activar**.

En esa misma pantalla está la dirección para agregar en tu asistente de IA, y **quién lo
usa**: cada persona, las apps que usó y cuándo. Un Administrador puede **Bloquear** a una
persona (se corta al instante, use la app que use) o desactivar los asistentes de IA para
todos.

## Conectar Claude

HolyCRM está en el directorio de conectores de Claude:

1. Abrí [HolyCRM en el directorio de Claude](https://claude.ai/directory/holycrm-app), o en Claude
   (web, escritorio o app del celular) andá a **Personalizar → Conectores** y buscá *HolyCRM*.
2. Hacé clic en **Conectar**. Se abre una página de HolyCRM: iniciá sesión como siempre si te lo
   pide, revisá que diga que Claude quiere conectarse y hacé clic en **Permitir**.
3. Volvé a Claude y hacé tu pregunta.

Si tu organización de Claude no permite conectores del directorio, un administrador puede
agregarlo como conector personalizado, con la dirección de **Configuración → Asistentes de IA**
(`https://mcp.holycrm.app/mcp`).

## Conectar ChatGPT

En ChatGPT, agregar una conexión propia requiere un plan pago con el **Modo desarrollador**
activado (**Configuración → Apps → Configuración avanzada**). Después creá una app con la misma
dirección, elegí inicio de sesión OAuth y aprobala en la página de HolyCRM como arriba. Estamos
trabajando para que HolyCRM aparezca en el directorio de apps de ChatGPT y sea más fácil de
agregar.

Los menús de estas apps cambian cada tanto; si no encontrás una opción, buscá en su ayuda
"conector personalizado" o "MCP".

## Consejos

- **Si estás en más de una iglesia**, decí cuál: *"En Iglesia Gracia, ¿quién…?"*.
- **Revisá antes de confirmar.** Leé el cambio que te muestra el asistente antes de decir que sí.
- **Las fechas y horas** salen de HolyCRM en hora universal (UTC); el asistente suele
  convertirlas, pero si importa, revisá la hora del evento en la app.

## Privacidad y control

- **Lo que consultás se envía al asistente de IA que usás**, por ejemplo nombres, teléfonos,
  visitantes, grupos y eventos, y se rige por los términos y la política de privacidad de esa
  empresa. Conectá solo asistentes con los que tu iglesia esté de acuerdo. Ver
  [Datos y privacidad](#/data-privacy).
- Cada persona conecta su **propia** cuenta; no hay un usuario compartido de la iglesia.
- Tu conexión sigue activa mientras la uses. Después de **14 días** sin usarla, o si cambiás tu
  contraseña, te va a pedir que te conectes de nuevo.
- Para desconectarte, quitá HolyCRM de los conectores de tu app de IA.

## Si algo no funciona

- **"AI assistants are turned off for…"** (los asistentes de IA están desactivados): pedile a un
  Administrador que los active en **Configuración → Asistentes de IA**.
- **"…has turned off AI assistant access for your account"** (un administrador desactivó tu
  acceso): hablá con un Administrador de tu iglesia.
- **"Your HolyCRM sign-in has expired"** (tu sesión venció): quitá HolyCRM de tu app de IA y
  conectalo de nuevo.
