import React from "react";
import "./scss/CardList.scss";

import Card from "./Card";

const CardList = (props) => (
    <div className="container">
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

export default CardList;