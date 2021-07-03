import { DotenvConfigOptions } from 'dotenv';

import { Config } from '../config';

describe('singleton config', () => {
  describe('loading', () => {
    let config: Config;

    beforeEach(jest.resetModules);

    afterEach(async () => {
      if (!config) {
        return;
      }

      Object.keys(config).forEach((key) => {
        delete process.env[key];
      });
    });

    test('successfully loads default .env file', async () => {
      const PORT = 3032;

      const module = await import('../config');
      config = module.loadConfig();

      expect(config.PORT).toEqual(PORT);
      expect(process.env.PORT).toEqual('' + PORT);
    });

    test('successfully loads non-default .env file', async () => {
      const PORT = 5555;

      const module = await import('../config');
      const config = module.loadConfig('./__tests__/.test-env');

      expect(config.PORT).toEqual(PORT);
      expect(process.env.PORT).toEqual('' + PORT);
    });

    test('fails gracefully when .env file cannot be loaded', async () => {
      const module = await import('../config');

      expect(() => {
        module.loadConfig('./__tests__/.nonexistent-env');
      }).toThrow();
    });

    test('system can only load .env file one time', async () => {
      const module = await import('../config');
      module.loadConfig();

      expect(() => {
        module.loadConfig();
      }).toThrow();
    });

    test('config() cannot be called before loadConfig()', async () => {
      const module = await import('../config');

      expect(() => {
        module.config();
      }).toThrow();
    });
  });

  describe('accessing', () => {
    let module: {
      loadConfig: (options?: string | DotenvConfigOptions) => Config;
      config: () => Config;
    };

    let config: Config;

    beforeAll(jest.resetModules);

    beforeAll(async () => {
      module = await import('../config');
      config = module.loadConfig('./__tests__/.test-env');
    });

    test('loadConfig() and config() return the same config object', () => {
      const testConfig = module.config();

      expect(testConfig).toBe(config);
    });
  });
});
