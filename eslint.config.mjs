import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Дефолтный конфиг Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Кастомизированные правила
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_"
      }],
    },
  },
];

export default eslintConfig;
