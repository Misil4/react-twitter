import React from "react";
import Image from "./image.jsx";
import DetailTitle from "./detailTitle.jsx";
import DetailContent from "./detailContent.jsx";

class DetailContainer extends React.Component {
    render() {
        return (<div>
        {this.props.timeline.map((element,i) =>{ return(
            <div className="detailContainer" key={i}>
                <Image avatar={element.avatar}/>
                <DetailTitle name={element.name} username={element.username} timestamp={element.timestamp} />
                <DetailContent content={element.content} />
            </div>
        );
    })}
    </div>
        );
    }
}
export default DetailContainer;