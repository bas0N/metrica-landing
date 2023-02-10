// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        returnTo: process.env.APP_URL + "/dashboard",
        authorizationParams: {
          audience: process.env.AUTH0_AUDIENCE, // or AUTH0_AUDIENCE
        },
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
