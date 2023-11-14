// Components
import { Input } from '@components/Input/Input';

// Helpers
import { isEmpty } from '@helpers/utils';

const FormControl = ({
  label = '',
  value,
  variant = 'default',
  placeholder = '',
  onChange,
  errorMessage = '',
}: {
  label: string;
  value: string;
  variant?: 'default' | 'secondary' | 'error' | null | undefined;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}) => {
  return (
    <>
      <label
        htmlFor={value}
        className='block mb-2 text-sm font-medium text-neutral-400'
      >
        {label}
      </label>
      <Input
        type='text'
        id={value}
        className='py-3'
        placeholder={placeholder}
        variant={!isEmpty(variant) ? variant : 'default'}
        onChange={onChange}
        value={value}
      />
      {!isEmpty(errorMessage) && <p className='text-sm text-red-500'>{errorMessage}</p>}
    </>
  );
};

export default FormControl;
