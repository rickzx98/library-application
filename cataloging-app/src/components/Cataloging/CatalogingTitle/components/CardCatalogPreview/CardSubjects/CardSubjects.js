import { React, PropTypes, Subject } from "../../../imports";
import { CardSubject } from "./CardSubject";
export class CardSubjects extends React.Component {
  render() {
    return (
      <div className="card-subjects">
        <p>
          {this.props.subjects &&
            this.props.subjects instanceof Array &&
            this.props.subjects.map((subject, index) => (
              <CardSubject
                key={subject[Subject.TYPE] + "" + index}
                subject={subject}
                index={index}
              />
            ))}
        </p>
      </div>
    );
  }
}

CardSubjects.propTypes = {
  subjects: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
