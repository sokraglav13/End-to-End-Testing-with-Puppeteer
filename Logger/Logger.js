const winston = require("winston");
const { combine, timestamp, printf } = require("winston").format;
const path = require("path");

const myFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

class Logger {
    constructor(testName = 'default') {
        if (!Logger.instance) {
            const logFile = path.join(__dirname, `LogFile/${testName}-logs.log`);

            this._logger = winston.createLogger({
                format: combine(
                    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    winston.format.errors({ stack: true }),
                    myFormat
                ),
                transports: [
                    new winston.transports.Console({
                        format: combine(
                            winston.format.colorize(),
                            myFormat
                        )
                    }),
                    new winston.transports.File({ filename: logFile }),
                ]
            });

            Logger.instance = this;
        }

        return Logger.instance;
    }

    startLoggin(testName) {
        this._logger.info(`------------------- TEST EXECUTION STARTED FOR ${testName} -------------------`);
    }

    endLoggin(testName) {
        this._logger.info(`------------------- TEST EXECUTION FINISHED FOR ${testName} ------------------`);
    }

    info(text) {
        this._logger.info(text);
    }

    error(text) {
        this._logger.error(text);
    }
}

const singletonLogger = (testName) => new Logger(testName);

Object.freeze(singletonLogger);

module.exports = singletonLogger;
