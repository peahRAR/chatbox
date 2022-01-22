import React, { Component } from "react";

const Message = ({pseudo, message}) => {
  return (
  <div>
      <span className="px-4 py-2 my-2 rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">{message}</span>
  </div>
  )
};

export default Message;