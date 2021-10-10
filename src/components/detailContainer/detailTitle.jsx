import React from "react";

class detailTitle extends React.Component {
    render() {
        return(
            <div className="detailTitle">
                <span className="user">{this.props.name}</span>
                <span className="username">{this.props.username}</span>
                <span className="timestamp">{this.props.timestamp}</span>
            </div>
        )
    }
}
export default detailTitle;