import { Link } from 'react-router-dom';

const AccountSidebar = () => {
  return (
    <div className="flex flex-col gap-6 lg:min-w-[200px]">
      <div className="flex flex-col gap-4">
        <h3 className="font-medium">Manage My Account</h3>
        <div className="flex flex-col gap-2 pl-8">
          <Link to="/account" className="text-red-500 text-sm">
            My Profile
          </Link>
          <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">
            Address Book
          </Link>
          <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">
            My Payment Options
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium">My Orders</h3>
        <div className="flex flex-col gap-2 pl-8">
          <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">
            My Returns
          </Link>
          <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">
            My Cancellations
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium">
          <Link to="/wishlist" className="hover:text-red-500 transition-colors">
            My WishList
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default AccountSidebar;
