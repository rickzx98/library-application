import { PropTypes, React } from "../../imports";

export class CardCatalogPreview extends React.Component {
    render() {
        return <div className="paper a4 portrait"/>;
    }
}
CardCatalogPreview.propTypes = {
    instance: PropTypes.object.isRequired
};
