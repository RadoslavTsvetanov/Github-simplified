import React from 'react';

interface HighlightedDivProps {
  text: string;

}

const HighlightedDiv: React.FC<HighlightedDivProps> = ({ text }) => {

  return (
    <div className="flex">
      <div
        className={`flex-grow p-2 ${
           "normal"=== text ? 'bg-yellow-500' : 'bg-transparent'
        }`}
      >
        Your repos
      </div>
      <div
        className={`flex-grow p-2 ${
           "starred"=== text ? 'bg-yellow-500' : 'bg-transparent'
        }`}
      >
        Starred/Saved 
      </div>
    </div>
  );
};

export default HighlightedDiv;