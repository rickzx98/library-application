import { Page, PropTypes, React, getLabel } from '../imports';
export const CatalogingSubjectsBody = ({ children }) => {
  return (<Page label={getLabel('LABEL_SUBJECTS')} banner="/subjects-header.jpg">{children}</Page>);
};
CatalogingSubjectsBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};
