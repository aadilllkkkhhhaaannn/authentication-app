import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //   server: {
  //     proxy: {
  //       "/api": {
  //         target:
  //           "https://auth-backend-93eo.onrender.com",
  //           // "https://authenticationeskills.vercel.app/api/user/register",
  //         // target: "https://authenticationeskills.vercel.app/api/user/login",
  //         changeOrigin: true,
  //         secure: false,
  //       },
  //     },
  //   },
});

// "https://auth-backend-93eo.onrender.com/api/user/register"
