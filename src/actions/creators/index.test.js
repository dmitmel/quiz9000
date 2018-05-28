import fs from 'fs-extra';
import * as index from './index';

jest.mock('../../firebase/quizzes', () => {});

describe('actions/creators', () => {
  describe('it re-exports everything from', () => {
    fs
      .readdirSync(__dirname)
      .filter(filename => !/(^index|\.test)\.js$/.test(filename))
      .forEach(fileName =>
        test(fileName, () => {
          // eslint-disable-next-line import/no-dynamic-require
          const module = require(`./${fileName}`);
          expect(index).toMatchObject(module);
        }),
      );
  });
});
