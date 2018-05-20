import { Title, getLabel } from "../../imports";

export default [{
    field: Title.ID,
    primaryKey: true,
    skipRender: true
}, { field: Title.TITLE, label: getLabel('LABEL_TITLE') }, {
    field: Title.PUBLISHER, label: getLabel("LABEL_PUBLISHER")
}];