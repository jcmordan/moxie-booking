import { createRequiredValidator, createCVVValidator } from "../validators";

describe("validators", () => {
  describe("createRequiredValidator", () => {
    it("returns correct validation rules for required field", () => {
      const validator = createRequiredValidator("Test Field");

      expect(validator).toEqual({
        required: "Test Field is required",
        validate: expect.any(Function),
      });
    });

    it("validates empty string as required", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("")).toBe(true);
    });

    it("validates null as required", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn(null as unknown)).toBe(true);
    });

    it("validates undefined as required", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn(undefined as unknown)).toBe(true);
    });

    it("validates whitespace-only string as invalid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("   ")).toBe(
        "Test Field cannot contain only whitespace"
      );
    });

    it("validates tab-only string as invalid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("\t\t\t")).toBe(
        "Test Field cannot contain only whitespace"
      );
    });

    it("validates newline-only string as invalid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("\n\n\n")).toBe(
        "Test Field cannot contain only whitespace"
      );
    });

    it("validates mixed whitespace string as invalid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn(" \t\n ")).toBe(
        "Test Field cannot contain only whitespace"
      );
    });

    it("validates string with content as valid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("Hello World")).toBe(true);
    });

    it("validates string with leading/trailing whitespace as valid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("  Hello World  ")).toBe(true);
    });

    it("validates single character as valid", () => {
      const validator = createRequiredValidator("Test Field");
      const validateFn = validator.validate;

      expect(validateFn("a")).toBe(true);
    });

    it("uses correct field name in error message", () => {
      const validator = createRequiredValidator("Email Address");
      const validateFn = validator.validate;

      expect(validateFn("   ")).toBe(
        "Email Address cannot contain only whitespace"
      );
    });

    it("uses correct field name in required message", () => {
      const validator = createRequiredValidator("Phone Number");

      expect(validator.required).toBe("Phone Number is required");
    });
  });

  describe("createCVVValidator", () => {
    it("returns correct validation rules for CVV field", () => {
      const validator = createCVVValidator("CVV");
      expect(validator).toHaveProperty("required");
      expect(validator).toHaveProperty("validate");
      expect(typeof validator.validate).toBe("function");
    });

    it("returns the correct required message", () => {
      const validator = createCVVValidator("CVV");
      expect(validator.required).toBe("CVV is required");
    });

    describe("validate function", () => {
      it("returns true for valid 3-digit CVV", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate("123")).toBe(true);
        expect(validate("000")).toBe(true);
        expect(validate("999")).toBe(true);
      });

      it("returns error message for empty CVV", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate("")).toBe("CVV is required");
        expect(validate(null)).toBe("CVV is required");
        expect(validate(undefined)).toBe("CVV is required");
      });

      it("returns error message for whitespace-only CVV", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate("   ")).toBe("CVV is required");
        expect(validate("\t\t\t")).toBe("CVV is required");
        expect(validate("\n\n\n")).toBe("CVV is required");
        expect(validate(" \t\n ")).toBe("CVV is required");
      });

      it("returns error message for CVV with wrong length", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate("12")).toBe("CVV must be exactly 3 digits");
        expect(validate("1234")).toBe("CVV must be exactly 3 digits");
        expect(validate("1")).toBe("CVV must be exactly 3 digits");
        expect(validate("12345")).toBe("CVV must be exactly 3 digits");
      });

      it("returns true for CVV with leading/trailing spaces (trimmed)", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate(" 123 ")).toBe(true);
        expect(validate("\t123\t")).toBe(true);
        expect(validate("\n123\n")).toBe(true);
      });

      it("returns true for numeric values that convert to 3 digits", () => {
        const validator = createCVVValidator("CVV");
        const validate = validator.validate as (
          value: string
        ) => string | boolean;
        expect(validate(123)).toBe(true);
        expect(validate(456)).toBe(true);
      });

       it("returns error for non-string values that do not convert to 3 digits", () => {
         const validator = createCVVValidator("CVV");
         const validate = validator.validate as (
           value: string
         ) => string | boolean;
         expect(validate(true)).toBe("CVV must contain only numbers");
         expect(validate(12)).toBe("CVV must be exactly 3 digits");
         expect(validate(1234)).toBe("CVV must be exactly 3 digits");
       });

       it("returns error for non-numeric characters", () => {
         const validator = createCVVValidator("CVV");
         const validate = validator.validate as (
           value: string
         ) => string | boolean;
         expect(validate("12a")).toBe("CVV must contain only numbers");
         expect(validate("abc")).toBe("CVV must contain only numbers");
         expect(validate("1-2")).toBe("CVV must contain only numbers");
         expect(validate("12!")).toBe("CVV must contain only numbers");
         expect(validate("a12")).toBe("CVV must contain only numbers");
       });
    });
  });
});
