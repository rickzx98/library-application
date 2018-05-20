import { PAGE_NAME_COLLECTION_TITLE } from "../constants";

export default ({ props: { actions }, params }) => {
    return actions.deleteDataDiscretely(PAGE_NAME_COLLECTION_TITLE, params.primaryField(), params.id());
};