import React from 'react';

const BookDetails = ({ book }) => (
  <div className="flex p-6 space-x-8 bg-gray-50">
    <div className="w-1/3">
      <img 
        src={book.image_url} 
        alt={book.title} 
        className="w-full h-auto object-cover rounded-lg shadow-lg" 
      />
    </div>
    <div className="w-2/3">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
      <h2 className="text-xl text-gray-600 mb-4">by {book.authors}</h2>
      <p className="text-lg text-gray-800 mb-6">{book.description}</p>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Memorable Quotes</h3>
        <ul className="space-y-2 pl-5 list-disc text-gray-700">
          <li>{book.Quote1}</li>
          <li>{book.Quote2}</li>
          <li>{book.Quote3}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default BookDetails; 