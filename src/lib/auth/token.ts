// auth/token.ts
import { generateRandomString, isWithinExpiration } from "lucia/utils";
import { db } from "@/lib/db/index";

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export const generatePasswordResetToken = async (userId: string) => {
  const storedUserTokens = await db.password_reset_token.findMany({
    where: {
      user_id: userId,
    },
  });
  if (storedUserTokens && storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await db.password_reset_token.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN,
      user_id: userId,
    },
  });

  return token;
};


export const validatePasswordResetToken = async (token: string) => {
	const storedToken = await db.password_reset_token.findFirst({
		where: {
			id: token,
		},
		
		
		
		if (!storedToken) throw new Error("Invalid token");
		await trx
			.table("password_reset_token")
			.where("id", "=", storedToken.id)
			.delete();
		return storedToken;
	});
	const tokenExpires = Number(storedToken.expires); // bigint => number conversion
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error("Expired token");
	}
	return storedToken.user_id;
};
