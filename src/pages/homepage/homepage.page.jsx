import React from 'react';

import './homepage.styles.scss';
import GroupMembersComponent from '../../components/group-members/group-members.component';
import GroupDescriptionComponent from '../../components/group-description/group-description.component';

const Homepage = () => (
    <div className="homepage">
        <div className="home-title">Create Group</div>
        <GroupDescriptionComponent />
        <GroupMembersComponent />
        <div className="form-buttons">
            <button
                className="button-update"
                onClick={() => {
                    alert('User group updated');
                    window.location.reload();
                }}
            >
                Update
            </button>
            <button
                className="button-remove"
                onClick={() => {
                    alert('User group removed');
                    window.location.reload();
                }}
            >
                Remove
            </button>
        </div>
    </div>
);

export default Homepage;
