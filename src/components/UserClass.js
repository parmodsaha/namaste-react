import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        };
    }
    render () {
        const {name, city, contact} = this.props;
        const {count} = this.state;
        const {count2} = this.state;
        return (
            <div className="user-card">
                <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {city}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );  
    };
};

export default UserClass;