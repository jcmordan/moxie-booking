import { createRequiredValidator } from '../validators';

describe('validators', () => {
  describe('createRequiredValidator', () => {
    it('returns correct validation rules for required field', () => {
      const validator = createRequiredValidator('Test Field');
      
      expect(validator).toEqual({
        required: 'Test Field is required',
        validate: expect.any(Function)
      });
    });

    it('validates empty string as required', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('')).toBe(true);
    });

    it('validates null as required', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn(null as any)).toBe(true);
    });

    it('validates undefined as required', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn(undefined as any)).toBe(true);
    });

    it('validates whitespace-only string as invalid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('   ')).toBe('Test Field cannot contain only whitespace');
    });

    it('validates tab-only string as invalid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('\t\t\t')).toBe('Test Field cannot contain only whitespace');
    });

    it('validates newline-only string as invalid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('\n\n\n')).toBe('Test Field cannot contain only whitespace');
    });

    it('validates mixed whitespace string as invalid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn(' \t\n ')).toBe('Test Field cannot contain only whitespace');
    });

    it('validates string with content as valid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('Hello World')).toBe(true);
    });

    it('validates string with leading/trailing whitespace as valid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('  Hello World  ')).toBe(true);
    });

    it('validates single character as valid', () => {
      const validator = createRequiredValidator('Test Field');
      const validateFn = validator.validate;
      
      expect(validateFn('a')).toBe(true);
    });

    it('uses correct field name in error message', () => {
      const validator = createRequiredValidator('Email Address');
      const validateFn = validator.validate;
      
      expect(validateFn('   ')).toBe('Email Address cannot contain only whitespace');
    });

    it('uses correct field name in required message', () => {
      const validator = createRequiredValidator('Phone Number');
      
      expect(validator.required).toBe('Phone Number is required');
    });
  });
});
