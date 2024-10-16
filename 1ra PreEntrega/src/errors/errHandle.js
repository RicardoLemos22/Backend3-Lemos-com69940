import { logger } from "../utils/logger.js";

export const errorHandle = (err, req, res, next) => {
  const status = err.status || 500;
  logger.error(`${err.path} ${err.message}`);
  const message = status === 500 ? "Internal server error" : err.message;
  res.status(status).json({ status: "Error", error: message });
};
