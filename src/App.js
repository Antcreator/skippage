import React, { useState } from 'react';
import SkipCard from './components/SkipCard';
import { skips } from './mockData/skips';

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Choose Your Skip Size</h1>
      <p className="text-center mb-8 text-gray-400">Select the skip size that best suits your needs</p>
      <p className="text-center mb-4 text-gray-300 text-lg">All skips come with a 14-day hire period</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => setSelectedSkip(skip)}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="mt-10 text-center">
          <p className="text-xl">
            Selected Skip ID: <strong>{selectedSkip.id}</strong>
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold">
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
