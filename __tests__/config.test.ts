import { Config } from '../config';

describe('singleton config', () => {
  describe('loading', () => {
    let config: Config;

    afterEach(() => {
      jest.resetModules();
    });

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

    test.todo('fails gracefully when .env file cannot be loaded');
    //, () => {
    // loadConfigFromEnv('./.nonexistent-env');
    //});

    test('system can only load .env file one time', async () => {
      const module = await import('../config');
      module.loadConfig();

      await expect(module.loadConfig()).rejects.toThrow();
    });
  });

  describe('validation', () => {
    test.todo('contains all expected enviroment vars with expected types');
    //   () => {
    //     // expect(config.port).toEqual(3032);
    //   }
    // );
  });

  describe('creation', () => {
    test.todo('only one instance can be created');

    test.todo('contains only readonly enviroment variables');
  });
});
