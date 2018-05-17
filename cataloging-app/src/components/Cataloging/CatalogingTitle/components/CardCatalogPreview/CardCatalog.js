import { React, PropTypes, Title, FluidForm } from "../../imports";
import { CardCallNumber } from "./CardCallNumber/CardCallNumber";
import { CardSubjects } from "./CardSubjects/CardSubjects";
import { CardLocation } from "./CardLocation";
export const CardCatalog = ({ formValue, className }) => (
  <div className={`card-catalog large ${className || ""}`}>
    <div className="clearfix card-main-content">
      <CardCallNumber
        callNumber={FluidForm.getValue(formValue, Title.CALL_NUMBER)}
      />
      <div className="card-information">
        <div className="card-information-container">
          <div className="card-author">
            {FluidForm.getValue(formValue, Title.AUTHOR)
              ? FluidForm.getValue(formValue, Title.AUTHOR)[0].author
              : ""}
          </div>
          <div className="card-title">
            {FluidForm.getValue(formValue, Title.TITLE)}
            {FluidForm.getValue(formValue, Title.SUB_TITLE) !== ""
              ? `:${FluidForm.getValue(formValue, Title.SUB_TITLE)} /`
              : " /"}
          </div>
          <div className="card-statement">
            {FluidForm.getValue(formValue, Title.STATEMENT_OF_RESPONSIBILITY)}
            {` -- ${FluidForm.getValue(formValue, Title.PLACE_OF_PUBLICATION)}`}
            {` : ${FluidForm.getValue(formValue, Title.PUBLISHER)}`}
            {`, ${FluidForm.getValue(formValue, Title.PUBLISHED_DATE)}`}
          </div>
          <div className="card-physical-desc">
            {FluidForm.getValue(formValue, Title.NUMBER_OF_PAGES)}
          </div>
          <div className="card-general-note">
            <p>{FluidForm.getValue(formValue, Title.GENERAL_NOTE)}</p>
          </div>
          <div className="card-isbn">
            {`ISBN: ${FluidForm.getValue(formValue, Title.ISBN)}`}
          </div>
          <CardSubjects
            subjects={FluidForm.getValue(formValue, Title.SUBJECTS)}
          />
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="card-lccn">
        {FluidForm.getValue(formValue, Title.LCCN)}
      </div>
      <CardLocation value={FluidForm.getValue(formValue, Title.LOCATION)} />
    </div>
  </div>
);

CardCatalog.propTypes = {
  className: PropTypes.string,
  formValue: PropTypes.object.isRequired
};
