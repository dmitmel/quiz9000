describe('db/firebase', () => {
  beforeEach(() => jest.resetModules());

  function mockWithFirebaseApp(firebaseApp) {
    jest.doMock('@firebase/app', () => firebaseApp);
    jest.doMock('@firebase/database', () => ({}));
    return require('./firebase');
  }

  it('initializes app correctly', () => {
    // given:
    const initializeApp = jest.fn();
    // when:
    mockWithFirebaseApp({ initializeApp, database: () => {} });
    // then:
    expect(initializeApp).toHaveBeenCalledTimes(1);
    expect(initializeApp).toHaveBeenCalledWith({
      databaseURL: expect.any(String)
    });
  });
});
