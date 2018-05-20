import { CollectionTitle, Title, getLabel } from "../../imports";

export default [{
    field: CollectionTitle.ID,
    primaryKey: true,
    skipRender: true
}, {
    field: CollectionTitle.ITEM_TITLE,
    label: getLabel("LABEL_TITLE"),
    filter: true
}, {
    field: CollectionTitle.AUTHOR,
    label: getLabel("LABEL_AUTHOR"),
    filter: true,
    transform: (value) => value[0][Title.AUTHOR]
}, {
    field: CollectionTitle.ISBN,
    label: getLabel("LABEL_ISBN")
}];