import {
    PropTypes,
    React,
    TreeView
} from '../imports';

export const CatalogingSubjectTree = ({
    subjects,
    onToggle
}) => {

    return (<TreeView data={subjects}
        onToggle={onToggle} />);
};

CatalogingSubjectTree.propTypes = {
    subjects: PropTypes.array,
    onToggle: PropTypes.func.isRequired
};