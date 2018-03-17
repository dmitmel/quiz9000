const promiseResolve = () => Promise.resolve();
const promiseReject = () => Promise.reject();

describe('actions/fetchedQuizzes', () => {
  describe('+ fetchQuiz()', () => {
    beforeEach(() => jest.resetModules());

    function mockWithFindQuizBy(mockFindQuizBy) {
      jest.doMock('../db/quizzes', () => ({ findQuizBy: mockFindQuizBy }));
      return require('./fetchedQuizzes');
    }

    it('returns a function that returns a promise', () => {
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
      const { fetchQuiz, FETCH_QUIZ } = mockWithFindQuizBy(promiseReject);
      const id = 0;
      const mockDispatch = jest.fn();
      // when:
      return fetchQuiz(id)(mockDispatch).then(() => {
        const [action] = mockDispatch.mock.calls[0];
        expect(action.type).toBe(FETCH_QUIZ);
        expect(action.id).toBe(id);
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
        const quiz = 'foo';
        const { fetchQuiz, FETCH_QUIZ_OK } = mockWithFindQuizBy(() =>
          Promise.resolve(quiz)
        );
        const id = 0;
        const mockDispatch = jest.fn();
        // when:
        return fetchQuiz(id)(mockDispatch).then(() => {
          // then:
          const [action] = mockDispatch.mock.calls[1];
          expect(action.type).toBe(FETCH_QUIZ_OK);
          expect(action.id).toBe(id);
          expect(action.quiz).toBe(quiz);
        });
      });
    });

    describe('> when fetchQuiz throws an error', () => {
      it('dispatches an error action', () => {
        // given:
        const { fetchQuiz, FETCH_QUIZ_ERROR } = mockWithFindQuizBy(
          promiseReject
        );
        const id = 0;
        const mockDispatch = jest.fn();
        // when:
        return fetchQuiz(id)(mockDispatch).then(() => {
          // then:
          const [action] = mockDispatch.mock.calls[1];
          expect(action.type).toBe(FETCH_QUIZ_ERROR);
          expect(action.id).toBe(id);
        });
      });
    });
  });
});
