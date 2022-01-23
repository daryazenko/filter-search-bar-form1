import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ qualities }) => {
    return qualities.map((qualitie) => (
        <h2 key={qualitie._id} className={`badge me-1 bg-${qualitie.color}`}>
            {qualitie.name}
        </h2>
    ));
};

Qualities.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default Qualities;
