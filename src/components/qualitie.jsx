import React from "react";
import propTypes from "prop-types";

const Qualitie = ({ color, name, _id }) => {
    return (
        <h2 key={_id} className={`badge bg-${color} m-1 fs-6`}>
            {name}
        </h2>
    );
};

Qualitie.propTypes = {
    color: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    _id: propTypes.string.isRequired
};

export default Qualitie;
