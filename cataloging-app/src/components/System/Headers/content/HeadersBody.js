import { FluidLabel, LoadingBalls, Nav, Navbar, PropTypes, React } from '../imports';

import { HeaderControls } from './HeaderControls';

export const HeadersBody = ({ locale, appLabel, security, navComponents,
    ajax, routing, headers }) => {
    return (<Navbar collapseOnSelect fixedTop={true} fluid={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="">
                    {!ajax.started && <img className="pull-left header-thumbnail" height="24" width="24" src="/app-icon.png" />}
                    {ajax.started && <div className="header-loader"><LoadingBalls /></div>}
                    <div className="pull-right"> &nbsp;{security.fullname} <FluidLabel label="appName" locale={locale} name={appLabel} /></div></a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <HeaderControls router={routing} headers={headers} />
            <Navbar.Text pullRight><FluidLabel label="welcome" locale={locale} name={appLabel} />{security.user.userId}!</Navbar.Text>
            <Nav pullRight>
                {navComponents}
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
};

HeadersBody.propTypes = {
    headers: PropTypes.object.isRequired,
    routing: PropTypes.object.isRequired,
    ajax: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    appLabel: PropTypes.string.isRequired,
    navComponents: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.array,
        PropTypes.element
    ])
};