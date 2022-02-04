import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ handleSearchInput, value }) => {
    return (
        <div className="form-group">
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search..."
                onChange={handleSearchInput}
                value={value}
            />
        </div>
    );
};

SearchField.propTypes = {
    handleSearchInput: PropTypes.func,
    value: PropTypes.string
};

export default SearchField;
