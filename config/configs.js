const path = require("path");

let currentVersion = "1.0.13";

UpdateVersion();

function UpdateVersion() {
  const cVersion = currentVersion.split(".");
  const nVersion = String(Number(cVersion[2]) + 1);
  const newVersion = cVersion[0] + "." + cVersion[1] + "." + nVersion;
  console.log(newVersion);
  currentVersion = newVersion;
}
console.log(currentVersion);

module.exports = {
  PackageValues: {
    name: "vindao-react-forms",
    version: currentVersion,
    main: "./index.js",
    dependencies: {
      shortid: "^2.2.14"
    },
    description: "simple form components for react",
    files: ["index.js", "index.d.ts", "assets/*"],
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
