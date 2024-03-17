import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';
import { shallow } from 'enzyme';

describe('getFullYear function', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  })
});

describe('getFooterCopy function', () => {
  it('returns an HTML footer', () => {
    const footerCopyIsTrue = 'Holberton School';
    const footerCopyIsFalse = 'Holberton School main dashboard';
    expect(getFooterCopy(true)).toBe(footerCopyIsTrue);
    expect(getFooterCopy(false)).toBe(footerCopyIsFalse);
  })
});

describe('getLatestNotification function', () => {
  it('returns the latest notification', () => {
    const latestNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(latestNotification);
  })
});
