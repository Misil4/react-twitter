import React from "react";
import DetailContainer from "./detailContainer";
import timeline from "../data.js"

class NewsContainer extends React.Component {
    render() {
        return (
            <div className="newsContainer">
                <DetailContainer timeline={timeline}/>
            </div>
        )
    }
}
export default NewsContainer;