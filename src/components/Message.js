import React from "react";

const Message = ({ pseudo, message, isUser }) => {
  if (isUser(pseudo)) {
    return (
      <div className="flex justify-end  first-of-type:animate-fade-opacity">
        <div className="w-2/3 flex justify-end">
          <span className="px-4 py-2 my-2  rounded-lg inline-block rounded-br-none bg-green-600 text-white">
            {message}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-start  first-of-type:animate-fade-opacity ">
        <div className="w-2/3">
          <span className="px-4 py-2 my-2  rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">
            {message}
          </span>
        </div>
      </div>
    );
  }
};

export default Message;
