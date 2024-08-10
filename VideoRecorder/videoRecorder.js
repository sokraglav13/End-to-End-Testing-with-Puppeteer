const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const Logger = require("../Logger/Logger");
let recorder, logger;

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

const startRecording = async function (page, videoName) {
    logger = new Logger()
    recorder = new PuppeteerScreenRecorder(page, recorderConfigs)
    await recorder.start(`./TestExecutionVideos/${videoName}.mp4`)
    logger.info("Recording Video has started")
}
const stopRecording = async function () {
    await recorder.stop()
    logger.info("Recording Video has stopped")
}


module.exports = { startRecording, stopRecording }