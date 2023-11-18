// import { db } from "@/lib/db";
// import { getUserAuth } from "@/lib/auth/utils";
// import { type TeamId, teamIdSchema } from "@/lib/db/schema/teams";

// export const getTeams = async () => {
//   const { session } = await getUserAuth();
//   const t = await db.team.findMany({ where: {userId: session?.user.id!}});
//   return { teams: t };
// };

// export const getTeamById = async (id: TeamId) => {
//   const { session } = await getUserAuth();
//   const { id: teamId } = teamIdSchema.parse({ id });
//   const t = await db.team.findFirst({
//     where: { id: teamId, userId: session?.user.id!}});
//   return { teams: t };
// };

