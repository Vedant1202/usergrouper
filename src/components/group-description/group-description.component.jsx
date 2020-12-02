import React, { Component } from 'react';

import './group-description.styles.scss';

import ProfileIcon from './profile-icon.png';

class GroupDescriptionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            groupDescription: '',
            groupIcon: ProfileIcon,
        };
    }

    handleFileChange = (event) => {
        this.setState({
            groupIcon: URL.createObjectURL(event.target.files[0]),
        });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { groupName, groupDescription, groupIcon } = this.state;

        return (
            <div className="group-description">
                <input
                    type="file"
                    className="group-icon-input"
                    ref={(input) => (this.inputElement = input)}
                    onChange={this.handleFileChange}
                />{' '}
                {/* This file input element is hidden */}
                <div
                    className="group-icon"
                    onClick={(e) => {
                        e.preventDefault();
                        this.inputElement.click();
                    }}
                >
                    <img src={groupIcon} alt="Group Icon Avatar" />
                    <div className="overlay">
                        <span className="add-icon">&#43;</span>
                    </div>
                </div>
                <div className="group-inputs">
                    <input
                        type="text"
                        name="groupName"
                        placeholder="Group Name"
                        value={groupName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="groupDescription"
                        placeholder="Group Description"
                        value={groupDescription}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default GroupDescriptionComponent;
