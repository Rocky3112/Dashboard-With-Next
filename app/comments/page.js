import React from 'react';
import commentsData from '../../public/comments.json';

const CommentCard = ({ comment }) => {
    // console.log(comment);
  return (
    <div className="bg-white shadow-md p-6 rounded-md mb-4">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-semibold">{comment.name}</h3>
        <div className="ml-2 flex items-center">
         
          <span className="text-yellow-500 ml-1 font-bold">{comment?.rating}/5</span>
        </div>
      </div>
      <p className="text-gray-700">{comment.body}</p>
    </div>
  );
};

const CommentsList = () => {
  return (
    <div className="bg-gray-100  flex items-center w-1/2 gap-5 rounded p-3 mx-auto">
      <div className="">
        <h1 className="text-3xl font-semibold mb-8">Comments</h1>
        {commentsData.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
