import { useController, useFormContext, FieldPath, FieldValues } from 'react-hook-form';
import { createRequiredValidator } from '@/utils/validators';

interface FormTextAreaProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

const FormTextArea = <T extends FieldValues = FieldValues>({
  name,
  label,
  placeholder = 'Input text',
  required = false,
  rows = 3,
  className = ''
}: FormTextAreaProps<T>) => {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: required ? createRequiredValidator(label) : {}
  });

  return (
    <div className={className}>
      <label htmlFor={name} className="block font-semibold text-[#60606C] mb-1 text-sm leading-[22px] tracking-normal">
        {label}
      </label>
      <textarea
        {...field}
        id={name}
        rows={rows}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-[#888896] focus:ring-purple-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormTextArea;
