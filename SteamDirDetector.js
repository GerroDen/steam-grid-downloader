const path = require("path");
const fs = require("fs");

function detectSteamDir(steamDir) {
    const userdataBaseDir = path.resolve(steamDir, "userdata");
    const dirs = fs.readdirSync(userdataBaseDir);
    const userdataDir = dirs[0];
    const configDir = path.resolve(steamDir, "userdata", userdataDir, "config");
    const gridDir = path.resolve(configDir, "grid");
    const configFile = path.resolve(configDir, "localconfig.vdf");
    return {
        configDir,
        gridDir,
        configFile
    };
}

module.exports = {
    detectSteamDir
}
