const SearchStatus = ({ length }) => {
    return length >= 2 && length <= 4
        ? " человека тусанут с тобой сегодня"
        : length === 1
        ? " человек тусанёт с тобой сегодня"
        : " человек тусанут с тобой сегодня";
};

export default SearchStatus;
