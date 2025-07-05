import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const InformationForm = () => {
  const renderRow = (text) => (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-gray-700">{text}</span>
      <div className="flex gap-2">
        <button className="text-blue-600">
          <Pencil className="w-4 h-4" />
        </button>
        <button className="text-red-500">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderSection = (
    title,
    rows,
    required = false,
    optionalText = "",
    editable = true,
    addable = false
  ) => (
    <div className="border rounded-md p-4 bg-white">
     <div className="mb-2">
  {/* Title row */}
  <div className="flex justify-between items-start">
    <label className="text-sm font-medium">
      {title}{" "}
      {required && <span className="text-red-500">*</span>}{" "}
      {optionalText && (
        <span className="text-gray-400 text-xs ml-1">
          ({optionalText})
        </span>
      )}
    </label>

    <div className="flex gap-2">
      {addable && (
        <button className="text-xs text-blue-600 font-medium">
          + Add
        </button>
      )}
      {editable && !addable && (
        <button className="text-xs text-blue-600 font-medium">
          Edit
        </button>
      )}
    </div>
  </div>

  {/* Horizontal line below */}
  <hr className="mt-1 border-t border-gray-300" />
</div>

      <div>
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            {renderRow(row)}
            {i < rows.length - 1 && <hr className="my-1" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="  rounded-xl">
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

     <div className="bg-gray-50 p-6 max-w-6xl mx-auto">
         <h2 className="text-lg font-semibold mb-4">
        Condominiums information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderSection(
          "Property address",
          [
            "Dallas apartments complex, House#123, XYZ road BX 12-35 Dallas TX 75201 USA",
          ],
          true
        )}

        {renderSection(
          "Pet Notes",
          [
            "Dog Weight limit: 20lb, Monthly pet rent: $300",
            "Dog Max: 3, Pet fee: $250",
            "Cat Weight limit: 20lb, Monthly pet rent: $200",
            "One time fee: $200",
          ],
          false,
          "Optional, add here if you allow pets",
          true,
          true
        )}

        {renderSection(
          "Leasing info",
          [
            "Leasing manager: Alex John",
            "Email: alex.john@rentyard.com",
            "Phone: (555) 555-5555",
          ]
        )}

        {renderSection(
          "Parking info",
          [
            "Covered and uncovered parking available, up to 4-door vehicles.",
            "Reserved/non-reserved options.",
            "Vehicle registration required.",
            "Max 1 vehicle unless approved.",
          ],
          false,
          "Optional"
        )}

        {renderSection(
          "Charges",
          ["Application Fee: $200 per applicant.", "Admin Fee: $150"],
          true
        )}

        {renderSection(
          "Nearest educational institutes",
          [
            "Elementary school, Institution name, 2-mile",
            "High school, Institution name, 2-mile",
            "Elementary school, Institution name, 2-mile",
          ],
          false,
          "Optional but recommended",
          true,
          true
        )}

        {renderSection(
          "Rent frequency & payment reminder",
          ["Rent due date: 25th of every month"],
          true
        )}

        {renderSection(
          "Nearest stations",
          [
            "Bus Station name, 2-mile",
            "Train Station name, 3-mile",
            "Airport, Station name, 3-mile",
          ],
          false,
          "Optional but recommended",
          true,
          true
        )}

        {renderSection(
          "Application agreement",
          [
            "Agreement File: PDF",
            "Terms accepted for rental/student application",
          ]
        )}

        {renderSection(
          "Nearest landmarks",
          [
            "Museum, Landmark name, 2-mile",
            "Temple, Landmark name, 2-mile",
          ],
          false,
          "Optional but recommended",
          true,
          true
        )}
      </div>

      <div className="mt-4">
        {renderSection(
          "About the property",
          [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos ducimus doloremque dignissimos, explicabo nobis. Ipsum neque blanditiis eveniet tenetur sit necessitatibus commodi porro suscipit aliquid. Fugiat veritatis dolorem distinctio.",
          ]
        )}
      </div>

      <div className="mt-4 border rounded-md p-4 bg-white">
        <div className="flex justify-between items-start mb-2">
          <label className="text-sm font-medium">
            Community’s amenity/features{" "}
            <span className="text-gray-400">(Optional but recommended)</span>
          </label>
          <button className="text-xs text-blue-600 font-medium">
            + Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "Air Conditioned",
            "Gym/Fitness",
            "Pet Park",
            "Swimming",
            "Gated",
            "Parking Lot",
            "Pet Friendly",
            "Bilingual",
          ].map((item) => (
            <span
              key={item}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {renderSection(
        "Internet providers",
        [
          "Internet - XBlaze company",
          "Internet - Cable company",
          "Internet - ISPabc company",
        ],
        false,
        "Optional but recommended",
        true,
        true
      )}

      {/* Property Gallery */}
      <div className="mt-6 border rounded-md p-4 bg-white">
        <label className="block text-sm font-medium mb-2">
          Property gallery (Add unit photos)
        </label>
        <div className="grid grid-cols-6 gap-3">
          <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 h-24 rounded-md text-center">
            <span className="text-xs">Upload cover photo</span>
          </div>
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={i}
              className="border border-dashed border-gray-300 h-24 rounded-md flex items-center justify-center text-xs text-gray-500"
            >
              More photo {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="mt-6 border rounded-md p-4 bg-white">
        <label className="block text-sm font-medium mb-2">
          Videos (optional)
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[
            "Property video (optional)",
            "Property virtual tour (optional)",
            "Property web video (optional)",
          ].map((label, i) => (
            <div
              key={i}
              className="h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-500"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-between pt-6">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
          Back
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
     </div>
    </div>
  );
};

export default InformationForm;
