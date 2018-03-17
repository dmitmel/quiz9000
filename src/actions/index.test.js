import fs from 'fs-extra';
import * as index from './index';

jest.mock('../db/quizzes', () => {});

describe('actions', () => {
  describe('it re-exports everything from', () => {
    fs
      .readdirSync(__dirname)
      .filter(filename => !/(^index|\.test)\.js$/.test(filename))
      .forEach(filename =>
        test(filename, () => {
          // eslint-disable-next-line import/no-dynamic-require
          const module = require(`./${filename}`);
          expect(index).toMatchObject(module);
        })
      );
  });
});
