// loop through all the files in the website assets directory and subdirectories, convert all .mmd files to .svg files

import fs from "node:fs";
import path from "node:path";
import * as child_process from "child_process";
import cliProgress from "cli-progress";

const assetsPath = path.join(process.cwd(), "src", "assets");

const checkFiles = [];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else {
      if (file.endsWith(".mmd")) {
        checkFiles.push(filePath);
      }
    }
  }
}

walk(assetsPath);

const progressBar = new cliProgress.SingleBar({
  format: "Converting | {bar} | {percentage}% | {value}/{total} | {file}",
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  hideCursor: true,
}, cliProgress.Presets.rect.barCompleteChar);

progressBar.start(checkFiles.length, 0, { file: "..." });
let index = 0;
for (const file of checkFiles) {
  const basePath = path.parse(file).dir;
  const fileName = path.parse(file).name;
  const output = path.join(basePath, `${fileName}`);

  child_process.execSync(`npm run mmdc -- -i ${file} -o ${output}-dark.svg -b transparent -t dark`, { cwd: process.cwd() });
  child_process.execSync(`npm run mmdc -- -i ${file} -o ${output}-light.svg -b transparent`, { cwd: process.cwd() });

  index++;
  progressBar.update(index, { file: file });
}

progressBar.stop();

console.log("🎉 All done!");