import React from "react";

class DetailContent extends React.Component {
    render() {
        return(
            <div className="detailContent">
                <p className="content">{this.props.content}</p>
            </div>
        );
    }
}
export default DetailContent;