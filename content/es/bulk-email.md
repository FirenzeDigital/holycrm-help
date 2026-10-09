# Comunicados y plantillas de correo

Enviá anuncios, boletines y novedades a tu congregación, y reutilizá diseños como plantillas.

## Redactar un correo

Elegí tu **audiencia** — todos, una etiqueta, un grupo, un ministerio, o un miembro
específico — y después escribí el asunto y el cuerpo con el editor.

El editor tiene tres modos, que podés cambiar en cualquier momento (todos convierten al mismo
contenido por dentro, así que cambiar de modo no pierde tu trabajo):

- **Bloques** (el predeterminado) — armá tu correo visualmente con bloques: títulos,
  párrafos, imágenes, botones, listas, separadores y diseños en varias columnas. Arrastrá los
  bloques para reordenarlos, duplicalos o eliminalos, y hacé clic en **+ Agregar bloque** para
  insertar uno nuevo.
- **HTML** — escribí HTML crudo directamente, para usuarios avanzados.
- **Markdown** — un atajo de texto simple y legible para un correo rápido en texto plano.

Una **vista previa en vivo** al costado muestra exactamente lo que van a ver los
destinatarios, incluyendo cualquier variable combinada completada con datos de muestra.

### Columnas

Usá un bloque de **Columnas** para poner más de una cosa lado a lado en una fila — por
ejemplo, una imagen junto a un párrafo, o dos botones uno al lado del otro. Elegí una
proporción de ancho (50/50, 33/33/33, etc.), y después elegí qué contiene cada columna. En
una pantalla de celular angosta, las columnas se apilan automáticamente una sobre otra para
que el diseño se siga viendo bien.

### Personalizar con variables combinadas

Hacé clic en cualquier campo de texto del editor (un título, un párrafo, el texto de un
botón...), y después hacé clic en una variable de la barra de herramientas (como
**Nombre**) para insertarla en el cursor como `{{first_name}}`. Se reemplaza por el valor
real de cada destinatario al enviarse — la vista previa lo muestra con un destinatario de
muestra para que puedas revisar que se vea bien antes de enviar.

### Enviar una prueba primero

Usá **Enviar prueba a mi correo** para recibir en tu propia dirección el correo exacto que
redactaste antes de enviarlo a tu audiencia real — un buen hábito antes de cualquier envío
real.

### Enviar como notificación en la app

**Enviar como** tiene tres casillas que podés combinar: **Correo**, **Notificación en la app** y **Webhooks**. Una notificación es un
mensaje corto: el **Asunto** es el título y el **Texto de la notificación** (hasta 200
caracteres) es el mensaje; las variables funcionan en los dos. Llega a las personas cuya ficha
de miembro está vinculada a un usuario de HolyCRM: la ven en la campanita de la app, y en su
celular si activaron las notificaciones. Quien no tiene usuario solo recibe el correo.
**Enviarme una notificación de prueba** te muestra cómo se ve antes.

### Enviar a tus webhooks

Si un Administrador activó [webhooks](#/integrations) que reciben comunicados, marcá **Webhooks**
en **Enviar como** (sola o junto con correo y notificación); si no, la casilla aparece
deshabilitada. El
comunicado (asunto, mensaje y la lista de personas a las que va dirigido, con nombre, correo y
teléfono) llega a tu propia automatización (por ejemplo un flujo de Zapier, Make o n8n), que
puede reenviarlo por WhatsApp, Telegram, SMS o lo que necesites. Enviar al webhook no cuenta para
el límite mensual de correos. **Envíos recientes** muestra si el webhook lo recibió.

## Plantillas de correo

Guardá un diseño que vas a reutilizar — un correo de bienvenida, el formato de un boletín
mensual — como Plantilla, y después cargalo en un comunicado nuevo más adelante en lugar
de rearmarlo desde cero. Las plantillas muestran las variables combinadas como marcadores
literales `{{placeholder}}` en la vista previa, ya que todavía no hay un destinatario
específico.

## Marca / identidad visual

- **El logo de tu iglesia**, si lo subiste en [Configuración de la iglesia](#/church-settings),
  se puede insertar en cualquier correo con un clic mediante el botón **Logo de la iglesia**
  del editor.
- Todo correo enviado a través de HolyCRM incluye una pequeña línea "Sent with HolyCRM" — no
  es algo que puedas quitar, y se mantiene deliberadamente discreta.

## Después de enviar

Los correos se envían en segundo plano, normalmente en pocos minutos, así que podés salir de
la pantalla enseguida. **Envíos recientes** muestra el progreso de cada envío: cuántos se
entregaron del total, y **Enviando…** mientras algunos todavía están en camino. Si un correo
no se puede entregar (por ejemplo, la dirección no existe), se cuenta como **Fallidos** y el
motivo aparece debajo de ese envío; los demás se envían igual. Un correo de prueba llega de la
misma forma, normalmente en un minuto.

## Límites

Un envío individual tiene un tope de **500 destinatarios**. Esto mantiene el envío confiable;
si tu audiencia es más grande, consultá sobre dividir el envío.

**Límite mensual de correos.** Cada iglesia puede enviar hasta **1.000 correos por mes**
(cada destinatario cuenta como un correo, incluidos los de prueba). La pantalla muestra
cuántos usaste y cuándo se renueva el conteo, el día 1 de cada mes. Un envío que superaría
el límite no se envía, así nadie recibe medio mensaje. Las notificaciones de la app no
cuentan para este límite, así que para anuncios cortos son una buena alternativa.

Para enviar sin este límite, un Administrador puede conectar la cuenta de correo de tu
iglesia en [Integraciones](#/integrations).

**¿Necesitás más correos?** Un Administrador puede comprar un **paquete de correos** en
[Facturación](#/plans-billing): 5.000 correos por US$5. Los correos del paquete se usan recién
cuando se terminan los 1.000 del mes, y no vencen. La pantalla muestra cuántos te quedan.

## Lo que todavía no existe

Programar un envío para más adelante (los envíos salen de inmediato), SMS como canal,
seguimiento de aperturas/clics, y columnas anidadas dentro de columnas.
