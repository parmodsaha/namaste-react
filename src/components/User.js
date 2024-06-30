const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.city}</h3>
            <h4>Contact: {props.contact}</h4>
        </div>
    );
};

export default User;