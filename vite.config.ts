import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src"),
      name: "MyLib",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        preserveModules: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled,",
        },
        inlineDynamicImports: false,

        // manualChunks: (id) => {
        //   // 可以把 id 印出來看，會更清楚知道他的內容
        //   // console.log('id', id)
        //   if (id.includes("node_modules")) {
        //     const arr = id.toString().split("node_modules/")[1].split("/");
        //     switch (arr[0]) {
        //       case "element-plus":
        //         return;
        //       default:
        //         return arr[0];
        //     }
        //   }
        // },
      },
    },
  },
});
