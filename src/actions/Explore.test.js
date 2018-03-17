const promiseResolve = () => Promise.resolve();
const promiseReject = () => Promise.reject();

describe('actions/Explore', () => {
  describe('+ fetchQuizzes()', () => {
    beforeEach(() => jest.resetModules());

    function mockWithFetchQuizzes(mockFetchQuizzes) {
      jest.doMock('../db/quizzes', () => ({ fetchQuizzes: mockFetchQuizzes }));
      return require('./Explore');
    }

    it('returns a thunk', () => {
      // given:
      const { fetchQuizzes } = mockWithFetchQuizzes(promiseResolve);
      const mockDispatch = () => {};
      // when:
      const func = fetchQuizzes();
      const promise = func(mockDispatch);
      // then:
      expect(typeof func).toBe('function');
      expect(typeof promise.then).toBe('function');
    });

    describe('returned thunk', () => {
      it('calls fetchQuizzes', () => {
        // given:
        const mockFetchQuizzes = jest.fn(promiseResolve);
        const { fetchQuizzes } = mockWithFetchQuizzes(mockFetchQuizzes);

        const offset = 0;
        const limit = 3;
        const mockDispatch = () => {};
        // when:
        return fetchQuizzes(offset, limit)(mockDispatch).then(() => {
          // then:
          expect(mockFetchQuizzes).toHaveBeenCalledTimes(1);
          expect(mockFetchQuizzes).toHaveBeenCalledWith(offset, limit);
        });
      });

      it('dispatches default action', () => {
        // given:
        const { fetchQuizzes, FETCH_QUIZZES } = mockWithFetchQuizzes(
          promiseReject
        );
        const offset = 0;
        const limit = 3;
        const mockDispatch = jest.fn();
        // when:
        return fetchQuizzes(offset, limit)(mockDispatch).then(() => {
          const [action] = mockDispatch.mock.calls[0];
          expect(action).toEqual({
            type: FETCH_QUIZZES,
            limit,
            offset
          });
        });
      });

      describe('> when fetchQuizzes returns a quizzes list', () => {
        it('returns a quizzes list', () => {
          const quizzes = ['foo', 'bar'];
          const { fetchQuizzes } = mockWithFetchQuizzes(() =>
            Promise.resolve(quizzes)
          );
          const mockDispatch = () => {};
          // when:
          return fetchQuizzes()(mockDispatch).then(result => {
            // then:
            expect(result).toBe(quizzes);
          });
        });

        it('dispatches a success action', () => {
          // given:
          const quizzes = ['foo', 'bar'];
          const { fetchQuizzes, FETCH_QUIZZES_OK } = mockWithFetchQuizzes(() =>
            Promise.resolve(quizzes)
          );
          const offset = 0;
          const limit = 3;
          const mockDispatch = jest.fn();
          // when:
          return fetchQuizzes(offset, limit)(mockDispatch).then(() => {
            // then:
            const [action] = mockDispatch.mock.calls[1];
            expect(action).toEqual({
              type: FETCH_QUIZZES_OK,
              limit,
              offset,
              quizzes
            });
          });
        });
      });

      describe('> when fetchQuizzes throws an error', () => {
        it('dispatches an error action', () => {
          // given:
          const { fetchQuizzes, FETCH_QUIZZES_ERROR } = mockWithFetchQuizzes(
            promiseReject
          );
          const offset = 0;
          const limit = 3;
          const mockDispatch = jest.fn();
          // when:
          return fetchQuizzes(offset, limit)(mockDispatch).then(() => {
            // then:
            const [action] = mockDispatch.mock.calls[1];
            expect(action).toEqual({
              type: FETCH_QUIZZES_ERROR,
              limit,
              offset
            });
          });
        });
      });
    });
  });
});
