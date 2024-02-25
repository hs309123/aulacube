import React, { useState } from "react";
import ApiData from "../utils/sampleApiData";
import Comment from "./Comment";

const CommentList = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortedComments, setSortedComments] = useState(ApiData);

  // Function to sort comments by date posted
  const sortByDatePosted = () => {
    const sortedByDate = [...ApiData].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    setSortedComments(sortedByDate);
    setSortBy("date");
  };
  return (
    <div className="flex flex-col lg:m-32 md:m-16 sm:m-2 ">
      <h1 className="block text-lg font-medium leading-6 text-gray-100 my-4">
        What's on your mind?
      </h1>
      <div className="flex flex-col h-auto w-full my-4">
        <div className="flex flex-col w-autp h-auto mt-2 mx-2">
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={4}
              className="block w-full rounded-md border-0 p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Type Something"
            />
          </div>
          <div className="flex justify-end my-4">
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              POST
            </button>
          </div>
        </div>
      </div>
      <hr className=" my-4 mx-2" />

      <div className="flex w-auto h-auto mx-2 justify-between flex-row my-4 mb-6">
        <div className="flex">
          <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-lg hover:bg-gray-200 hover:text-black">
            Sortby
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={sortByDatePosted}
            className={`py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-lg hover:bg-gray-200 hover:text-black ${sortBy === "date" ? "bg-gray-200" : ""
              }`}
          >
            Date posted
          </button>
          <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-lg hover:bg-gray-200 hover:text-black">
            Most Replied
          </button>
        </div>
      </div>
      {/* Display sorted comments based on the selected sorting option */}
      {sortedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
