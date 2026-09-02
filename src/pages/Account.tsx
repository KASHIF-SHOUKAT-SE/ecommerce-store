import AccountSidebar from '../features/account/components/AccountSidebar';
import ProfileForm from '../features/account/components/ProfileForm';

const Account = () => {
  return (
    <div className="container-custom py-10 lg:py-20">
      {/* Header Row: Breadcrumb & Welcome Text */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        {/* Breadcrumb */}
        <div className="text-sm">
          <span className="text-gray-500">Home</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-black font-medium">My Account</span>
        </div>

        {/* Welcome Text */}
        <div className="text-sm">
          Welcome! <span className="text-red-500">Md Rimel</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Sidebar */}
        <div className="lg:w-[250px] flex-shrink-0">
          <AccountSidebar />
        </div>

        {/* Form Content */}
        <div className="flex-1 w-full">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Account;
