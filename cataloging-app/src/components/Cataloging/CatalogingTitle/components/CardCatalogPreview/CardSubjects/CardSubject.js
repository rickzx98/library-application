import { React, PropTypes, Subject } from "../../../imports";
function getSubdivision(subject, subdivision) {
  return subject[subdivision] && subject[subdivision].length > 0
    ? ` --- ${subject[subdivision]}`
    : "";
}
export const CardSubject = ({ subject, index }) => (
  <span className="card-subject">
    {` ${index + 1}) `}
    {subject[Subject.ENTRY]}
    {getSubdivision(subject, Subject.SUBDIVISION0)}
    {getSubdivision(subject, Subject.SUBDIVISION1)}
    {getSubdivision(subject, Subject.SUBDIVISION2)}
  </span>
);
CardSubject.propTypes = {
  index: PropTypes.number.isRequired,
  subject: PropTypes.object.isRequired
};
