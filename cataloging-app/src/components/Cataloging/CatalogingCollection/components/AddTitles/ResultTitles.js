import { FluidTable, PropTypes, React, Title } from "../../imports";

import { PAGE_NAME_TITLE } from "../../constants";
import TableSpec from "./TitleTableSpec";

export const ResultTitles = ({ pageList, onSelect }) => (<div className="result-titles">
    <FluidTable
        onSelect={onSelect}
        fieldKey={Title.ID}
        name={PAGE_NAME_TITLE}
        className="table table-condensed table-hover"
        columns={TableSpec} value={pageList} />
</div>);
ResultTitles.propTypes = {
    onSelect: PropTypes.func.isRequired,
    pageList: PropTypes.array.isRequired
};