import { useState } from 'react';
import { FaHome, FaBuilding, FaCity, FaUserTie, FaUserCheck, FaBriefcase } from 'react-icons/fa';
const PropertySelection = () => {
  const [propertyType, setPropertyType] = useState(null);
  const [role, setRole] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [ownershipDoc, setOwnershipDoc] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState('');
  const [realtorDocs, setRealtorDocs] = useState({ additional: null, agreement: null });
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    identifier: '',
    jobTitle: '',
    country: '',
    street: '',
    apt: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    agreement: null,
  });

  const propertyTypes = [
    { id: 'single', title: 'Single House Property', desc: 'Single unit house for single family', icon: FaHome, },
    { id: 'apartments', title: 'Apartments complex', desc: 'Multiple unit house for families',icon: FaBuilding, },
    { id: 'condos', title: 'Condominiums', desc: 'Multiple unit house for families', icon: FaCity, },
  ];

  const roles = [
    { id: 'landlord', title: 'Landlord', desc: 'Owner of the property', icon: FaUserTie, },
    { id: 'realtor', title: 'Realtor', desc: 'Manage property on behalf on owner',icon: FaUserCheck, },
    { id: 'company', title: 'Property management company', desc: 'For management company', icon: FaBriefcase, },
  ];

  const isLandlordReady =
    propertyType === 'condos' && role === 'landlord' && ownershipDoc && acceptedTerms;

  const isRealtorReady =
    propertyType === 'condos' &&
    role === 'realtor' &&
    licenseNumber &&
    realtorDocs.additional &&
    realtorDocs.agreement &&
    acceptedTerms;

  const isCompanyReady =
    propertyType === 'condos' &&
    role === 'company' &&
    companyInfo.name &&
    companyInfo.identifier &&
    companyInfo.jobTitle &&
    companyInfo.country &&
    companyInfo.street &&
    companyInfo.email &&
    companyInfo.city &&
    companyInfo.state &&
    companyInfo.zip &&
    companyInfo.phone &&
    companyInfo.agreement &&
    acceptedTerms;

  const isInitial = !role;

  const handleOwnershipFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setOwnershipDoc(file);
    } else {
      setOwnershipDoc(null);
      alert('Only PDF files are allowed');
    }
  };

  const handleRealtorFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setRealtorDocs((prev) => ({ ...prev, [key]: file }));
    } else {
      alert('Only PDF files are allowed');
    }
  };

  const handleCompanyInfoChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'agreement') {
      const file = files[0];
      if (file && file.type === 'application/pdf') {
        setCompanyInfo((prev) => ({ ...prev, agreement: file }));
      } else {
        alert('Only PDF files are allowed');
      }
    } else {
      setCompanyInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="">
      {/* Header */}
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

      <div className="space-y-8 max-w-6xl mx-auto mt-10 p-4">
        {/* Property Type Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Property type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propertyTypes.map((type) => (
              <div
                key={type.id}
                className={`border rounded-lg p-4 cursor-pointer transition flex gap-3 hover:shadow-sm ${
                  propertyType === type.id ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                }`}
                onClick={() => setPropertyType(type.id)}
              >
                <type.icon className="text-black w-6 h-6 mt-1" />
                <div>
                     <h3 className="font-medium text-gray-900 mb-1">{type.title}</h3>
                <p className="text-sm text-gray-500">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Select your role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((r) => (
              <div
                key={r.id}
                className={`border rounded-lg p-4 cursor-pointer transition flex gap-3 hover:shadow-sm ${
                  role === r.id ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                }`}
                onClick={() => setRole(r.id)}
              >
                 <r.icon className="text-black w-6 h-6 mt-1" />
                <div>
                    <h3 className="font-medium text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Landlord Section */}
        {role === 'landlord' && propertyType === 'condos' && (
          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="text-md font-medium text-gray-800 mb-4">Proof of ownership</h3>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ownership doc*</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleOwnershipFileChange}
              className="w-full p-2 border border-dashed border-gray-300 rounded-md bg-white text-gray-600"
            />
          </div>
        )}

        {/* Realtor Section */}
        {role === 'realtor' && propertyType === 'condos' && (
          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="text-md font-medium text-gray-800 mb-4">Realtor verification</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">License number*</label>
              <input
                type="text"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="000000000000"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional documents for realtor
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleRealtorFileChange(e, 'additional')}
                  className="w-full p-2 border border-dashed border-gray-300 rounded-md bg-white text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Agreement with landlord*</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleRealtorFileChange(e, 'agreement')}
                  className="w-full p-2 border border-dashed border-gray-300 rounded-md bg-white text-gray-600"
                />
              </div>
            </div>
          </div>
        )}

        {/* Company & Office Info */}
        {role === 'company' && propertyType === 'condos' && (
          <div className="border rounded-lg p-6 bg-gray-50 space-y-4">
            <h3 className="text-md font-medium text-gray-800">Company & office info</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input name="name" value={companyInfo.name} onChange={handleCompanyInfoChange} placeholder="Company name*" className="border p-2 rounded-md" />
              <input name="identifier" value={companyInfo.identifier} onChange={handleCompanyInfoChange} placeholder="Company Identifier (EIN/TIN)*" className="border p-2 rounded-md" />
              <input name="jobTitle" value={companyInfo.jobTitle} onChange={handleCompanyInfoChange} placeholder="Your job title*" className="border p-2 rounded-md" />
              <input name="country" value={companyInfo.country} onChange={handleCompanyInfoChange} placeholder="Country/Region*" className="border p-2 rounded-md" />
              <input name="street" value={companyInfo.street} onChange={handleCompanyInfoChange} placeholder="Street address*" className="border p-2 rounded-md" />
              <input name="apt" value={companyInfo.apt} onChange={handleCompanyInfoChange} placeholder="Apt, suite, unit (optional)" className="border p-2 rounded-md" />
              <input name="email" value={companyInfo.email} onChange={handleCompanyInfoChange} placeholder="Contact email*" className="border p-2 rounded-md" />
              <input name="city" value={companyInfo.city} onChange={handleCompanyInfoChange} placeholder="City/Town*" className="border p-2 rounded-md" />
              <input name="state" value={companyInfo.state} onChange={handleCompanyInfoChange} placeholder="State/Territory*" className="border p-2 rounded-md" />
              <input name="zip" value={companyInfo.zip} onChange={handleCompanyInfoChange} placeholder="Zip code*" className="border p-2 rounded-md" />
              <input name="phone" value={companyInfo.phone} onChange={handleCompanyInfoChange} placeholder="Phone number*" className="border p-2 rounded-md" />
              <input type="file" name="agreement" onChange={handleCompanyInfoChange} className="border border-dashed p-2 rounded-md" />
            </div>
          </div>
        )}

        {/* Terms Checkbox */}
        {(role === 'landlord' || role === 'realtor' || role === 'company') && (
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-600">
                Accept RentYard property adding terms & condition
              </span>
            </label>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="flex justify-between items-center pt-10">
          <button className="text-sm text-gray-600">Back</button>
      <button
  className={`px-4 py-2 text-white rounded-md text-sm ${
    isInitial
      ? 'bg-gray-300 cursor-not-allowed'
      : (role === 'landlord' && propertyType === 'condos' && !isLandlordReady) ||
        (role === 'realtor' && propertyType === 'condos' && !isRealtorReady) ||
        (role === 'company' && propertyType === 'condos' && !isCompanyReady)
      ? 'bg-blue-600'
      : 'bg-blue-600 hover:bg-blue-700'
  }`}
  disabled={
    isInitial ||
    (role === 'landlord' && propertyType === 'condos' && !isLandlordReady) ||
    (role === 'realtor' && propertyType === 'condos' && !isRealtorReady) ||
    (role === 'company' && propertyType === 'condos' && !isCompanyReady)
  }
>

            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySelection;
