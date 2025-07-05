import { useState } from 'react';

const CondoInfoForm = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showLeasingModal, setShowLeasingModal] = useState(false);
  const [showChargesModal, setShowChargesModal] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);
  const [showAgreementModal, setShowAgreementModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
const [showPetFeesModal, setShowPetFeesModal] = useState(false);
const [showParkingModal, setShowParkingModal] = useState(false);
 const [showEducationModal, setShowEducationModal] = useState(false);
 const [showStationModal, setShowStationModal] = useState(false);
 const [showLankModal, setShowLandModal] = useState(false);
 const [showUtilityProviderModal, setShowUtilityProviderModal] = useState(false);

  const fieldsLeft = [
    { label: 'Property address', required: true, onClick: () => setShowAddressModal(true) },
    { label: 'Leasing info', required: true, onClick: () => setShowLeasingModal(true) },
    { label: 'Charges', required: true, onClick: () => setShowChargesModal(true) },
    { label: 'Rent frequency & payment reminder', required: true,onClick: () => setShowRentModal(true) },
    { label: 'Application agreement', onClick: () => setShowAgreementModal(true) },
    { label: 'About the property',onClick: () => setShowAboutModal(true) },
    { label: "Community's amenity/features", hint: 'Optional but recommended', onClick: () => setShowAmenitiesModal(true)  },
  ];
    
  const fieldsRight = [
     { label: 'Pet fees', hint: 'Optional, add fees if you allow pet', onClick: () => setShowPetFeesModal(true) },
    { label: 'Parking' , onClick: () => setShowParkingModal(true)},
    { label: 'Nearest educational institution', hint: 'Optional but recommended', onClick: () => setShowEducationModal(true) },
    { label: 'Nearest stations', hint: 'Optional but recommended', onClick: () => setShowStationModal(true) },
    { label: 'Nearest landmark', hint: 'Optional but recommended', onClick: () => setShowLandModal(true)  },
    { label: 'Utilities provider', hint: 'Optional but recommended', onClick: () => setShowUtilityProviderModal(true)  },
  ];

  return (
    <div className="mb-5 overflow-hidden">
        <div className="bg-white">
        <div className="flex justify-between items-center px-6 pt-6">
          <img
            src="https://i.ibb.co/chMdpQHR/image-4.png"
            alt="RentYard Logo"
            className="h-8"
          />
          <button className="text-sm text-gray-600 hover:text-black">Save & Exit</button>
        </div>
        <hr className="border-gray-200 mt-4" />
      </div>
     

     <div className="max-w-6xl mx-auto p-4">

       <div className="flex justify-between items-center mb-6   bg-white ">
        <h2 className="text-xl font-semibold mt-5 ">Condominiums information</h2>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          {fieldsLeft.map((field, idx) => (
            <div
              key={idx}
              onClick={field.onClick}
              className="flex justify-between items-center border border-gray-200 rounded-lg px-5 py-4 bg-white hover:shadow-sm cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {field.label}
                  {field.required && <span className="text-red-500"> (Required)</span>}
                </p>
                {field.hint && <p className="text-xs text-gray-500">{field.hint}</p>}
              </div>
              <button className="text-blue-600 font-medium text-sm">+ Add</button>
            </div>
          ))}
        </div>

        <div className="space-y-4">
         {fieldsRight.map((field, idx) => (
  <div
    key={idx}
    onClick={field.onClick}
    className="flex justify-between items-center border border-gray-200 rounded-lg px-5 py-4 bg-white hover:shadow-sm cursor-pointer"
  >
    <div>
      <p className="text-sm font-medium text-gray-800">
        {field.label}
        {field.required && <span className="text-red-500"> (Required)</span>}
      </p>
      {field.hint && <p className="text-xs text-gray-500">{field.hint}</p>}
    </div>
    <button className="text-blue-600 font-medium text-sm">+ Add</button>
  </div>
))}

        </div>
      </div>

      {/* Property Gallery */}
      <div className="border rounded-lg p-6 mb-6 bg-white">
        <h3 className="font-medium text-gray-800 mb-4 text-sm">
          Property gallery <span className="text-xs text-gray-500">(Its not unit photo)*</span>
        </h3>

        <div className="flex flex-wrap items-start mb-6">
          <div className="mr-3">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Featured photos<span className="text-red-500">*</span>
            </p>
            <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer hover:border-blue-500">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className="text-xs text-center text-gray-400">Upload cover photo</p>
              <p className="text-[10px] text-gray-400">(1MB per photo)</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              More photos <span className="text-gray-400">(optional)</span>
            </p>
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-lg text-gray-400 cursor-pointer hover:border-blue-500"
                >
                  +
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <label className="block text-sm font-medium text-gray-700 mb-2">Videos <span className="text-gray-400">(optional)</span></label>
        <div className="relative">
          <select className="w-full border rounded-md px-4 py-2 text-sm">
            <option value="">Select video source</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <span className="text-gray-400 text-sm">▾</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="text-sm text-gray-600">Back</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm hover:bg-blue-700">Get Start</button>
      </div>

      {/* Property Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Property address</h3>
              <button onClick={() => setShowAddressModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Property name as identifier*" />
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Total apartment unit*" />
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Property website (optional)" />
              <select className="border rounded px-3 py-2 text-sm">
                <option>Country/Region*</option>
              </select>
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Street address*" />
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Apt, suite, unit (if applicable)" />
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="City/Town*" />
              <select className="border rounded px-3 py-2 text-sm">
                <option>State/Territory*</option>
              </select>
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Zip code*" />
            </div>
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Leasing Info Modal */}
      {showLeasingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Leasing info</h3>
              <button onClick={() => setShowLeasingModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" className="border rounded px-3 py-2 text-sm" placeholder="Leasing manager name*" defaultValue="Alex johan" />
              <div className="flex">
                <div className="flex items-center border rounded-l px-3 py-2 text-sm bg-gray-50">
                  <img src="https://flagcdn.com/w40/bd.png" alt="BD" className="w-4 h-4 mr-1" /> +880
                </div>
                <input type="text" className="border-t border-b border-r rounded-r px-3 py-2 text-sm w-full" placeholder="Leasing manager Phone number*" />
              </div>
              <input type="email" className="border rounded px-3 py-2 text-sm col-span-1 md:col-span-2" placeholder="Leasing manager email*" defaultValue="leasing@rentyard.com" />
              <label className="flex items-center space-x-2 text-sm mt-2">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
                <span>Address (same as property)</span>
              </label>
            </div>
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}


      {/* Charges Modal */}
      {showChargesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Charges</h3>
              <button onClick={() => setShowChargesModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" className="border rounded px-3 py-2 text-sm w-full" placeholder="Application fee (one-time)*" defaultValue="100" />
                <select className="mt-2 border rounded px-3 py-2 text-sm w-full">
                  <option>All 18+ applicant</option>
                </select>
              </div>
              <input type="text" className="border rounded px-3 py-2 text-sm w-full" placeholder="Admin fee (one-time)*" defaultValue="15" />
            </div>
            <p className="mt-3 text-xs text-gray-500">ⓘ Type 0 if charges not applicable</p>
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}

      {showRentModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">Rent frequency & payment reminder</h3>
        <button onClick={() => setShowRentModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="border rounded px-3 py-2 text-sm">
          <option>Monthly</option>
          <option>Biweekly</option>
          <option>Weekly</option>
        </select>
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm"
          placeholder="Rent Reminder/Statement date*"
        />
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm"
          placeholder="Rent due date*"
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">* Dates will repeat monthly unless changed</p>
      <div className="text-right mt-6">
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
      </div>
    </div>
  </div>
)}

 {/* Application Agreement Modal */}
      {showAgreementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Application agreement (optional)</h3>
              <button onClick={() => setShowAgreementModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-md px-4 py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-blue-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Upload agreement</span>
                </div>
                <p className="text-xs text-gray-400">(PDF only)</p>
              </div>
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
                <span>Accept immigrant & international student application</span>
              </label>
            </div>
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}

       {/* About the Property Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">About the property (optional)</h3>
              <button onClick={() => setShowAboutModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <textarea
              className="w-full h-40 border rounded px-3 py-2 text-sm resize-none"
              placeholder="Type message here"
            />
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}


  {/* Community Amenities Modal */}
      {showAmenitiesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Communitys amenity/features</h3>
              <button onClick={() => setShowAmenitiesModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div>
              <input type="text" placeholder="Search amenities" className="w-full border rounded-md px-3 py-2 mb-4 text-sm" />
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Air conditioning', 'Cable ready', 'Ceiling fan', 'High ceilings', 'Private balcony', 'Refrigerator',
                  'Wooded views', 'W/D hookup', 'Hardwood Floor (home)', 'Hardwood Floor (home)', 'Fireplace (home)', 'First aid kit',
                  'Carbon monoxide alarm', 'Expanded patios (home)', 'Free parking on premises', 'Fire extinguisher'
                ].map((amenity, idx) => (
                  <button
                    key={idx}
                    className="border rounded-full px-3 py-1 text-sm bg-gray-50 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-center"
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}


  {/* Pet Fees Modal */}
     {showPetFeesModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">Pet fees</h3>
        <button onClick={() => setShowPetFeesModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Pet type */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Pet type<span className="text-red-500">*</span></label>
          <select className="border rounded px-3 py-2 text-sm w-full">
            <option>Select</option>
          </select>
        </div>

        {/* Max weight */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Max weight(LB)<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full"
            placeholder="Max weight(LB)*"
            defaultValue="100"
          />
        </div>

        {/* One-time pet fee */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">One time pet fee<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full"
            placeholder="$100"
            defaultValue="$100"
          />
        </div>

        {/* Pet Security Deposit */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Pet Security Deposit<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full"
            placeholder="$100"
            defaultValue="$100"
          />
        </div>

        {/* Monthly Pet Rent */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Monthly pet rent<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full"
            placeholder="$100"
            defaultValue="$100"
          />
        </div>
      </div>

      <div className="text-right">
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
      </div>
    </div>
  </div>
)}


{/* parking  */}

{showParkingModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">Parking</h3>
        <button onClick={() => setShowParkingModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
      </div>

      {/* Form Body */}
      <div className="space-y-4">
        {/* Dropdown */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Guest vehicle parking time</label>
          <select className="w-full border rounded px-3 py-2 text-sm">
            <option>2H</option>
            <option>4H</option>
            <option>8H</option>
            <option>24H</option>
          </select>
        </div>

        {/* Textarea with char count */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 block mb-1">Write parking overview</label>
          <textarea
            rows="4"
            className="w-full border rounded px-3 py-2 text-sm resize-none"
            placeholder="Write parking overview"
            maxLength={200}
          ></textarea>
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">200</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-right mt-6">
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
      </div>
    </div>
  </div>
)}

  {/* Add nearest educational institution Modal */}
      {showEducationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Add nearest educational institution</h3>
              <button onClick={() => setShowEducationModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Educational Institution type*</label>
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>High school</option>
                  <option>Primary school</option>
                  <option>College</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Distance from property*</label>
                <input type="text" className="w-full border rounded px-3 py-2 text-sm" defaultValue="1.5" />
              </div>
              <div className="col-span-1 flex items-end">
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>Mile</option>
                  <option>Kilometer</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Educational institution name*</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Enter name"
              />
            </div>

            <div className="text-right">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}


      {/* station  */}
      {showStationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Add Nearest stations</h3>
              <button onClick={() => setShowStationModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nearest stations type*</label>
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>High school</option>
                  <option>Primary school</option>
                  <option>College</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Distance from property*</label>
                <input type="text" className="w-full border rounded px-3 py-2 text-sm" defaultValue="1.5" />
              </div>
              <div className="col-span-1 flex items-end">
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>Mile</option>
                  <option>Kilometer</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nearest stations name*</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Enter name"
              />
            </div>

            <div className="text-right">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}

      {/* land mark  */}
      {showLankModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Add Landmark</h3>
              <button onClick={() => setShowLandModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Landmark type*</label>
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>High school</option>
                  <option>Primary school</option>
                  <option>College</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Distance from property*</label>
                <input type="text" className="w-full border rounded px-3 py-2 text-sm" defaultValue="1.5" />
              </div>
              <div className="col-span-1 flex items-end">
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>Mile</option>
                  <option>Kilometer</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Landmark name*</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Enter name"
              />
            </div>

            <div className="text-right">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}


 {/* Utilities Provider Modal */}
      {showUtilityProviderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Utilities provider</h3>
              <button onClick={() => setShowUtilityProviderModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Utility type<span className="text-red-500">*</span></label>
                <select className="border rounded px-3 py-2 text-sm w-full">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Provider company name<span className="text-red-500">*</span></label>
                <input type="text" className="border rounded px-3 py-2 text-sm w-full" placeholder="Enter name" />
              </div>
            </div>
            <div className="text-right">
              <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}

     </div>

    </div>
  );
};

export default CondoInfoForm;