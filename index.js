const niv = require('npm-install-version');
const assert = require('assert');
niv.install('firebase@4.0.0');
niv.install('firebase@4.1.0');
niv.install('firebase@4.1.1');
niv.install('firebase@4.1.2');
niv.install('firebase@4.1.3');
niv.install('firebase@4.1.4');
niv.install('firebase@4.1.5');
niv.install('firebase@4.2.0');

describe('Firebase Version 4.0.0', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.0.0/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.0', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.0/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.1', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.1/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.2', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.2/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.3', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.3/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.4', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.4/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.1.5', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.1.5/database');
    assert.strictEqual(typeof database, 'function');
  });
});

describe('Firebase Version 4.2.0', () => {
  it('firebase/database exports a function', () => {
    const database = niv.require('firebase@4.2.0/database');
    assert.strictEqual(typeof database, 'function');
  });
});
