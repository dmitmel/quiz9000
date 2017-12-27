import React from 'react';
import { shallow, render } from 'enzyme';

import Router from './Router';

// =============================================================================
// Helpers
// =============================================================================

let currentPath = '';

function setPath(newPath) {
  window.location.hash = `#${newPath}`;
  // JSDOM doesn't dispatch 'hashchange' event, so it must be dispatched manually
  // https://github.com/tmpvar/jsdom/issues/433
  window.dispatchEvent(new HashChangeEvent('hashchange'));

  currentPath = newPath;
}

// =============================================================================
// Tests
// =============================================================================

describe('A router', () => {
  it('renders without crashing', () => {
    render(<Router routes={[]} />);
  });

  beforeEach(() =>
    // make sure path changes from the previous test don't break behavior of the
    // next one
    setPath('')
  );

  // `window.location.hash`
  // ===========================================================================
  it('should initialize with `window.location.hash`', () => {
    // given:
    setPath('/path');
    const router = shallow(<Router routes={[]} />);
    // then:
    expect(router.state('path')).toEqual(currentPath);
  });

  it('should update path when `window.location.hash` changes', () => {
    // given:
    const router = shallow(<Router routes={[]} />);
    // when:
    setPath('/path');
    // then:
    expect(router.state('path')).toEqual(currentPath);
  });

  // Routes
  // ===========================================================================
  it('should not render anything after init if route does not have render function', () => {
    // given:
    setPath('/route');
    const routes = [
      {
        path: /^\/route$/
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // then:
    expect(router.isEmptyRender()).toBeTruthy();
  });

  it('should not render anything if route does not have render function', () => {
    // given:
    const routes = [
      {
        path: /^\/route$/
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // when:
    setPath('/route');
    router.update();
    // then:
    expect(router.isEmptyRender()).toBeTruthy();
  });

  it('should render matching route after init', () => {
    // given:
    setPath('/route');
    const route = <h1>/route</h1>;
    const routes = [
      {
        path: /^\/route$/,
        render: () => route
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // then:
    expect(router.equals(route)).toBeTruthy();
  });

  it('should render matching route', () => {
    // given:
    const route = <h1>/route</h1>;
    const routes = [
      {
        path: /^\/route$/,
        render: () => route
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // when:
    setPath('/route');
    router.update();
    // then:
    expect(router.equals(route)).toBeTruthy();
  });

  it('should not render anything after init if there are no matching routes', () => {
    // given:
    setPath('/route/not-matching');
    const routes = [
      {
        path: /^\/route$/,
        render: () => <h1>/route</h1>
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // then:
    expect(router.isEmptyRender()).toBeTruthy();
  });

  it('should not render anything if there are no matching routes', () => {
    // given:
    const routes = [
      {
        path: /^\/route$/,
        render: () => <h1>/route</h1>
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // when:
    setPath('/route/not-matching/other');
    router.update();
    // then:
    expect(router.isEmptyRender()).toBeTruthy();
  });

  // Redirects
  // ===========================================================================
  it('should handle redirects after init', () => {
    // given:
    setPath('/route/1');
    const route = <h1>/route/2</h1>;
    const routes = [
      {
        path: /^\/route\/1$/,
        redirect: '/route/2'
      },
      {
        path: /^\/route\/2$/,
        render: () => route
      }
    ];
    const router = shallow(<Router routes={routes} />);

    router.instance()._onHashChange();
    router.update();
    // then:
    expect(router.equals(route)).toBeTruthy();
  });

  it('should handle redirects', () => {
    // given:
    const route = <h1>/route/2</h1>;
    const routes = [
      {
        path: /^\/route\/1$/,
        redirect: '/route/2'
      },
      {
        path: /^\/route\/2$/,
        render: () => route
      }
    ];
    const router = shallow(<Router routes={routes} />);
    // when:
    setPath('/route/1');
    router.instance()._onHashChange();
    router.update();
    // then:
    expect(router.equals(route)).toBeTruthy();
  });
});
