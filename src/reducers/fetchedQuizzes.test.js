import reducer from './fetchedQuizzes';
import * as actions from '../actions/types';
import FetchStatus from '../utils/FetchStatus';

describe('reducers/fetchedQuizzes', () => {
  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual({});
  });

  describe('+ FETCH_QUIZ', () => {
    it('adds quiz status to the list', () => {
      // given:
      const state = {
        a: { status: FetchStatus.LOADING },
        b: { status: FetchStatus.ERROR }
      };
      const status = 'myCustomStatus';
      const action = {
        type: actions.FETCH_QUIZ,
        status,
        id: 'c'
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        ...state,
        c: { status }
      });
    });

    it('overwrites existing quizzes', () => {
      // given:
      const state = {
        a: { status: FetchStatus.LOADING },
        b: { status: FetchStatus.ERROR },
        c: { status: FetchStatus.SUCCESS, data: { foo: 'bar' } }
      };
      const action = {
        type: actions.FETCH_QUIZ,
        status: FetchStatus.LOADING,
        id: 'c'
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        ...state,
        c: { status: FetchStatus.LOADING }
      });
    });

    describe('> when the action status is successful', () => {
      it('adds quiz data to the list', () => {
        // given:
        const state = {
          a: { status: FetchStatus.LOADING },
          b: { status: FetchStatus.ERROR }
        };
        const data = { foo: 'bar' };
        const action = {
          type: actions.FETCH_QUIZ,
          status: FetchStatus.SUCCESS,
          id: 'c',
          data
        };
        // when:
        const nextState = reducer(state, action);
        // then:
        expect(nextState).toEqual({
          ...state,
          c: { status: FetchStatus.SUCCESS, data }
        });
      });
    });
  });

  describe('+ FETCH_QUIZZES', () => {
    describe('> when the action status is not successful', () => {
      it('does not do anything', () => {
        // given:
        const state = {
          a: { status: FetchStatus.LOADING },
          b: { status: FetchStatus.ERROR },
          c: { status: FetchStatus.SUCCESS, data: { foo: 'bar' } }
        };
        const action = {
          type: actions.FETCH_QUIZZES,
          status: FetchStatus.LOADING
        };
        // when:
        const nextState = reducer(state, action);
        // then:
        expect(nextState).toEqual(state);
      });
    });

    describe('> when the action status is successful', () => {
      it('adds each quiz to the list', () => {
        // given:
        const state = {
          a: { status: FetchStatus.LOADING },
          b: { status: FetchStatus.ERROR },
          c: { status: FetchStatus.SUCCESS, data: { foo: 'bar' } }
        };
        const quizzes = [
          { id: 'foobar', foo: 'bar' },
          { id: 'something', some: 'thing' },
          { id: 'hello_there', hello: 'there' }
        ];
        const action = {
          type: actions.FETCH_QUIZZES,
          status: FetchStatus.SUCCESS,
          quizzes
        };
        // when:
        const nextState = reducer(state, action);
        // then:
        expect(nextState).toEqual({
          ...state,
          foobar: { status: FetchStatus.SUCCESS, data: quizzes[0] },
          something: { status: FetchStatus.SUCCESS, data: quizzes[1] },
          hello_there: { status: FetchStatus.SUCCESS, data: quizzes[2] }
        });
      });
    });
  });
});
