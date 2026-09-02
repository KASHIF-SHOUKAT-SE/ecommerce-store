import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck size={40} className="text-white" />,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: <Headphones size={40} className="text-white" />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: <ShieldCheck size={40} className="text-white" />,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  return (
    <section className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

