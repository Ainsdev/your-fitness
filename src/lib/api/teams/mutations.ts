// import { db } from "@/lib/db";
// import { 
//   TeamId, 
//   NewTeamParams,
//   UpdateTeamParams, 
//   updateTeamSchema,
//   insertTeamSchema, 
//   teamIdSchema 
// } from "@/lib/db/schema/teams";
// import { getUserAuth } from "@/lib/auth/utils";

// export const createTeam = async (team: NewTeamParams) => {
//   const { session } = await getUserAuth();
//   const newTeam = insertTeamSchema.parse({ ...team, userId: session?.user.id! });
//   try {
//     const t = await db.team.create({ data: newTeam });
//     return { team: t };
//   } catch (err) {
//     const message = (err as Error).message ?? "Error, please try again";
//     console.error(message);
//     return { error: message };
//   }
// };

// export const updateTeam = async (id: TeamId, team: UpdateTeamParams) => {
//   const { session } = await getUserAuth();
//   const { id: teamId } = teamIdSchema.parse({ id });
//   const newTeam = updateTeamSchema.parse({ ...team, userId: session?.user.id! });
//   try {
//     const t = await db.team.update({ where: { id: teamId, userId: session?.user.id! }, data: newTeam})
//     return { team: t };
//   } catch (err) {
//     const message = (err as Error).message ?? "Error, please try again";
//     console.error(message);
//     return { error: message };
//   }
// };

// export const deleteTeam = async (id: TeamId) => {
//   const { session } = await getUserAuth();
//   const { id: teamId } = teamIdSchema.parse({ id });
//   try {
//     const t = await db.team.delete({ where: { id: teamId, userId: session?.user.id! }})
//     return { team: t };
//   } catch (err) {
//     const message = (err as Error).message ?? "Error, please try again";
//     console.error(message);
//     return { error: message };
//   }
// };

