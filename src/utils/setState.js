/**
 * Works just like [`setState`](https://reactjs.org/docs/react-component.html#setstate),
 * but returns a promise.
 *
 * @param   {React.Component<P, S>}                                 self
 * @param   {Pick<S, K> | ((prevState: S, props: P) => Pick<S, K>)} state
 * @returns {Promise<void>}
 */
export default function setState(self, state) {
  return new Promise(resolve => self.setState(state, resolve));
}
