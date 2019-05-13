const path = require("path");
const fs = require("fs");

const content = JSON.parse(
  fs.readFileSync(path.resolve("./dist/package.json"), "utf8")
);
const lastVersion = content.version.split(".");
lastVersion[2] = String(Number(lastVersion[2]) + 1);
const newVersion = lastVersion.join(".");

module.exports = {
  PackageValues: {
    name: "vindao-react-forms",
    version: newVersion,
    main: "./index.js",
    dependencies: {
      shortid: "^2.2.14"
    },
    description: "simple form components for react",
    files: [
      "index.js",
      "index.d.ts",
      "styles.d.ts",
      "components/*",
      "assets/*"
    ],
    types: "index.d.ts",
    peerDependencies: {
      react: "^16.8.6",
      "react-dom": "^16.8.6",
      "react-spring": "^8.0.20",
      "styled-components": "^4.2.0"
    },
    keywords: ["forms", "react"],
    author: "Vindao (Vincent Schmitt)",
    license: "MIT"
  },
  PackageFilename: path.resolve("./") + "/package.json"
};
