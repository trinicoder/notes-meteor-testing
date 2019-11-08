import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Session} from 'meteor/session';
export const PrivateHeader = (props) => {

    const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    return (
        <div className="header">
        <div className="header__content">
        <img  className="header__nav-toggle" onClick= {props.handleNavToggle} src={navImageSrc}></img>
            <h1 className="header__title">{props.title}</h1>
            <button className="button button--link-text" onClick={ props.handleLogout} >Logout</button>
        </div>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
    handleNavToggle: PropTypes.func.isRequired
};

export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout(),
        handleNavToggle: () =>  Session.set('isNavOpen',!Session.get('isNavOpen')),
        isNavOpen: Session.get('isNavOpen')
    };
}, PrivateHeader);
//export default PrivateHeader;