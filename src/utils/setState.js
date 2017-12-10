export default function setState(self, state) {
  return new Promise(resolve => self.setState(state, resolve));
}
