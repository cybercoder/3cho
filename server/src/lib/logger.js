import pino from 'pino';
export default pino({
  prettyPrint: { colorize: true, timestampKey: 'time', translateTime: false, ignore: 'pid,hostname' }
});
