const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const isCI = process.env.CI === 'true';
let recorder;

const recorderConfigs = {
    followNewTab: true,
    fps: 30,
    videoFrame: {
        width: 1530,
        height: 900,
    },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
    videoBitrate: 1000,
    autopad: {
        color: 'black' | '#35A5FF',
    },
    aspectRatio: '16:9',
};

const startRecording = async function (page, testName, logger) {
    if (!isCI) {
        try {
            recorder = new PuppeteerScreenRecorder(page, recorderConfigs);
            await recorder.start(`./TestExecutionVideos/${testName}.mp4`);
            logger.info("Recording Video has started");
        }
        catch (er) {
            logger.error(er);
            throw new Error(er);
        }
    }
};
const stopRecording = async function (logger) {
    if (!isCI) {
        try {
            await recorder.stop();
            logger.info("Recording Video has stopped");
        }
        catch (er) {
            logger.error(er);
            throw new Error(er);
        }
    }
};

module.exports = { startRecording, stopRecording };