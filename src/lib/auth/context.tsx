// "use client";
// import React, { createContext, useContext, useState } from "react";
// import { AuthSession } from "./utils";

// // Crear el contexto
// const AuthContext = createContext<AuthSession | null>(null);

// type Props = {
//   session: AuthSession | null;
//   children: React.ReactNode;
// };
// // Este es tu componente del lado del cliente
// export function ClientAuthComponent({ session, children }: Props) {
//   const [authSession, setAuthSession] = useState(session);

//   return (
//     <AuthContext.Provider value={authSession}>{children}</AuthContext.Provider>
//   );
// }

// // Crear un hook personalizado para usar el contexto
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
