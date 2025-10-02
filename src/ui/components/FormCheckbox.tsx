import { useController, useFormContext, FieldPath, FieldValues } from 'react-hook-form';

interface FormCheckboxProps<T extends FieldValues = FieldValues> {
  id?: string;
  name: FieldPath<T>;
  label: string;
  required?: boolean;
  className?: string;
  requiredMessage?: string;
}

const FormCheckbox = <T extends FieldValues = FieldValues>({
  id,
  name,
  label,
  required = false,
  className = '',
  requiredMessage
}: FormCheckboxProps<T>) => {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: { required: required ? `${requiredMessage ?? label} is required` : false }
  });

  return (
    <div className={className}>
      <div className="flex items-start space-x-3">
        <input
          {...field}
          type="checkbox"
          id={id || name}
          data-testid={id}
          className={`mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded ${
            error ? 'border-red-500' : ''
          }`}
        />
        <label htmlFor={id || name} className="text-normal font-normal text-[#60606C]">
          {label}
        </label>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormCheckbox;
