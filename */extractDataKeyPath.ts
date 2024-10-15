import { Config } from "./interfaces";
import dottpath from "dottpath";

function extractDataKeyPath(config: Config): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in config.keyPath) {
    result[key] = dottpath.extract(config.response, config.keyPath[key]);
  }

  return result;
}

export default extractDataKeyPath;
