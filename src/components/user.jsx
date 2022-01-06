import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onToggleBookMark }) => {
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>
                    {user.qualities.map((qual) => (
                        <Qualitie
                            key={qual._id}
                            color={qual.color}
                            name={qual.name}
                            _id={qual._id}
                        />
                    ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                    <BookMark
                        status={user.isBookmarked}
                        onToggleBookMark={onToggleBookMark}
                        id={user._id}
                    />
                </td>
                <td>
                    <button
                        className="btn bg-danger text-light"
                        onClick={() => onDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
