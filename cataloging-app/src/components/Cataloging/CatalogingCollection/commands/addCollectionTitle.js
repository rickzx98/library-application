import { PAGE_NAME_COLLECTION_TITLE } from "../constants";

export default ({ props: { actions }, params }) => {
    return actions.createDiscretely(PAGE_NAME_COLLECTION_TITLE, params.collectionTitle());
};