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
