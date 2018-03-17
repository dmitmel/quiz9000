const promiseResolve = () => Promise.resolve();
const promiseReject = () => Promise.reject();

describe('actions/Explore', () => {
  describe('+ fetchQuizzes()', () => {
    beforeEach(() => jest.resetModules());

    function mockWithFetchQuizzes(mockFetchQuizzes) {
      jest.doMock('../db/quizzes', () => ({ fetchQuizzes: mockFetchQuizzes }));
      return require('./Explore');
    }

    it('returns a function which returns a promise', () => {
      // given:
      const { fetchQuizzes } = mockWithFetchQuizzes(promiseResolve);
      const mockDispatch = () => {};
      // when:
      const result1 = fetchQuizzes();
      const result2 = result1(mockDispatch);
      // then:
      expect(typeof result1).toBe('function');
      expect(typeof result2.then).toBe('function');
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
        expect(action.type).toBe(FETCH_QUIZZES);
        expect(action.limit).toBe(limit);
        expect(action.offset).toBe(offset);
      });
    });

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

    describe('> when fetchQuizzes returns a quizzes list', () => {
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
          expect(action.type).toBe(FETCH_QUIZZES_OK);
          expect(action.offset).toBe(offset);
          expect(action.limit).toBe(limit);
          expect(action.quizzes).toBe(quizzes);
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
          expect(action.type).toBe(FETCH_QUIZZES_ERROR);
          expect(action.offset).toBe(offset);
          expect(action.limit).toBe(limit);
        });
      });
    });
  });
});