import { useForm } from 'react-hook-form';
import Input from '../../../component/common/Input';
import Button from '../../../component/common/Button';

type ProfileFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

const ProfileForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel1111@gmail.com',
      address: 'Kingston, 5236, United State'
    }
  });

  const handleSave = (data: ProfileFormData) => {
    console.log(data);
    alert('Profile saved successfully!');
  };

  const newPassword = watch('newPassword');

  return (
    <div className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded p-8 lg:p-12 w-full max-w-4xl">
      <h2 className="text-xl font-medium text-red-500 mb-8">Edit Your Profile</h2>

      <form onSubmit={handleSubmit(handleSave)} className="flex flex-col gap-6">
        {/* Personal Details Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Input 
              label="First Name" 
              {...register('firstName', { required: 'First name is required' })} 
              error={errors.firstName?.message}
            />
          </div>
          <div className="flex-1">
            <Input 
              label="Last Name" 
              {...register('lastName', { required: 'Last name is required' })} 
              error={errors.lastName?.message}
            />
          </div>
        </div>

        {/* Contact Details Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Input 
              label="Email" 
              type="email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })} 
              error={errors.email?.message}
            />
          </div>
          <div className="flex-1">
            <Input 
              label="Address" 
              {...register('address', { required: 'Address is required' })} 
              error={errors.address?.message}
            />
          </div>
        </div>

        {/* Password Changes */}
        <div className="mt-4 flex flex-col gap-4">
          <h3 className="text-sm font-medium">Password Changes</h3>
          <Input 
            label="" 
            type="password" 
            placeholder="Current Password" 
            className="w-full"
            {...register('currentPassword')} 
          />
          <Input 
            label="" 
            type="password" 
            placeholder="New Password" 
            className="w-full"
            {...register('newPassword')} 
          />
          <Input 
            label="" 
            type="password" 
            placeholder="Confirm New Password" 
            className="w-full"
            {...register('confirmPassword', {
              validate: value => !newPassword || value === newPassword || 'Passwords do not match'
            })} 
            error={errors.confirmPassword?.message}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-8 mt-6">
          <button type="button" className="text-sm font-medium hover:text-red-500 transition-colors">
            Cancel
          </button>
          <Button variant="primary" type="submit" className="px-8 py-3 rounded text-sm font-medium">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
