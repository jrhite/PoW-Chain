import * as dotenv from 'dotenv';
import * as envvar from 'env-var';

export interface Config {
  readonly PORT: number;
}

class SingletonConfig implements Config {
  PORT: number;

  constructor() {
    this.loadConfig();
    this.validateConfig();
  }

  private loadConfig(): void {
    dotenv.config();
  }

  private validateConfig(): void {
    this.PORT = envvar.get('PORT').required().asIntPositive();
  }
}

const config = new SingletonConfig();
export default config as Config;
