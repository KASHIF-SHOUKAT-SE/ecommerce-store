import { useFormContext } from 'react-hook-form';
import Input from '../common/Input';

const BillingForm = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-6 w-full lg:max-w-md">
      <Input 
        label="First Name" 
        required 
        type="text" 
        {...register('firstName', { required: 'First name is required' })}
        error={errors.firstName?.message as string}
      />
      <Input 
        label="Company Name" 
        type="text" 
        {...register('companyName')}
      />
      <Input 
        label="Street Address" 
        required 
        type="text" 
        {...register('streetAddress', { required: 'Street address is required' })}
        error={errors.streetAddress?.message as string}
      />
      <Input 
        label="Apartment, floor, etc. (optional)" 
        type="text" 
        {...register('apartment')}
      />
      <Input 
        label="Town/City" 
        required 
        type="text" 
        {...register('city', { required: 'City is required' })}
        error={errors.city?.message as string}
      />
      <Input 
        label="Phone Number" 
        required 
        type="tel" 
        {...register('phone', { required: 'Phone number is required' })}
        error={errors.phone?.message as string}
      />
      <Input 
        label="Email Address" 
        required 
        type="email" 
        {...register('email', { 
          required: 'Email address is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
        })}
        error={errors.email?.message as string}
      />

      <div className="flex items-center gap-3 mt-4">
        <div className="relative flex items-center justify-center w-5 h-5">
          <input 
            type="checkbox" 
            id="save-info" 
            className="peer appearance-none w-5 h-5 border border-red-500 rounded-sm checked:bg-red-500 checked:border-red-500 cursor-pointer transition-colors"
            {...register('saveInfo')}
          />
          <svg 
            className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <label htmlFor="save-info" className="text-sm cursor-pointer select-none">
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
};

export default BillingForm;
