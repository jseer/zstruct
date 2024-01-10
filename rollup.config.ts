import ts from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "rollup";
import { readFileSync } from "fs";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const name = pkg.name;
export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: `dist/${name}.cjs`,
      },
      {
        format: "es",
        file: `dist/${name}.mjs`,
      },
      {
        format: "iife",
        file: `dist/${name}.js`,
        name: "zstruct",
      },
    ],
    plugins: [
      ts({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: `dist/${name}.d.cts`,
      },
      {
        format: "es",
        file: `dist/${name}.d.mts`,
      },
    ],
    plugins: [dts()],
  },
  {
    input: "src/index.ts",
    output: {
      format: "iife",
      file: `dist/${name}.min.js`,
      name: "zstruct",
    },
    plugins: [
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "runtime",
      }),
      ts({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        rootDir: "./src",
      }),
      terser(),
    ],
  },
]);
