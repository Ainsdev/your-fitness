import * as React from "react";

interface EmailTemplateProps {
  token: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  token,
}) => (
  <div>
    <h1>
      Tu token es,{" "}
      <a href={`${process.env.DOMAIN}/password-reset/${token}`}>LINK</a>
    </h1>
  </div>
);

export default EmailTemplate;
