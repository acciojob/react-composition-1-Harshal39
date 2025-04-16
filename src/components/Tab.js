import React from "react";
import { useState } from "react";

const Tab = ({tabs}) => {
    const [indexes,setIndexes] = useState(0);
    return (
        <>
        <ul>
            {tabs.map((tab, index) => (
            <li key={index} onClick={() => setIndexes(index)}>{tab.title}</li>
        ))}
        </ul>
        <p>{tabs[indexes].content}</p>
        </>
    )
}

export default Tab;