import { useState } from 'react';
import { X } from 'lucide-react';

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState('Regular');
  const [selectedCard, setSelectedCard] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    { name: 'Regular', price: '$99.99/mo', description: 'Price for 1-50 unit', tag: 'Auto Pay' },
    { name: 'Platinum', price: '$129.99/mo', description: 'Price for 1-50 unit' },
    { name: 'Enterprize', price: '$199.99/mo', description: 'Price for 1-50 unit' },
  ];

  const cards = [
    'Alex Jones (Amex card) **** **** **** 9655',
    'Alex Jones (Amex card) **** **** **** 9656',
    'Alex Jones (Amex card) **** **** **** 9657',
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white">
        <div className="flex justify-between items-center px-4 pt-4 sm:px-6 sm:pt-6">
          <img src="https://i.ibb.co/chMdpQHR/image-4.png" alt="RentYard Logo" className="h-6 sm:h-8" />
          <button className="text-sm text-gray-600 hover:text-black">Save & Exit</button>
        </div>
        <hr className="border-gray-200 mt-4" />
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto relative">
        <h2 className="text-base sm:text-lg font-semibold mb-2">
          Choose a plan for after 30-days free trial
        </h2>

        {/* Toggle */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <button className="text-sm font-medium border px-3 py-1 rounded-full bg-blue-50 text-blue-600">Monthly</button>
          <button className="text-sm font-medium border px-3 py-1 rounded-full text-gray-600">Annually (save 57%)</button>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedPlan === plan.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">{plan.name}</h3>
                {plan.tag && selectedPlan === plan.name && (
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">{plan.tag}</span>
                )}
              </div>
              <div className="text-xl font-bold">{plan.price}</div>
              <div className="text-xs text-gray-500 mt-1">{plan.description}</div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="border rounded-md p-4 mb-24">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold">Payment option</h3>
            <button className="text-sm text-blue-600" onClick={() => setShowModal(true)}>Add new card</button>
          </div>
          <div className="space-y-3">
            {cards.map((card, index) => (
              <div key={index} className="flex justify-between items-center border rounded-md px-4 py-2">
                <span className="text-sm text-gray-800">{card}</span>
                <button
                  onClick={() => setSelectedCard(index)}
                  className={`px-4 py-1 text-sm font-medium rounded-md border ${
                    selectedCard === index ? 'bg-blue-600 text-white' : 'text-blue-600 border-blue-600'
                  }`}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-2">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-black" onClick={() => setShowModal(false)}>
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-sm font-semibold mb-4">Add new card</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600">Name on card</label>
                  <input type="text" defaultValue="Alex Jones" className="w-full border mt-1 px-2 py-1 rounded-md text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Card number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full border mt-1 px-2 py-1 rounded-md text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Expire date</label>
                  <input type="text" placeholder="MM/YY" className="w-full border mt-1 px-2 py-1 rounded-md text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-600">CVC</label>
                  <input type="text" placeholder="123" className="w-full border mt-1 px-2 py-1 rounded-md text-sm" />
                </div>
              </div>
              <div className="mt-6 text-right">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
        <button className="text-gray-700 px-4 py-2 border rounded-md mb-2 sm:mb-0">Back</button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">Total with card charge: <span className="font-semibold text-black">$970</span></span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">Pay & add property</button>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
