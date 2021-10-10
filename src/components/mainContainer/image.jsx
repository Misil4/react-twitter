import React from "react";

class Image extends React.Component {
    render() {
        return(
            <img src={this.props.avatar} className="avatar" />
        )
    }
}
export default Image;