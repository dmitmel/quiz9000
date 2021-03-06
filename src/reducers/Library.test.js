import reducer from './Library';
import * as actions from '../actions/types';

describe('reducers/Library', () => {
  const initialState = {};

  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual(initialState);
  });

  it('ignores invalid actions', () => {
    // given:
    const action = { type: 'TOTALLY_USELESS_ACTION' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual(initialState);
  });

  describe('+ ADD_QUIZ', () => {
    it('adds quiz to the list', () => {
      // given:
      const state = {
        a: { id: 'a', foo: 'bar' },
        b: { id: 'b', bar: 'foo' },
      };
      const action = {
        type: actions.ADD_QUIZ,
        data: { id: 'c', some: 'thing' },
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        a: { id: 'a', foo: 'bar' },
        b: { id: 'b', bar: 'foo' },
        c: { id: 'c', some: 'thing' },
      });
    });

    it('does not do anything if quiz is already in the list', () => {
      // given:
      const state = {
        a: { id: 'a', foo: 'bar' },
        b: { id: 'b', bar: 'foo' },
        c: { id: 'c', some: 'thing' },
      };
      const action = {
        type: actions.ADD_QUIZ,
        data: { id: 'c', some: 'thing' },
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        a: { id: 'a', foo: 'bar' },
        b: { id: 'b', bar: 'foo' },
        c: { id: 'c', some: 'thing' },
      });
    });
  });

  describe('+ REMOVE_QUIZ', () => {
    it('removes quiz from the list', () => {
      // given:
      const state = {
        a: { foo: 'bar' },
        b: { bar: 'foo' },
        c: { some: 'thing' },
      };
      const action = {
        type: actions.REMOVE_QUIZ,
        id: 'c',
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        a: { foo: 'bar' },
        b: { bar: 'foo' },
      });
    });

    it('does not do anything if quiz is not in the list', () => {
      // given:
      const state = {
        a: { foo: 'bar' },
        b: { bar: 'foo' },
      };
      const action = {
        type: actions.REMOVE_QUIZ,
        id: 'c',
      };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({
        a: { foo: 'bar' },
        b: { bar: 'foo' },
      });
    });
  });
});
