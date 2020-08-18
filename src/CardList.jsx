import React from "react";
import "./scss/CardList.scss";

import Card from "./Card";
import testData from "./textData";

const CardList = (props) => (
    <div className="container">
        {testData.map(profile => <Card {...profile}/>)}
    </div>
);

export default CardList;