import { useState } from "react";
import { Link } from "react-router-dom";

import "./Elections.css"


const Elections = ({data}) => {

    return (
        <div>
            {data.map(i => {
                if (Date.parse(i[4]) < Date.now()) {console.log("out of date")}
                return (// must find a way to pass data through
                    <div>
                        <p><b>{i[1]}</b></p>
                        <div>{i[2]}</div>
                        <Link to="/vote" className="test">vote</Link>
                    </div>
                );
            })}
        </div>
    );
};


export default Elections;
