import {
  React,
  PropTypes,
  DropdownCallNumberPrefix,
  DropdownCallNumberCutter,
  FormGroup,
  getLabel,
  CallNumber,
  FieldView,
  readOnlyWrapper
} from '../../imports';

export const CallNumberField = ({name, value, readOnly}) => (<div className="call-number">
  <FormGroup className="col-sm-2 no-padding" name={name + '_' + CallNumber.PREFIX} label={getLabel("LABEL_PREFIX")}>
    <DropdownCallNumberPrefix readOnly={readOnly} value={value[CallNumber.PREFIX]}
                              name={name + '_' + CallNumber.PREFIX}/>),
  </FormGroup>
  <FormGroup className="col-sm-5 no-padding" name={name + '_' + CallNumber.MAIN} label={getLabel("LABEL_MAIN")}>
    {readOnlyWrapper((<FieldView>{value[CallNumber.MAIN] || ''}</FieldView>),
      (<input className="form-control" value={value[CallNumber.MAIN]} placeholder={getLabel("LABEL_MAIN")}
              name={name + '_' + CallNumber.MAIN}/>),
      readOnly)}
  </FormGroup>
  <FormGroup className="col-sm-2 no-padding" name={name + '_' + CallNumber.CUTTER} label={getLabel("LABEL_CUTTER")}>
    <DropdownCallNumberCutter readOnly={readOnly} value={value[CallNumber.CUTTER]}
                              name={name + '_' + CallNumber.CUTTER}/>
  </FormGroup>
  <FormGroup className="col-sm-3 no-padding" name={name + '_' + CallNumber.SUFFIX} label={getLabel("LABEL_SUFFIX")}>
    {readOnlyWrapper((<FieldView>{value[CallNumber.SUFFIX] || ''}</FieldView>),
      (<input className="form-control" value={value[CallNumber.SUFFIX]} placeholder={getLabel("LABEL_SUFFIX")}
              name={name + '_' + CallNumber.SUFFIX}/>), readOnly)}
  </FormGroup>
</div>);

CallNumberField.propTypes = {
  value: PropTypes.object,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
};
