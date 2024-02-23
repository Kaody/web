import { CodegenConfig } from "@graphql-codegen/cli";

const BASE_URL = process.env.API_BASE_URL;
const GRAPHQL_PATH = process.env.NEXT_PUBLIC_GRAPHQL_PATH;

const config: CodegenConfig = {
  schema: `${BASE_URL}${GRAPHQL_PATH}`,
  documents: ["./src/graphql/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/generated/": {
      preset: "client",
      config: {
        documentMode: "documentNode",
      },
    },
  },
};

export default config;
