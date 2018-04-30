import {FieldView, PropTypes, React, getLabel, readOnlyWrapper, FormGroup, getValue} from '../../imports';
import {subdivisionValueTransformer} from './SubjectValueTransformer';
import {SubjectSubdivisionDropdown} from './SubjectSubdivisionDropdown';

export const SubjectSubdivision = ({index, name, value = {}, readOnly}) => {
  const subDivision0Name = `${index}_${name}_subdivision_0`;
  const subDivision0NameValue = `${name}_subdivision_0`;
  const subDivision1Name = `${index}_${name}_subdivision_1`;
  const subDivision1NameValue = `${name}_subdivision_1`;
  const subDivision2Name = `${index}_${name}_subdivision_2`;
  const subDivision2NameValue = `${name}_subdivision_2`;
  const subDivision0Type = `${index}_${name}_subdivision_type_0`;
  const subDivision0TypeValue = `${name}_subdivision_type_0`;
  const subDivision1Type = `${index}_${name}_subdivision_type_1`;
  const subDivision1TypeValue = `${name}_subdivision_type_1`;
  const subDivision2Type = `${index}_${name}_subdivision_type_2`;
  const subDivision2TypeValue = `${name}_subdivision_type_2`;

  return (<FormGroup label={getLabel("LABEL_SUBDIVISION")} className="subject-subdivistion">
    {readOnlyWrapper((<div className="form-group clearfix">
      <FieldView>{getValue(value, subDivision0NameValue) ? (getValue(value, subDivision0NameValue) + ' - ' + getValue(value, subDivision0TypeValue, subdivisionValueTransformer)) : ''}</FieldView>
    </div>), (<div className="form-group clearfix">
      <div className="input-form col-sm-7">
        <input name={subDivision0Name}
               placeholder={getLabel('LABEL_SUBDIVISION')}
               value={value[subDivision0NameValue]}
               className="form-control"/>
      </div>
      <div className="button-form col-sm-5">
        <SubjectSubdivisionDropdown name={subDivision0Type}
                                    value={value[subDivision0TypeValue]} className="form-control"/>
      </div>
    </div>), readOnly)}
    {readOnlyWrapper((<div className="form-group clearfix">
      <FieldView>{getValue(value, subDivision1NameValue) ? (getValue(value, subDivision1NameValue) + ' - ' + getValue(value, subDivision1TypeValue, subdivisionValueTransformer)) : ''}</FieldView>
    </div>), (<div className="form-group clearfix">
      <div className="input-form col-sm-7">
        <input name={subDivision1Name}
               placeholder={getLabel('LABEL_SUBDIVISION')}
               value={value[subDivision1NameValue]}
               className="form-control"/>
      </div>
      <div className="button-form col-sm-5">
        <SubjectSubdivisionDropdown name={subDivision1Type}
                                    value={value[subDivision1TypeValue]} className="form-control"/>
      </div>
    </div>), readOnly)}
    {readOnlyWrapper((<div className="form-group clearfix">
      <FieldView>{getValue(value, subDivision2NameValue) ? (getValue(value, subDivision2NameValue) + ' - ' + getValue(value, subDivision2TypeValue, subdivisionValueTransformer)) : ''}</FieldView>
    </div>), (<div className="form-group clearfix">
      <div className="input-form col-sm-7">
        <input name={subDivision2Name}
               placeholder={getLabel('LABEL_SUBDIVISION')}
               value={value[subDivision2NameValue]}
               className="form-control"/>
      </div>
      <div className="button-form col-sm-5">
        <SubjectSubdivisionDropdown name={subDivision2Type}
                                    value={value[subDivision2TypeValue]} className="form-control"/>
      </div>
    </div>), readOnly)}
  </FormGroup>);
};

SubjectSubdivision.propTypes = {
  value: PropTypes.object,
  readOnly: PropTypes.bool,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
