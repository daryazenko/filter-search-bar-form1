import React from 'react';
const Qualitie = ({ color, name, _id }) => {
    return (
        <h2 key={_id} className={`badge bg-${color} m-1 fs-6`}>
        {name}
        </h2>
    )
};
    
export default Qualitie;
