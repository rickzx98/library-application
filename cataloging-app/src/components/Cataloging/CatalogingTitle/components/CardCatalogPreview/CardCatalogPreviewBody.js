import { PropTypes, React } from "../../imports";

import {CardCatalog} from "./CardCatalog";

export const CardCatalogPreviewBody = ({pageForm, isPrinting}) => (
  <div className="card-catalog-preview page-form">
    <div className={`paper a4 portrait ${
      isPrinting ? "printing" : ""}`}>
      <CardCatalog formValue={pageForm}/>
    </div>
  </div>);

CardCatalogPreviewBody.propTypes = {
  pageForm: PropTypes.object.isRequired,
  isPrinting: PropTypes.bool.isRequired
};

