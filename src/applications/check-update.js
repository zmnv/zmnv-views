const { get } = require('https');
const path = require('path');

const { version } = require(path.resolve(__dirname, '../../package.json'));
const cs = require('../js-helpers/zmnv-colorizer');

const updateMessageCommand = `${cs('Run', 93)} ${cs('npm i -g zmnv-views', 92, 1)} ${cs('to update!', 93)}`;

const updateMessage = (newVersion, currentVersion) => `
  ${cs('New version is available!', 93)} ${cs(currentVersion, 91)} → ${cs(newVersion, 92)}
  ${cs('┌────────────────────────────────────┐', 93)}
  ${cs('│', 93)} ${updateMessageCommand} ${cs('│', 93)}
  ${cs('└────────────────────────────────────┘', 93)}
`;

const CheckUpdates = function () {
    get('https://raw.githubusercontent.com/zmnv/zmnv-views/master/package.json', response => {
        // const total = response.headers["content-length"];

        response.on('data', chunk => {
            const res = JSON.parse(chunk.toString());
            const isVersionsEqual = res.version === version;

            if(!isVersionsEqual) console.log(updateMessage(res.version, version));
        });

        response.on('error', () => {});

    }).on('error', () => {});
};

module.exports = CheckUpdates;