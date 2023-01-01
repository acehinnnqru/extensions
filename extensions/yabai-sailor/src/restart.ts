import { showHUD, Clipboard } from "@raycast/api";
import { exec, execSync } from "child_process";

export default async function main() {
    execSync("/opt/homebrew/bin/brew services restart yabai");
    showHUD("yabai restarted");
}
