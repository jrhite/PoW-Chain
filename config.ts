import * as dotenv from 'dotenv';
import * as envvar from 'env-var';

export interface Config {
  readonly PORT: number;
}

class SingletonConfig implements Config {
  PORT: number;

  constructor(options?: dotenv.DotenvConfigOptions) {
    this.loadConfig(options);
    this.validateConfig();
  }

  private loadConfig(options?: dotenv.DotenvConfigOptions): void {
    const configOutput = dotenv.config(options);

    if (configOutput.error) {
      throw configOutput.error;
    }
  }

  private validateConfig(): void {
    this.PORT = envvar.get('PORT').required().asIntPositive();
  }
}

let config: SingletonConfig;

export function loadConfig(
  options?: string | dotenv.DotenvConfigOptions
): Config {
  if (config) {
    throw 'config may only be loaded once';
  }

  if (typeof options === 'string') {
    options = { path: options };
  }

  config = new SingletonConfig(options);

  return config;
}
