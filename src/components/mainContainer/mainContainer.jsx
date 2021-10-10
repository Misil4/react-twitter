import React from "react";
import Header from "./header";
import NewsContainer from "./newsContainer";

class MainContainer extends React.Component {
render() {
    return (
        <div className="mainContainer">
            <Header title="Hello lanbide"/>
            <NewsContainer/>
        </div>
    );
}
}
export default MainContainer;