import React from 'react';

interface ProductDisplayProps {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ title, subtitle, image, tags }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded h-full">
      <img src={image} alt={title} className="h-40 w-40 object-cover mx-auto" />
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
      <div className="flex flex-wrap mt-2">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-200 text-gray-800 text-sm mr-2 mb-2 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
