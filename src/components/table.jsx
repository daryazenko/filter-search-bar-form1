import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader
                        onSort={onSort}
                        selectedSort={selectedSort}
                        columns={columns}
                    />
                    <TableBody columns={columns} data={data} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    children: PropTypes.array
};
export default Table;
