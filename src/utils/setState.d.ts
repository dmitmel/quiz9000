import { Component } from 'react';

export default function setState<P, S, K extends keyof S>(
  self: Component<P, S>,
  state: Pick<S, K> | ((prevState: S, props: P) => Pick<S, K>)
): Promise<void>;
