import { FieldView, PropTypes, React, getLabel, readOnlyWrapper } from '../../imports';

import { SubjectSubdivisionDropdown } from './SubjectSubdivisionDropdown';

export const SubjectSubdivision = ({ index, name, value = {}, readOnly }) => {
    const subDivision0Name = `${index}_${name}_subdivision_0`;
    const subDivision1Name = `${index}_${name}_subdivision_1`;
    const subDivision2Name = `${index}_${name}_subdivision_2`;
    const subDivision0Type = `${index}_${name}_type_0`;
    const subDivision1Type = `${index}_${name}_type_1`;
    const subDivision2Type = `${index}_${name}_type_2`;
    return (<div className="subject-subdivistion">
        {readOnlyWrapper((<div className="form-group clearfix">
            <FieldView>{value}</FieldView>
        </div>), (<div className="form-group clearfix">
            <div className="input-form col-sm-7">
                <input name={subDivision0Name}
                    placeholder={getLabel('LABEL_SUBDIVISION')}
                    value={value[subDivision0Name]}
                    className="form-control" />
            </div>
            <div className="button-form col-sm-5">
                <SubjectSubdivisionDropdown name={subDivision0Type}
                    value={value[subDivision0Type]} className="form-control" />
            </div>
        </div>), readOnly)}
        {readOnlyWrapper((<div className="form-group clearfix">
            <FieldView>{value}</FieldView>
        </div>), (<div className="form-group clearfix">
            <div className="input-form col-sm-7">
                <input name={subDivision1Name}
                    placeholder={getLabel('LABEL_SUBDIVISION')}
                    value={value[subDivision1Name]}
                    className="form-control" />
            </div>
            <div className="button-form col-sm-5">
                <SubjectSubdivisionDropdown name={subDivision1Type}
                    value={value[subDivision1Type]} className="form-control" />
            </div>
        </div>), readOnly)}
        {readOnlyWrapper((<div className="form-group clearfix">
            <FieldView>{value}</FieldView>
        </div>), (<div className="form-group clearfix">
            <div className="input-form col-sm-7">
                <input name={name + '_subdivision_2'}
                    placeholder={getLabel('LABEL_SUBDIVISION')}
                    value={value[subDivision2Name]}
                    className="form-control" />
            </div>
            <div className="button-form col-sm-5">
                <SubjectSubdivisionDropdown name={subDivision2Type}
                    value={value[subDivision2Type]} className="form-control" />
            </div>
        </div>), readOnly)}
    </div>);
};

SubjectSubdivision.propTypes = {
    value: PropTypes.object,
    readOnly: PropTypes.bool,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};