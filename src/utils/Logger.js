import log, {getLevel, setLevel} from 'loglevel';

const logDataEnabled = true;

function getTime() {
    const date = new Date();
    return `${date.toLocaleTimeString()}:${date.getMilliseconds().toString().padStart(3, '0')}`;
}

function getMessage(type, location, message) {
    const time = getTime();
    const logMessage = `${time} ${type} ${location}::${message}`;

    if (logDataEnabled) {
        if (!window.logData) {
            initLog();
        }

        window.logData.unshift({
            time,
            type,
            location,
            message
        });
    }

    return logMessage;
}

export function initLog() {
    window.logData = [];
}

export function getLog() {
    return window.logData;
}

export function getLoggingLevel() {
    return getLevel();
}

export function setLoggingLevel(level) {
    setLevel(level);
}

export function logError(location, message) {
    log.error(getMessage('Error', location, message));
}

export function logWarning(location, message) {
    /// if (getLoggingLevel() <= LoggingLevel.WARN) {
    log.warn(getMessage('Warning', location, message));
    /// }
}

export function logInfo(location, message) {
    /// if (getLoggingLevel() <= LoggingLevel.INFO) {
    log.info(getMessage('Info', location, message));
    /// }
}

export function logDebug(location, message) {
    /// if (getLoggingLevel() <= LoggingLevel.DEBUG) {
    log.debug(getMessage('Debug', location, message));
    /// }
}

export function logTrace(location, message) {
    /// if (getLoggingLevel() <= LoggingLevel.TRACE) {
    log.trace(getMessage('Trace', location, message));
    /// }
}
