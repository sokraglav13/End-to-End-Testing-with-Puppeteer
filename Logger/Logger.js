const winston = require("winston")
const { combine, timestamp, printf } = require("winston").format

const myFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

class Logger {
    #_logger;
    constructor() {
        this.#_logger = winston.createLogger(
            {
                format: combine(
                    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    winston.format.errors({ stack: true }),
                    myFormat
                ),
                transports: [
                    new winston.transports.Console({
                        format: combine(
                            winston.format.colorize(),
                            myFormat)
                    }),
                    new winston.transports.File({ filename: `Logger/LogFile/commandsLogs.log` }),
                ]
            });
    }

    startLoggin(testName) {
        this.#_logger.info(`------------------- TEST EXECUTION STARTED FOR ${testName} -------------------`);
    }

    endLoggin(testName) {
        this.#_logger.info(`------------------- TEST EXECUTION FINISHED FOR ${testName} ------------------`);
    }

    info(text) {
        this.#_logger.info(text);
    }

    error(text) {
        this.#_logger.error(text);
    }
}

module.exports = Logger