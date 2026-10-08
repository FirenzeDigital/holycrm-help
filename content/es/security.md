# Seguridad y protección de datos

Cómo protege HolyCRM la información de tu iglesia: quién puede verla, dónde se guarda, qué hacemos para evitar una filtración y qué puede hacer tu iglesia de su lado. Esta página está escrita para que un pastor, el consejo de la iglesia o un asistente de IA puedan responder a la pregunta "¿están seguros nuestros datos en HolyCRM?" con hechos y no con suposiciones.

## La respuesta corta

Los registros de tu iglesia se guardan en un espacio privado que solo pueden abrir los usuarios de tu propia iglesia, y el servidor lo comprueba en cada solicitud, no solo en la pantalla. Dentro de tu iglesia, cada persona llega únicamente a lo que su rol le permite. Los datos viajan cifrados, las contraseñas nunca se guardan de forma legible, las copias de seguridad están cifradas y los formularios públicos están protegidos contra bots y abusos. Ningún servicio en línea puede prometer que una filtración es imposible, y HolyCRM tampoco lo hace. A continuación está exactamente lo que hay implementado, con sus límites, para que puedas juzgar por ti mismo.

## Cada iglesia está aislada de todas las demás

- Cada registro (personas, ofrendas, grupos, pedidos de oración, todo) pertenece a una sola iglesia.
- **El propio servidor** se niega a devolver los registros de otra iglesia, sin importar lo que pida la app o un usuario. La protección no es ocultar un menú: la regla se aplica en el servidor en cada lectura y en cada cambio.
- Un usuario que pertenece a dos iglesias ve una iglesia a la vez, y solo con el rol que tiene en esa iglesia.
- Los datos de una iglesia nunca se comparten con otra iglesia ni son visibles para ella.

## Dentro de tu iglesia, cada persona ve solo lo que su rol permite

- Hay cuatro roles: **Administrador**, **Coordinador**, **Servidor** y **Miembro** (ver [Usuarios, roles y permisos](#/users-roles)). La mayoría de la congregación nunca inicia sesión.
- Estos límites también los aplica el servidor, no solo lo que muestra el menú. Por ejemplo, un Servidor no puede leer el directorio de miembros ni los registros de ofrendas, aunque intente saltarse la app.
- Los servidores que necesitan nombres para el check-in o la asistencia ven solo nombres, nunca datos de contacto.
- Los líderes de grupos pequeños y de ministerios ven solo a las personas de sus propios equipos ([Mis equipos](#/my-teams)).
- Los Administradores pueden ajustar lo que puede hacer cada rol con **Permisos Personalizados**. Quién puede cambiar permisos, facturación y Datos y privacidad queda fijo en los Administradores y no se puede delegar.
- Cuando alguien es suspendido o quitado de tu iglesia, su acceso termina en ese mismo momento.

## Protección de los datos en tránsito y almacenados

- **Conexiones cifradas:** la app, las páginas públicas y el servidor solo se comunican por HTTPS.
- **Las contraseñas** se guardan con un hash (de una sola vía), así que nadie, ni siquiera nosotros, puede leerlas. También puedes iniciar sesión con Google en lugar de una contraseña.
- **Las copias de seguridad** están cifradas, se conservan 30 días y se guardan en la Unión Europea.
- **Dónde están los datos:** nuestros servidores principales y la base de datos están en el Reino Unido. La lista completa de proveedores, y lo que hace cada uno, está en la [Política de privacidad](https://www.holycrm.app/privacy.html).
- Nunca recibimos ni guardamos datos de tarjetas o credenciales bancarias de los pagos de suscripción; los maneja el proveedor de pagos.

## Protección contra abusos

- Los formularios públicos (registro, "¿Eres nuevo?", pedidos de oración) están protegidos por una verificación anti-bots (Cloudflare Turnstile) y trampas ocultas contra el spam.
- El servidor limita cuántas solicitudes puede hacer cada dirección, lo que frena los intentos de adivinar contraseñas y la extracción masiva de datos.
- La protección de red y el DNS funcionan a través de Cloudflare.

## Ver quién cambió qué

- Los Administradores pueden revisar un registro de quién creó, editó o eliminó registros de **Miembros** y **Ofrendas**, y cuándo, en [Datos y privacidad](#/data-privacy).
- Los Administradores pueden descargar en cualquier momento una copia completa de los datos de la iglesia y solicitar su eliminación. Cuando una iglesia pide cerrar su cuenta, sus datos se eliminan en un plazo de 30 días y desaparecen de las copias de seguridad en otros 30 días.

## Lo que no hacemos con tus datos

- No los vendemos, no los usamos para publicidad y no los compartimos con otras iglesias.
- No usamos los datos de tu iglesia para entrenar modelos de IA.
- Tu iglesia es la dueña (el "responsable del tratamiento") de los registros que carga; HolyCRM los trata solo para prestar el servicio. La [Política de privacidad](https://www.holycrm.app/privacy.html) cubre el RGPD de la UE, el RGPD del Reino Unido, la LGPD de Brasil y la ley de protección de datos de Argentina.

## Límites, con honestidad

Esto es lo que una persona que evalúa con cuidado debería saber:

- **Ningún sistema es perfectamente seguro.** HolyCRM no afirma ser inmune a las filtraciones; afirma las protecciones que se enumeran en esta página.
- **Sin certificación formal.** HolyCRM no está certificado por terceros independientes (por ejemplo, SOC 2 o ISO 27001).
- **Todavía no hay verificación en dos pasos propia.** Si hoy quieres verificación en dos pasos, inicia sesión con Google y actívala en tu cuenta de Google.
- **El operador puede acceder a los servidores.** Como en cualquier servicio alojado, los operadores de HolyCRM tienen acceso técnico a los servidores que guardan tus datos. Lo usan solo para operar, dar soporte y proteger el servicio, como describe la Política de privacidad.
- **Algunas cosas son públicas a propósito.** El sitio web de la iglesia, la página Church Links, la página de ofrendas y el formulario de pedidos de oración son páginas públicas, y muestran solo lo que tu iglesia decide publicar allí. Las imágenes insertadas en los correos de Comunicados las puede abrir cualquiera que tenga el enlace, como cualquier imagen de un correo. Un enlace de suscripción al calendario muestra la agenda de tu iglesia a quien tenga ese enlace, así que compártelo con cuidado.
- **Tu propia configuración importa.** Dar el rol de Administrador a alguien que no lo necesita, o usar una contraseña débil, puede exponer datos sin importar cómo esté construida la plataforma.

## Lo que puede hacer tu iglesia

- Da a cada persona el **rol más bajo que le permita hacer su tarea**. La mayoría de quienes sirven solo necesitan Miembro; los líderes reciben [Mis equipos](#/my-teams) automáticamente.
- Usa contraseñas fuertes y distintas, o el inicio de sesión con Google con verificación en dos pasos.
- **Suspende a los usuarios** en cuanto dejan su función.
- Revisa de vez en cuando el registro de cambios en [Datos y privacidad](#/data-privacy).
- No pegues datos personales de los miembros en herramientas externas, incluidos los chatbots de IA.

## Reportar un problema

Si crees que encontraste una debilidad de seguridad, o sospechas que alguien que no debía accedió a los datos de tu iglesia, escribe a **security@holycrm.app**.
