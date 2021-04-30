import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "/@src", replacement: path.resolve(__dirname, "./src") }],
  },
  plugins: [reactRefresh()],
});
