import { useState } from "react";

import Elections from "./Elections"

import "./Home.css"


const Home = () => {

    const [electionData, setElectionData] = useState([// placeholder before post request added
        [
            1,
            "Test",
            "test description",
            "Thu, 28 Nov 2024 16:51:50 GMT",
            "Sat, 30 Nov 2024 22:51:50 GMT"
        ],
        [
            2,
            "Test2",
            "test description2",
            "Thu, 28 Nov 2024 16:51:50 GMT",
            "Sat, 30 Nov 2024 22:51:50 GMT"
        ]
    ])


    //let rows = []
    return (
        <div>
            <p>current elections</p>
            <Elections data={electionData}/>
        </div>
    );
};


export default Home;
