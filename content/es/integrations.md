# Integraciones

En **Administración → Integraciones**, un Administrador puede conectar
servicios que tu iglesia ya usa. Hoy eso es **tu propio servidor de correo**: Comunicados
puede enviar desde la cuenta de correo de tu iglesia en lugar de la de HolyCRM.

También podés conectar un **webhook** para pasar tus comunicados a tus propias
automatizaciones (ver más abajo).

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

1. Andá a **Administración → Integraciones**.
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

## Webhook (automatizaciones)

Un webhook envía cada comunicado que elijas a una dirección web propia, normalmente una
herramienta de automatización como **Zapier**, **Make** o **n8n**, donde decidís qué pasa
después: reenviarlo por WhatsApp o Telegram, sumar a las personas a una planilla, etc. Está
pensado para quien se ocupa de la tecnología en tu iglesia; para los miembros no cambia nada.

**Privacidad:** cada envío incluye el nombre, el correo y el teléfono de las personas a las que va
dirigido el comunicado. Conectá solo un servicio en el que tu iglesia confíe y con el que pueda
compartir esta información.

1. En tu herramienta de automatización, creá un flujo que empiece con "recibir un webhook"
   (Zapier: *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nodo *Webhook*).
   Copiá la dirección que te da; empieza con `https://`.
2. En **Integraciones → Webhook**, pegala como **URL del webhook** y hacé clic en **Guardar**.
3. HolyCRM muestra un **secreto de firma** una sola vez. Copialo y guardalo junto a tu
   automatización: le permite comprobar que cada envío viene realmente de HolyCRM. Si lo perdés,
   hacé clic en **Nuevo secreto de firma** (el anterior deja de funcionar).
4. Hacé clic en **Enviar prueba**. La pantalla muestra qué respondió tu webhook.
5. Hacé clic en **Activar**.

Ahora, en [Comunicados](#/bulk-email), elegí **Solo webhook** o marcá **También enviar a mi
webhook**. Cada envío contiene el asunto, el mensaje (en HTML y en texto) con las variables como
`{{first_name}}` sin completar para que las complete tu automatización, y la lista de
destinatarios. Si tu webhook no responde, HolyCRM vuelve a intentarlo varias veces durante las
horas siguientes; el resultado aparece en **Envíos recientes** y acá como **Último problema**.

Para desarrolladores: cada pedido va firmado. El encabezado `X-HolyCRM-Signature` es `sha256=` +
el HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<cuerpo sin procesar>` con tu secreto de firma.
`X-HolyCRM-Delivery` no cambia cuando se reintenta un envío, así podés ignorar duplicados.

Solo los Administradores pueden ver y cambiar Integraciones, y es parte del plan pago.
