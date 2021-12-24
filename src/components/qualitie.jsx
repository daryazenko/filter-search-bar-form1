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
    color: propTypes.func.isRequired,
    name: propTypes.func.isRequired,
    _id: propTypes.func.isRequired
};

export default Qualitie;
