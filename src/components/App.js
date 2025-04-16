
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {
  const data = [
            {title:'Tab 1', content:'This is the content for Tab 1.'},
            {title:'Tab 2', content:'This is the content for Tab 2.'},
            {title:'Tab 3', content:'This is the content for Tab 3.'}
  ]

  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={data} />
    </div>
  )
}

export default App
