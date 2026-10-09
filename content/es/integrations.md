# Integraciones

En **Configuración → Integraciones**, un Administrador puede conectar
servicios que tu iglesia ya usa. Hoy eso es **tu propio servidor de correo**: Comunicados
puede enviar desde la cuenta de correo de tu iglesia en lugar de la de HolyCRM.

También podés conectar hasta cinco **webhooks** para pasar los comunicados y lo que pasa en tu
iglesia (nuevas visitas, miembros, pedidos de oración, inscripciones, respuestas a turnos) a tus
propias automatizaciones (ver más abajo).

## Por qué enviar desde tu propia cuenta de correo

- **Los correos salen desde la dirección de tu iglesia** (por ejemplo `oficina@tuiglesia.org`),
  así las respuestas te llegan directo y la gente reconoce quién escribe.
- **Sin el límite mensual de HolyCRM.** Los correos que salen por tu cuenta no cuentan para
  los [1.000 correos por mes](#/bulk-email) que incluye HolyCRM. Se aplican los límites de
  envío de tu proveedor de correo (ver más abajo).

## Antes de empezar

Necesitás una cuenta de correo que permita enviar por **SMTP**, y sus datos. La mayoría lo
permite:

- **Google (Gmail o Google Workspace):** servidor `smtp.gmail.com`, puerto 587. Usá una
  **contraseña de aplicación**, no tu contraseña normal: en tu Cuenta de Google andá a
  Seguridad → Verificación en 2 pasos → Contraseñas de aplicaciones. Las cuentas de Google
  Workspace pueden enviar unos 2.000 correos por día.
- **Microsoft 365 / Outlook:** servidor `smtp.office365.com`, puerto 587. Puede que el
  administrador de Microsoft 365 tenga que habilitar "SMTP autenticado" para el buzón.
- **Mailgun, SendGrid, Amazon SES, Brevo** y servicios de envío parecidos: usá las
  credenciales SMTP de tu cuenta en ese servicio.

Si no estás seguro, pedile los "datos SMTP" a quien se ocupa del correo de tu iglesia.

## Cómo configurarlo

1. Andá a **Configuración → Integraciones**.
2. Elegí tu **Proveedor**. Eso completa el servidor y el puerto, y muestra un consejo para
   ese proveedor.
3. Escribí el **Usuario** y la **Contraseña**, la **Dirección del remitente** desde la que
   tienen que salir los correos y el **Nombre del remitente** que va a ver la gente
   (normalmente el nombre de tu iglesia). La dirección tiene que ser una desde la que tu
   cuenta pueda enviar.
4. Hacé clic en **Guardar**.
5. Hacé clic en **Enviar correo de prueba**. HolyCRM envía una prueba a tu propia dirección por
   tu servidor y muestra el resultado en unos segundos. Comprobá que haya llegado (mirá
   también en spam).
6. Hacé clic en **Activar**.

Desde ese momento, Comunicados muestra **"Enviando por tu propio servidor de correo"** en
lugar del límite mensual, y todos los correos salen por tu cuenta.

Solo se puede activar después de una prueba exitosa, y **guardar cualquier cambio lo vuelve a
desactivar** hasta que envíes una nueva prueba. Así nunca queda activado con datos que no
funcionan.

## Si la prueba falla

La pantalla explica qué pasó en palabras simples, con el mensaje técnico debajo:

- **El servidor rechazó el usuario o la contraseña:** revisalos. Con Google, fijate de haber
  usado una contraseña de aplicación.
- **No se pudo conectar con el servidor:** revisá el nombre del servidor y el puerto.
- **Falló la conexión segura:** el puerto 587 va con STARTTLS y el 465 con SSL/TLS.
- **El servidor rechazó el correo:** probablemente la dirección del remitente no es una desde
  la que esta cuenta puede enviar.

Los problemas con envíos reales aparecen en el mismo lugar, como **Último problema**, y debajo
del envío en **Envíos recientes** de Comunicados. Si tu servidor no puede entregar un correo,
ese correo falla: HolyCRM nunca lo envía por su propio correo en su lugar.

## Desactivarlo o quitarlo

**Desactivar** vuelve a enviar por el correo de HolyCRM, que otra vez cuenta para el límite
mensual. Tu configuración queda guardada, así que podés volver a activarlo después.
**Eliminar** borra la configuración; los correos que todavía estén esperando para salir por tu
servidor van a fallar.

## Webhooks (automatizaciones)

Un webhook envía cosas a una dirección web propia, normalmente una herramienta de automatización
como **Zapier**, **Make** o **n8n**, donde decidís qué pasa después: reenviarlo por WhatsApp o
Telegram, sumar a la persona a una planilla, avisarle al equipo de bienvenida, etc. Está pensado
para quien se ocupa de la tecnología en tu iglesia; para los miembros no cambia nada. Podés
agregar hasta **5 webhooks**, cada uno con su dirección y con lo que quiere recibir.

### Qué puede recibir un webhook

Marcá lo que debe recibir cada webhook:

- **Los comunicados que elijas enviar a los webhooks** (ver [Comunicados](#/bulk-email)).
- **Nueva visita**: cualquiera que complete el formulario "¿Nos visitás por primera vez?" o se agregue en Visitas.
- **Nuevo miembro** (nunca niños).
- **Nuevo pedido de oración**: quién lo pidió y cómo contactarlo. **El pedido en sí nunca se
  envía**: tu equipo lo lee dentro de HolyCRM.
- **Inscripción a un evento**.
- **Un voluntario confirmó** o **no puede servir en un turno**.

**Privacidad:** los envíos incluyen nombres, correos y teléfonos. Los niños (miembros marcados
como menores, con tutores o por debajo de la edad de menor de tu iglesia) nunca se incluyen en
nada que se envíe a un webhook, y nunca se envían notas, direcciones ni fechas de nacimiento.
Conectá solo servicios en los que tu iglesia confíe y con los que pueda compartir esta
información.

### Cómo configurar uno

1. En tu herramienta de automatización, creá un flujo que empiece con "recibir un webhook"
   (Zapier: *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nodo *Webhook*).
   Copiá la dirección que te da; empieza con `https://`.
2. En **Integraciones → Webhooks**, hacé clic en **Agregar un webhook**, poné un nombre si
   querés, pegá la dirección como **URL del webhook**, marcá **Qué enviar** y hacé clic en
   **Guardar**.
3. HolyCRM muestra un **secreto de firma** una sola vez. Copialo y guardalo junto a tu
   automatización: le permite comprobar que cada envío viene realmente de HolyCRM. Si lo perdés,
   hacé clic en **Nuevo secreto de firma** (el anterior deja de funcionar).
4. Hacé clic en **Enviar prueba**. La pantalla muestra qué respondió tu webhook.
5. Hacé clic en **Activar**.

Cambiar la dirección o el formato desactiva el webhook hasta que una nueva prueba salga bien;
cambiar lo que recibe, no. Si un webhook no responde, HolyCRM vuelve a intentarlo varias veces
durante las horas siguientes; los problemas aparecen en ese webhook como **Último problema**, y
en los comunicados también debajo del envío en **Envíos recientes**.

### Formato: JSON de HolyCRM o personalizado

Por defecto cada envío es el mismo JSON para cualquier herramienta, que Zapier, Make y n8n leen sin
configurar nada. Cada envío incluye una línea lista en el idioma de tu iglesia, `summary` (por
ejemplo "Nueva visita: Juan Pérez").

Si el lugar al que enviás espera otra cosa, elegí **Personalizado (para programadores)** y
escribí vos el cuerpo, con marcadores que HolyCRM completa, y encabezados adicionales si hacen
falta. **Empezar desde un ejemplo** lo completa para dos casos comunes:

- **ntfy** (notificaciones en el celular): un mensaje de texto con título.
- **Telegram** (un bot que publica en un grupo): reemplazá `YOUR_CHAT_ID` por el id de tu chat y
  usá `https://api.telegram.org/bot<el token de tu bot>/sendMessage` como URL.

Para programadores: cada pedido va firmado. El encabezado `X-HolyCRM-Signature` es `sha256=` + el
HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<cuerpo sin procesar>` con tu secreto de firma (también con
el formato personalizado, sobre el cuerpo que realmente se envía). `X-HolyCRM-Event` dice qué
pasó, y `X-HolyCRM-Delivery` no cambia cuando se reintenta un envío, así podés ignorar
duplicados. Las plantillas usan la sintaxis de plantillas de Go sobre el envío:
`{{.data.summary}}`, `{{.data.subject}}`, `{{.church.name}}`, `{{range .data.recipients}}…{{end}}`
y `{{json …}}` para insertar un valor como JSON. Un error en la plantilla hace fallar la prueba
con ese error.

Solo los Administradores pueden ver y cambiar Integraciones, y es parte del plan pago.
