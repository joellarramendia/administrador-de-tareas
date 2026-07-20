# administrador-de-tareas <br>
https://administrador-de-tareas-ten.vercel.app/


### 📧 Pruebas de Correo Electrónico (Mailtrap)

Para evitar el envío de correos reales a usuarios durante la fase de desarrollo y pruebas, este proyecto utiliza **Mailtrap** como servidor SMTP falso (Fake SMTP Server). Todos los correos de confirmación de cuenta y recuperación de contraseñas se capturarán allí.

1. Regístrate de forma gratuita en [Mailtrap.io](https://mailtrap.io/).
2. Entra a tu **Inboxes** y selecciona **My Inbox**.
3. En la pestaña **Integrations**, selecciona **Nodemailer** (o copia las credenciales SMTP manuales).
4. Agrega los datos correspondientes en tu archivo `.env`:

```env
# Configuración de Mailtrap
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=tu_usuario_de_mailtrap
SMTP_PASS=tu_contraseña_de_mailtrap