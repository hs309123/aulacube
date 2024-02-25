import { useState } from "react";

const Comment = ({ comment }) => {
  const [showList, setShowList] = useState(false);
  const handleReply = () => {
    setShowList(!showList);
  };
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex flex-col w-autp h-auto mt-2 mx-2">
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={4}
            className="block w-full rounded-md border-0 p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={comment.text}
          />
        </div>
        <div className="flex justify-between my-4">
          <p onClick={handleReply} className="cursor-pointer">
            {showList ? "Hide Replies" : "Show Replies"}
          </p>
          <div className="flex flex-row justify-end gap-4">
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Star ⭐
            </button>
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Reply
            </button>
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Delete
            </button>
          </div>
        </div>
      </div>
      {showList && (
        <div className="flex w-auto h-auto ml-10">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
