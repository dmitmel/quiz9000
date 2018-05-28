describe('firebase', () => {
  beforeEach(() => jest.resetModules());

  function mockWithFirebaseApp(mockFirebaseApp) {
    jest.doMock('firebase/app', () => mockFirebaseApp);
    jest.doMock('firebase/auth', () => ({}));
    jest.doMock('firebase/database', () => ({}));
    return require('./');
  }

  it('initializes app correctly', () => {
    // given:
    const mockInitializeApp = jest.fn();
    // when:
    mockWithFirebaseApp({
      initializeApp: mockInitializeApp,
      auth: () => {},
      database: () => {},
    });
    // then:
    expect(mockInitializeApp).toHaveBeenCalledTimes(1);
    expect(mockInitializeApp).toHaveBeenCalledWith({
      apiKey: expect.any(String),
      authDomain: expect.any(String),
      databaseURL: expect.any(String),
    });
  });

  it('exports Firebase app', () => {
    // given:
    const fakeFirebaseApp = {
      initializeApp: () => {},
      auth: () => {},
      database: () => {},
    };
    // when:
    const app = mockWithFirebaseApp(fakeFirebaseApp);
    // then:
    expect(app.default).toBe(fakeFirebaseApp);
  });

  it('exports Firebase auth', () => {
    // given:
    const fakeFirebaseAuth = { foo: 'bar' };
    // when:
    const { auth } = mockWithFirebaseApp({
      initializeApp: () => {},
      auth: () => fakeFirebaseAuth,
      database: () => {},
    });
    // then:
    expect(auth).toBe(fakeFirebaseAuth);
  });

  it('exports Firebase database', () => {
    // given:
    const fakeFirebaseDatabase = { foo: 'bar' };
    // when:
    const { database } = mockWithFirebaseApp({
      initializeApp: () => {},
      auth: () => {},
      database: () => fakeFirebaseDatabase,
    });
    // then:
    expect(database).toBe(fakeFirebaseDatabase);
  });
});
