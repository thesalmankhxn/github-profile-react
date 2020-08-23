import React from "react";

import "./scss/Card.scss";

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img className="profile-pic" src={profile.avatar_url} alt="profile-pic"/>
                <hr className="hr-rule" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;

// "https://placehold.it/75"