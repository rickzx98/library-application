import {
  PropTypes,
  React,
  TreeView
} from '../imports';
import Style from './CatalogingSubjectTreeStyle';

export const CatalogingSubjectTree = ({
  subjects,
  onToggle
  }) => {

  return (<TreeView
    style={Style}
    data={subjects}
    onToggle={onToggle}/>);
};

CatalogingSubjectTree.propTypes = {
  subjects: PropTypes.array,
  onToggle: PropTypes.func.isRequired
};
