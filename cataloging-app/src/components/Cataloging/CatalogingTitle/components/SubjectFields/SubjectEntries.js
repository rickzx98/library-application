import { PropTypes, React } from '../../imports';

import { SubjectEntry } from './SubjectEntry';

export const SubjectEntries = ({ values = [{}], readOnly, name }) => (<div className="subject-entries">
    {values && values.map((subject, index) => (<SubjectEntry
        key={`${index}_${name}`}
        name={name}
        readOnly={readOnly}
        index={index}
        value={subject} />))}
</div>);
SubjectEntries.propTypes = {
    values: PropTypes.array,
    readOnly: PropTypes.bool,
    name: PropTypes.string.isRequired
};