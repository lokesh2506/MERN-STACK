import React from "react";

class Apple extends React.Component {
    render() {
        const { appleInfo } = this.props;
        const { type, color } = appleInfo;
        return (
            <h2>This is a {color} color Apple {type}</h2>
            // <h2>This is an Apple class component</h2>
        );
    }
}

export default Apple;

