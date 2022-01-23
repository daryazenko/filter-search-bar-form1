import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, id }) => {
    return (
        <button onClick={() => onToggleBookMark(id)}>
            <i
                className={`"bi bi-bookmark" ${
                    status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                }`}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};
export default BookMark;
