import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BillingForm from '../component/checkout/BillingForm';
import OrderSummary from '../component/checkout/OrderSummary';
import PaymentMethod from '../component/checkout/PaymentMethod';

type CheckoutFormData = {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phone: string;
  email: string;
  saveInfo?: boolean;
  paymentMethod: 'bank' | 'cod';
};

const Checkout = () => {
  const navigate = useNavigate();
  const methods = useForm<CheckoutFormData>({
    defaultValues: {
      paymentMethod: 'cod',
    }
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Order Details:', data);
    if (data.paymentMethod === 'bank') {
      navigate('/account');
    } else {
      alert('Order placed successfully via Cash on Delivery!');
    }
  };

  return (
    <div className="container-custom py-10 lg:py-20">
      {/* Breadcrumb */}
      <div className="text-sm mb-12">
        <span className="text-gray-500">Account</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">My Account</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">Product</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">View Cart</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-black font-medium">CheckOut</span>
      </div>

      <h1 className="text-3xl font-medium mb-10">Billing Details</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Billing Form */}
          <div className="flex-1">
            <BillingForm />
          </div>

          {/* Right Column - Order Summary & Payment */}
          <div className="flex-1 lg:max-w-[450px]">
            <OrderSummary />
            <PaymentMethod />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Checkout;
