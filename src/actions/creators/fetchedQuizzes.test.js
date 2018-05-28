import { FETCH_QUIZ } from '../types';
import FetchStatus from '../../utils/FetchStatus';

const promiseResolve = () => Promise.resolve();
const promiseReject = () => Promise.reject();

describe('actions/creators/fetchedQuizzes', () => {
  describe('+ fetchQuiz()', () => {
    beforeEach(() => jest.resetModules());

    function mockWithFindQuizBy(mockFindQuizBy) {
      jest.doMock('../../firebase/quizzes', () => ({
        findQuizBy: mockFindQuizBy,
      }));
      return require('./fetchedQuizzes');
    }

    it('returns a thunk', () => {
      // given:
      const { fetchQuiz } = mockWithFindQuizBy(promiseResolve);
      const mockDispatch = () => {};
      // when:
      const func = fetchQuiz();
      const promise = func(mockDispatch);
      // then:
      expect(typeof func).toBe('function');
      expect(typeof promise.then).toBe('function');
    });

    describe('returned thunk', () => {
      it('calls findQuizBy', () => {
        // given:
        const mockFindQuizBy = jest.fn(promiseResolve);
        const { fetchQuiz } = mockWithFindQuizBy(mockFindQuizBy);

        const id = 0;
        const mockDispatch = () => {};
        // when:
        return fetchQuiz(id)(mockDispatch).then(() => {
          // then:
          expect(mockFindQuizBy).toHaveBeenCalledTimes(1);
          expect(mockFindQuizBy).toHaveBeenCalledWith('id', id);
        });
      });

      it('dispatches default action', () => {
        // given:
        const { fetchQuiz } = mockWithFindQuizBy(promiseReject);
        const id = 0;
        const mockDispatch = jest.fn();
        // when:
        return fetchQuiz(id)(mockDispatch).then(() => {
          const [action] = mockDispatch.mock.calls[0];
          expect(action).toEqual({
            type: FETCH_QUIZ,
            status: FetchStatus.LOADING,
            id,
          });
        });
      });

      describe('> when fetchQuiz returns quizzes list', () => {
        it('returns quizzes list', () => {
          const quiz = 'foo';
          const { fetchQuiz } = mockWithFindQuizBy(() => Promise.resolve(quiz));
          const mockDispatch = () => {};
          // when:
          return fetchQuiz()(mockDispatch).then(result => {
            // then:
            expect(result).toBe(quiz);
          });
        });

        it('dispatches a success action', () => {
          // given:
          const data = 'foo';
          const { fetchQuiz } = mockWithFindQuizBy(() => Promise.resolve(data));
          const id = 0;
          const mockDispatch = jest.fn();
          // when:
          return fetchQuiz(id)(mockDispatch).then(() => {
            // then:
            const [action] = mockDispatch.mock.calls[1];
            expect(action).toEqual({
              type: FETCH_QUIZ,
              status: FetchStatus.SUCCESS,
              id,
              data,
            });
          });
        });
      });

      describe('> when fetchQuiz throws an error', () => {
        it('dispatches an error action', () => {
          // given:
          const { fetchQuiz } = mockWithFindQuizBy(promiseReject);
          const id = 0;
          const mockDispatch = jest.fn();
          // when:
          return fetchQuiz(id)(mockDispatch).then(() => {
            // then:
            const [action] = mockDispatch.mock.calls[1];
            expect(action).toEqual({
              type: FETCH_QUIZ,
              status: FetchStatus.ERROR,
              id,
            });
          });
        });
      });
    });
  });
});
