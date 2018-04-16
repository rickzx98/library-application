import { PageForm, PropTypes, React } from '../imports';

import { FormSpecs } from '../api/';
import { PAGE_NAME } from '../constants';

export const CatalogingSubjectForm = ({ formValue, onSubmit, onFailed }) => {
	return (<PageForm
		formName={PAGE_NAME}
		onSubmit={onSubmit}
		onFailed={onFailed}
		formValue={formValue}
		formSpecs={FormSpecs} />);
};
CatalogingSubjectForm.propTypes = {
	formValue: PropTypes.object,
	onSubmit: PropTypes.func.isRequired,
	onFailed: PropTypes.func.isRequired
};
