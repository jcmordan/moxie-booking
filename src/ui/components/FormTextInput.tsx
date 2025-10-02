import { useController, useFormContext, FieldPath, FieldValues } from 'react-hook-form';

interface FormTextInputProps<T extends FieldValues = FieldValues> {
    id?: string;
    name: FieldPath<T>;
    label: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const FormTextInput = <T extends FieldValues = FieldValues>({
    id,
    name,
    label,
    type = 'text',
    placeholder = 'Input text',
    required = false,
    className = ''
}: FormTextInputProps<T>) => {
    
    const { control } = useFormContext<T>();
    const {
        field,
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: { required: required ? `${label} is required` : false }
    });

    return (
        <div className={className}>
            <label htmlFor={name} className="block font-semibold text-[#60606C] mb-1 text-sm leading-[22px] tracking-normal">
                {label}
            </label>
            <input
                id={id}
                data-testid={id}
                {...field}
                type={type}
                className={`w-full px-3 py-2 border rounded-lg text-[#888896] focus:outline-none focus:ring-2 focus:ring-purple-500 ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
                placeholder={placeholder}
            />
            {error && (
                <p className="text-red-500 text-xs mt-1">{error.message}</p>
            )}
        </div>
    );
};

export default FormTextInput;
