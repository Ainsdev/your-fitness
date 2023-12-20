import * as React from "react";

interface EmailTemplateProps {
  token: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  token,
}) => (
  <div className="flex flex-col justify-center items-center">
    <h1>Restablecer contraseña</h1>
    <p>
      Para restablecer tu contraseña, haz clic en el siguiente enlace y sigue
      las instrucciones.
    </p>
    <a>{`${process.env.DOMAIN}/password-reset/${token}`}</a>
  </div>
);

export default EmailTemplate;
