import fs from 'fs-extra';
import path from 'path';

const mockCombineReducers = jest.fn();
jest.mock('redux', () => ({ combineReducers: mockCombineReducers }));

require('./index');

describe('reducers', () => {
  describe('it combines all reducers from', () => {
    const fileNames = fs
      .readdirSync(__dirname)
      .filter(filename => !/(^index|\.test)\.js$/.test(filename));
    fileNames.forEach(fileName =>
      test(fileName, () => {
        expect(mockCombineReducers).toHaveBeenCalledTimes(1);
        expect(mockCombineReducers).toHaveBeenCalledWith(
          expect.objectContaining({
            [path.basename(fileName, '.js')]: expect.any(Function),
          }),
        );
      }),
    );
  });
});
