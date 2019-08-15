const axios = require("axios");
const fs = require("fs");
const path = require("path");
var https = require('https');
var httpsAgent = new https.Agent({ keepAlive: true });

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function downloadError(error) {
    if (error.response) {
        return `HTTP-${error.response.status} (${error.response.statusText})`;
    }
    return error;
}

function downloadGrid(appids, targetDir="tmp", sleepDurationMs=3000) {
    console.info(`downloading ${appids.length} grid icons to ${targetDir}`);
    appids.forEach(async (appid) => {
        try {
            const imagePath = path.resolve(targetDir, `${appid}.jpg`);
            if (fs.existsSync(imagePath)) {
                console.info(`skipped app ${appid}, its grid icon already exists`);
                return;
            }
            const response = await axios.get(`https://steamcdn-a.akamaihd.net/steam/apps/${appid}/header.jpg`, { responseType: "arraybuffer", httpsAgent });
            fs.writeFileSync(imagePath, response.data);
            console.info(`downloaded grid icon for app ${appid}`);
            sleep(sleepDurationMs);
        } catch (error) {
            console.error(`unable to fetch grid icon for app ${appid}: ${downloadError(error)}`);
        }
    });
}

module.exports = {
    downloadGrid
};
