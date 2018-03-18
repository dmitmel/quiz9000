describe('db/firebase', () => {
  beforeEach(() => jest.resetModules());

  function mockWithFirebaseApp(mockFirebaseApp) {
    jest.doMock('@firebase/app', () => mockFirebaseApp);
    jest.doMock('@firebase/database', () => ({}));
    return require('./firebase');
  }

  it('initializes app correctly', () => {
    // given:
    const mockInitializeApp = jest.fn();
    // when:
    mockWithFirebaseApp({
      initializeApp: mockInitializeApp,
      database: () => {}
    });
    // then:
    expect(mockInitializeApp).toHaveBeenCalledTimes(1);
    expect(mockInitializeApp).toHaveBeenCalledWith({
      databaseURL: expect.any(String)
    });
  });

  it('exports Firebase app', () => {
    // given:
    const fakeFirebaseApp = {
      initializeApp: () => {},
      database: () => {}
    };
    // when:
    const app = mockWithFirebaseApp(fakeFirebaseApp);
    // then:
    expect(app.default).toBe(fakeFirebaseApp);
  });

  it('exports Firebase database', () => {
    // given:
    const fakeFirebaseDatabase = { foo: 'bar' };
    // when:
    const { database } = mockWithFirebaseApp({
      initializeApp: () => {},
      database: () => fakeFirebaseDatabase
    });
    // then:
    expect(database).toBe(fakeFirebaseDatabase);
  });
});
