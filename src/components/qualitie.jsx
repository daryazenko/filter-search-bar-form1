import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, _id }) => {
    return (
        <h2 key={_id} className={`badge bg-${color} m-1 fs-6`}>
            {name}
        </h2>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualitie;
