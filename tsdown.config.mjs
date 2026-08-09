import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: ["packages/testcontainers", "packages/modules/*"],
  // Preserve existing deep imports.
  entry: ["src/**/*.ts", "!src/**/*.test.ts", "!src/**/*test-helper.ts", "!src/**/*test-utils.ts"],
  root: "src",
  outDir: "build",
  clean: true,
  dts: true,
  format: "cjs",
  fixedExtension: false,
  target: "es2023",
  minify: false,
  sourcemap: false,
  report: false,
  deps: {
    neverBundle: true,
    alwaysBundle: ["modern-tar/fs"],
    onlyBundle: false,
    dts: {
      neverBundle: true,
    },
  },
  publint: {
    enabled: "ci-only",
  },
  attw: {
    enabled: "ci-only",
    profile: "strict",
    level: "error",
  },
});
