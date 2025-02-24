import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        target: "esnext",
        minify: false,
        sourcemap: true,
        lib: {
            entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
            name: "moysklad",
            fileName: "index",
            formats: ["es"],
        },
    },
    plugins: [
        tsconfigPaths(),
        dts({
            entryRoot: "src",
            exclude: ["**/*.test.ts", "**/*.test-d.ts", "vite.config.ts", "scripts"],
            rollupTypes: true,
        }),
    ]
});