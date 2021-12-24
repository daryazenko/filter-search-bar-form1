import React from "react";
import propTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, user }) => {
    return (
        <button onClick={() => onToggleBookMark(user._id)}>
            <i
                className={`"bi bi-bookmark" ${
                    status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                }`}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    user: propTypes.func.isRequired,
    status: propTypes.func.isRequired,
    onToggleBookMark: propTypes.func.isRequired,
    _id: propTypes.func.isRequired
};
export default BookMark;
