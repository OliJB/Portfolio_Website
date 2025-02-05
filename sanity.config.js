import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project-schema";

//Basically generates the sanity studio
const config = defineConfig({
    projectId: "edxnw8ks",
    dataset: "production",
    title: "My personal portfolio",
    apiVersion: "2025-01-09",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: [project]},
})

export default config;