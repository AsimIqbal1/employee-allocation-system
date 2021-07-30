import colors from "../../../../constants/colors";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? colors.gray : colors.lightGray,

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? colors.primary: colors.secondary,
    padding: grid,
    width: 250,
    margin: 10,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .5)',
});

export {
    getItemStyle,
    getListStyle
}