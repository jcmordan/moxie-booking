import { formatCardNumber, formatExpiryDate } from '../formatters';

describe('formatters', () => {
  describe('formatCardNumber', () => {
    it('formats card number with spaces every 4 digits', () => {
      expect(formatCardNumber('1234567890123456')).toBe('1234 5678 9012 3456');
    });

    it('formats partial card number', () => {
      expect(formatCardNumber('1234567890')).toBe('1234 5678 90');
    });

    it('formats single digit', () => {
      expect(formatCardNumber('1')).toBe('1');
    });

    it('formats two digits', () => {
      expect(formatCardNumber('12')).toBe('12');
    });

    it('formats three digits', () => {
      expect(formatCardNumber('123')).toBe('123');
    });

    it('formats four digits', () => {
      expect(formatCardNumber('1234')).toBe('1234');
    });

    it('formats five digits', () => {
      expect(formatCardNumber('12345')).toBe('1234 5');
    });

    it('formats eight digits', () => {
      expect(formatCardNumber('12345678')).toBe('1234 5678');
    });

    it('formats twelve digits', () => {
      expect(formatCardNumber('123456789012')).toBe('1234 5678 9012');
    });

    it('formats sixteen digits', () => {
      expect(formatCardNumber('1234567890123456')).toBe('1234 5678 9012 3456');
    });

    it('removes existing spaces', () => {
      expect(formatCardNumber('1234 5678 9012 3456')).toBe('1234 5678 9012 3456');
    });

    it('removes non-numeric characters', () => {
      expect(formatCardNumber('1234-5678-9012-3456')).toBe('1234 5678 9012 3456');
    });

    it('removes letters', () => {
      expect(formatCardNumber('1234abcd5678efgh9012')).toBe('1234 5678 9012');
    });

    it('handles mixed characters', () => {
      expect(formatCardNumber('1234-5678 abc 9012!@#3456')).toBe('1234 5678 9012 3456');
    });

    it('handles empty string', () => {
      expect(formatCardNumber('')).toBe('');
    });

    it('handles string with only non-numeric characters', () => {
      expect(formatCardNumber('abc-def-ghi')).toBe('');
    });

    it('handles string with only spaces', () => {
      expect(formatCardNumber('   ')).toBe('');
    });

    it('handles string with only special characters', () => {
      expect(formatCardNumber('!@#$%^&*()')).toBe('');
    });

    it('limits to 16 digits maximum', () => {
      expect(formatCardNumber('12345678901234567890')).toBe('1234 5678 9012 3456');
    });

    it('handles very long string', () => {
      expect(formatCardNumber('123456789012345678901234567890')).toBe('1234 5678 9012 3456');
    });
  });

  describe('formatExpiryDate', () => {
    it('formats two digits as MM/', () => {
      expect(formatExpiryDate('12')).toBe('12/');
    });

    it('formats three digits as MM/Y', () => {
      expect(formatExpiryDate('123')).toBe('12/3');
    });

    it('formats four digits as MM/YY', () => {
      expect(formatExpiryDate('1234')).toBe('12/34');
    });

    it('formats single digit', () => {
      expect(formatExpiryDate('1')).toBe('1');
    });

    it('formats empty string', () => {
      expect(formatExpiryDate('')).toBe('');
    });

    it('removes non-numeric characters', () => {
      expect(formatExpiryDate('12-34')).toBe('12/34');
    });

    it('removes letters', () => {
      expect(formatExpiryDate('12ab34')).toBe('12/34');
    });

    it('handles mixed characters', () => {
      expect(formatExpiryDate('12!@#34$%^')).toBe('12/34');
    });

    it('handles string with only non-numeric characters', () => {
      expect(formatExpiryDate('abc-def')).toBe('');
    });

    it('handles string with only spaces', () => {
      expect(formatExpiryDate('   ')).toBe('');
    });

    it('handles string with only special characters', () => {
      expect(formatExpiryDate('!@#$%^&*()')).toBe('');
    });

    it('limits to 4 digits maximum', () => {
      expect(formatExpiryDate('12345')).toBe('12/34');
    });

    it('handles very long string', () => {
      expect(formatExpiryDate('1234567890')).toBe('12/34');
    });

    it('handles zero-padded months', () => {
      expect(formatExpiryDate('0123')).toBe('01/23');
    });

    it('handles zero-padded years', () => {
      expect(formatExpiryDate('1201')).toBe('12/01');
    });

    it('handles all zeros', () => {
      expect(formatExpiryDate('0000')).toBe('00/00');
    });

    it('handles single zero', () => {
      expect(formatExpiryDate('0')).toBe('0');
    });

    it('handles two zeros', () => {
      expect(formatExpiryDate('00')).toBe('00/');
    });

    it('handles three zeros', () => {
      expect(formatExpiryDate('000')).toBe('00/0');
    });
  });

  describe("CVV input transformation", () => {
    const cvvTransform = (value: string) =>
      value.replace(/\D/g, "").slice(0, 3);

    it("filters non-numeric characters and limits to 3 digits", () => {
      expect(cvvTransform("12a3!@#")).toBe("123");
      expect(cvvTransform("abc")).toBe("");
      expect(cvvTransform("1-2-3")).toBe("123");
    });

    it("limits input to maximum 3 digits", () => {
      expect(cvvTransform("123456789")).toBe("123");
      expect(cvvTransform("1234")).toBe("123");
      expect(cvvTransform("123")).toBe("123");
      expect(cvvTransform("12")).toBe("12");
      expect(cvvTransform("1")).toBe("1");
    });

    it("handles empty and whitespace input", () => {
      expect(cvvTransform("")).toBe("");
      expect(cvvTransform("   ")).toBe("");
      expect(cvvTransform("\t\t\t")).toBe("");
    });
  });
});
