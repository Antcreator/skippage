import React from 'react';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div
      key={skip.id}
      className={`bg-[#1e1e1e] border rounded-xl p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
        isSelected ? 'border-blue-500' : 'border-gray-700'
      } animate-fadeInUp`}
    >
      <img
        src={skip.image || '/assets/skipimage.png'}
        alt={`${skip.size} yard skip`}
        className="w-full h-32 object-contain mb-4 rounded"
      />
      {/* <div className="text-sm text-blue-400 font-semibold">{skip.size} Yards</div> */}
      <h2 className="text-xl font-bold mb-1">{skip.size} Yard Skip</h2>
      <p className="text-2xl font-bold text-blue-500 mb-3">£{totalPrice.toFixed(2)}</p>

      <div className="mb-2">
        <p className={`mb-1 ${skip.allowed_on_road ? 'text-green-400' : 'text-red-400'}`}>
          {skip.allowed_on_road ? '✅ Allowed on road' : '🚫 Not allowed on road'}
        </p>
        <p className={`${skip.allows_heavy_waste ? 'text-green-400' : 'text-red-400'}`}>
          {skip.allows_heavy_waste ? '✅ Heavy waste allowed' : '🚫 No heavy waste'}
        </p>
      </div>

      <button
        onClick={onSelect}
        className={`mt-auto px-4 py-2 rounded-md text-sm font-medium ${
          isSelected
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-blue-400 hover:bg-blue-700 hover:text-white'
        }`}
      >
        {isSelected ? 'Selected' : 'Select This Skip'}
      </button>
    </div>
  );
};

export default SkipCard;
