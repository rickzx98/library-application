import { FieldView, PropTypes, React, getLabel, readOnlyWrapper } from '../../imports';

import { SubjectEntriesDropdown } from './SubjectEntriesDropdown';
import { SubjectSubdivision } from './SubjectSubdivision';

export const SubjectEntry = ({ index, name, value = {}, readOnly }) => {
    const entryName = `${index}_${name}_entry`;
    const entryType = `${index}_${name}_type`;
    return (<div className="subject-entry">
        {readOnlyWrapper((<div className="form-group clearfix">
            <FieldView>{value}</FieldView>
        </div>), (<div className="form-group clearfix">
            <div className="input-form col-sm-7">
                <input
                    name={entryName}
                    placeholder={getLabel('LABEL_SUBJECT_ENTRY')}
                    value={value[entryName]}
                    className="form-control" />
            </div>
            <div className="button-form col-sm-5">
                <SubjectEntriesDropdown name={entryType} value={value[entryType]} className="form-control" />
            </div>
        </div>), readOnly)}
        <SubjectSubdivision index={index} name={name} value={value} readOnly={readOnly} />
    </div>);
};

SubjectEntry.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.object,
    readOnly: PropTypes.bool
};