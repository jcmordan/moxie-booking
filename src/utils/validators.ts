export const createRequiredValidator = (label: string) => {
  return {
    required: `${label} is required`,
    validate: (value: string) => {
      if (value && value.trim() === '') {
        return `${label} cannot contain only whitespace`;
      }
      return true;
    }
  };
};

export const createCVVValidator = (label: string) => {
  return {
    required: `${label} is required`,
    validate: (value: string | number | boolean | null | undefined) => {
      if (!value) {
        return `${label} is required`;
      }
      
      const stringValue = String(value).trim();
      if (stringValue === "") {
        return `${label} is required`;
      }
      
      // Check if value contains only digits
      if (!/^\d+$/.test(stringValue)) {
        return `${label} must contain only numbers`;
      }
      
      if (stringValue.length !== 3) {
        return `${label} must be exactly 3 digits`;
      }
      return true;
    },
  };
};
