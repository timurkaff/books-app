import React from 'react';

const LikeButton = ({ liked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-full transition ${
        liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
      } hover:shadow-md`}
    >
      <span className="mr-2">{liked ? '❤️' : '🤍'}</span>
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;