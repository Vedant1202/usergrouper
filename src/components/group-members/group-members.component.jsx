import React, { Component } from 'react';

import './group-members.styles.scss';
import MemberCardComponent from '../member-card/member-card.component';

class GroupMembersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: null,
        };
    }

    componentDidMount = async () => {
        const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
        const data = await response.json();
        this.setState({ members: data });
    };

    handleSort = (e) => {
        let { members } = this.state;

        if (e.target.value === 'asc') {
            members = members.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else {
            members = members.sort((a, b) => (a.name < b.name ? 1 : -1));
        }

        this.setState({
            members,
        });
    };

    render() {
        const { members } = this.state;

        return (
            <div className="group-members">
                <div className="sort-container">
                    <span>Sort Members by Name : </span>
                    <select defaultValue="default" onChange={this.handleSort}>
                        <option value="default" disabled>
                            Select an option
                        </option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div className="member-list">
                    {members && members.length > 0 ? (
                        members.map(({ name, id, Image }) => {
                            return <MemberCardComponent key={id} name={name} Image={Image} />;
                        })
                    ) : (
                        <div>
                            No group members to show. Either the data is not present, or check if your computer is connected
                            to the Internet.
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default GroupMembersComponent;
