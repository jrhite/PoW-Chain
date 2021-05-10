import config from '../config';

describe('singleton config', () => {
  test('contains all expected enviroment keys with expected types', () => {
    expect(config.PORT).toEqual(3032);
  });
});
