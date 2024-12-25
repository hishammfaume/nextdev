import NextAuth from "next-auth";
import AzureAd from "next-auth/providers/azure-ad";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, AzureAd],
});