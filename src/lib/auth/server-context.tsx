// import { ClientAuthComponent } from "./context";
// import { AuthSession, getUserAuth } from "./utils";

// // Este es tu componente del lado del servidor
// export async function ServerAuthProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const userSession = await getUserAuth();

//   // Pasamos la sesión del usuario como prop a nuestro componente del lado del cliente
//   return (
//     <ClientAuthComponent session={userSession}>{children}</ClientAuthComponent>
//   );
// }
