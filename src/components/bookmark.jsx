import React from "react";

const BookMark = ({ status, onToggleBookMark, user }) => {
  return (
    <button onClick={() => onToggleBookMark(user._id)}>
      <i
        className={`"bi bi-bookmark" ${
          status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
        }`}></i>
    </button>
  );
};
export default BookMark;