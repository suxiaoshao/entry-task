import {verityPassword, verityUsername} from '../../../src/pages/Login/verity';

describe('username verify', () => {
  it('username correct', () => {
    expect(verityUsername('abc')).toBeUndefined();
    expect(verityUsername('123abc_')).toBeUndefined();
    expect(verityUsername('123abc_123abc12')).toBeUndefined();
  });
  it('username to long', () => {
    expect(verityUsername('123abc_123abc1212')).toBe('username_error');
  });
  it('username to less', () => {
    expect(verityUsername('12')).toBe('username_error');
  });
  it('include wrong char', () => {
    expect(verityUsername('123abc_,')).toBe('username_error');
    expect(verityUsername('123abc_嗯')).toBe('username_error');
  });
});

describe('password verify', () => {
  it('password correct', () => {
    expect(verityPassword('abc')).toBeUndefined();
    expect(verityPassword('123abc')).toBeUndefined();
    expect(verityPassword('123abc7123abc12')).toBeUndefined();
  });
  it('password to long', () => {
    expect(verityPassword('123abc7123abc1212')).toBe('password_error');
  });
  it('password to less', () => {
    expect(verityPassword('12')).toBe('password_error');
  });
  it('include wrong char', () => {
    expect(verityPassword('123abc7,')).toBe('password_error');
    expect(verityPassword('123abc7嗯')).toBe('password_error');
    expect(verityPassword('123abc_,')).toBe('password_error');
  });
});
