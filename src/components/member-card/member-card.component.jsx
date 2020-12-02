import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './member-card.styles.scss';

class MemberCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            selected: !prevState.selected,
        }));
    };

    render() {
        const { selected } = this.state;
        const { name, Image } = this.props;

        return (
            <div className="member-card" onClick={this.handleClick}>
                <img src={Image} alt="Avatar" />
                {selected ? <div className="card-img-overlay">&#10003; {/* HTML Unicode Tick Symbol */}</div> : null}
                <div className="name-container">{name}</div>
            </div>
        );
    }
}

MemberCardComponent.propTypes = {
    name: PropTypes.string,
    Image: PropTypes.string,
};

export default MemberCardComponent;
