const { detectSteamDir } = require("./SteamDirDetector");
const { downloadGrid } = require("./SteamGridDownloader");
const { parseFile } = require("./ValveKeyValueFileParser");

const steamDir = "/mnt/e/Steam";

const { configDir, gridDir, configFile } = detectSteamDir(steamDir);
console.info(`found steam config directory at ${configDir}`);
const config = parseFile(configFile);
const appids = Object.keys(config.UserLocalConfigStore.Software.valve.Steam.apps);
console.log(`found ${appids.length} apps`);
downloadGrid(appids, gridDir, 3000);
