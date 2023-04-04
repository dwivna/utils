import { createLogger, format, transports } from "winston";

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

export const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    service: "utils",
  },
  transports: [new transports.Console({})],
});
