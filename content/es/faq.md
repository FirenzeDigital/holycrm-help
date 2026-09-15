# Preguntas frecuentes

<details class="help-faq-item" open>
<summary>No veo un ítem del menú que esperaba ver. ¿Por qué?</summary>

Lo que ves depende de tu rol (Admin, Gestor, Voluntario o Miembro) y de cualquier permiso
personalizado que tu iglesia te haya configurado. Pedile a un Admin o Gestor que revise
[Usuarios, roles y permisos](#/users-roles) — o hay que cambiar tu rol, o hay que otorgar un
permiso personalizado para ese módulo.
</details>

<details class="help-faq-item">
<summary>¿Cómo traigo miembros que ya tengo en una planilla?</summary>

Exportá tu planilla a CSV y usá [Importar datos](#/data-import) dentro de Personas. Vas a
mapear tus columnas a los campos de HolyCRM y a ver una vista previa de exactamente qué se va
a crear antes de guardar nada. Tené en cuenta que siempre crea registros nuevos — no
verifica si ya cargaste a esa persona a mano antes.
</details>

<details class="help-faq-item">
<summary>¿Por qué el correo de un miembro está bloqueado y no puedo editarlo?</summary>

Ese miembro también tiene un acceso a HolyCRM (es Voluntario, Gestor o Admin). Su correo de
acceso y el correo de su ficha de miembro se mantienen sincronizados automáticamente, así que
editarlo desde el formulario de Miembros haría que se sobrescriba solo. Cambialo desde
**Configuración de administración → Usuarios** — ver
[Usuarios, roles y permisos](#/users-roles).
</details>

<details class="help-faq-item">
<summary>¿Cómo decide HolyCRM quién es "menor de edad"?</summary>

Tu iglesia define una **Edad límite para menores** en
[Configuración de la iglesia](#/church-settings) (predeterminado 18). Cualquier miembro con
una fecha de nacimiento por debajo de esa edad se trata automáticamente como menor en toda la
app — esto es lo que hace funcionar el campo Tutores y la elegibilidad para Check-in de
niños. Un miembro sin fecha de nacimiento cargada usa en cambio una casilla manual. Ver
[Miembros](#/members).
</details>

<details class="help-faq-item">
<summary>¿Cuál es la diferencia entre Check-in y Check-in de niños?</summary>

Se ven casi idénticos, pero **Check-in de niños** solo permite registrar menores de edad y
además imprime una etiqueta de tutor que coincide, mientras que **Check-in** normal permite
a cualquier miembro activo y está pensado para cultos/eventos abiertos a todos. Usá Check-in
de niños específicamente para ministerios restringidos a menores (como un ministerio de niños
durante un culto). Ver [Asistencia y check-in](#/attendance).
</details>

<details class="help-faq-item">
<summary>¿Cómo programo voluntarios para un culto o evento?</summary>

Configurá tus **Roles de servicio** una vez (Sonido, Bienvenida, etc.), después creá un
**Turno** (Requisito de rol) vinculado al evento o actividad de ministerio indicando cuánta
gente necesita ese rol — podés hacer esto directamente desde el panel de un evento en el
[Calendario](#/calendar). Después asigná voluntarios para cubrirlo. Ver
[Turnos de servicio](#/rotas).
</details>

<details class="help-faq-item">
<summary>¿Por qué un evento muestra una hora distinta a la que esperaba?</summary>

Cada horario está ligado a la zona horaria de su **sede**, no a la zona horaria que estés
usando vos para ver el calendario. Si tu zona horaria de visualización es distinta, los
detalles del evento muestran ambas horas para que no haya ambigüedad. Verificá que la Sede
del evento tenga la zona horaria correcta configurada — ver [Calendario](#/calendar) y
[Configuración de la iglesia y sedes](#/church-settings).
</details>

<details class="help-faq-item">
<summary>¿Puedo personalizar un correo masivo con el nombre de cada destinatario?</summary>

Sí — hacé clic en un campo de texto del editor, y después hacé clic en una variable como
**Nombre** en la barra de herramientas para insertar `{{first_name}}`. Se reemplaza por el
valor real de cada destinatario al enviarse. Ver [Correos masivos y plantillas](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>¿Hay un límite de cuántas personas puedo mandar un correo a la vez?</summary>

Sí, 500 destinatarios por envío, y el mismo límite aplica a un solo archivo de Importación de
datos. Si necesitás llegar a más gente, dividí la audiencia o el archivo en tandas.
</details>

<details class="help-faq-item">
<summary>¿Cómo quito la línea "Sent with HolyCRM" de mis correos?</summary>

No podés — es una pequeña parte fija de todo correo enviado a través de la plataforma. Se
mantiene deliberadamente discreta y no aparece en ningún otro lugar de la app.
</details>

<details class="help-faq-item">
<summary>Mi iglesia recibe ofrendas en más de una moneda. ¿Cómo funciona eso?</summary>

Configurá una **moneda predeterminada** en
[Configuración de la iglesia](#/church-settings), con la opción de anularla por
[Sede](#/church-settings). Cualquier transacción ingresada en una moneda distinta necesita un
**tipo de cambio** (ingresado a mano, según esa fecha) para que los totales en
[Ofrendas y finanzas](#/finance) puedan combinarse correctamente. No hay una consulta
automática de tipo de cambio.
</details>

<details class="help-faq-item">
<summary>¿Cómo agrego un logo de la iglesia, y dónde aparece?</summary>

Subilo en [Configuración de la iglesia](#/church-settings). Queda disponible como botón de
"Insertar logo de la iglesia" con un clic en el editor de [Correos masivos](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Olvidé mi contraseña. ¿Qué hago?</summary>

En la pantalla de acceso, usá **¿Olvidaste tu contraseña?** e ingresá tu correo. Siempre vas
a recibir el mismo mensaje neutral de confirmación, y un enlace para restablecerla si existe
una cuenta con esa dirección — esto es intencional, para que la pantalla de acceso no se
pueda usar para verificar si un correo está registrado.
</details>

<details class="help-faq-item">
<summary>¿Los Miembros pueden iniciar sesión en HolyCRM ellos mismos?</summary>

Solo si se les dio un acceso con rol Miembro — la mayoría de los miembros son solo registros
en tu directorio, sin ningún acceso. Un acceso con rol Miembro es de solo lectura y
principalmente ve su propio [Perfil](#/profile). Para darle un acceso a alguien, ver
[Usuarios, roles y permisos](#/users-roles).
</details>

<details class="help-faq-item">
<summary>¿Los invitados pueden inscribirse a un evento por su cuenta, en línea?</summary>

Todavía no — [Inscripciones a eventos](#/events) por ahora solo se carga por el personal (un
miembro del equipo busca y agrega a un miembro que ya está en tu directorio). La inscripción
pública de autoservicio es una función planeada a futuro.
</details>

<details class="help-faq-item">
<summary>Algo parece estar fallando o tengo una duda que no está acá. ¿Qué hago?</summary>

Contactá a quien administre tu cuenta de HolyCRM en tu iglesia, o directamente al soporte de
HolyCRM. Este Centro de ayuda cubre cómo debería funcionar cada módulo hoy; si algo se
comporta distinto a lo descrito acá, vale la pena reportarlo.
</details>
