import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react</h2>
            <User name={"Parmod as functional based"} city={"delhi"} contact={"@parmod"} />
            <UserClass name={"Parmod as class based"} city={"gurgaon"} contact={"@parmod000"} />
        </div>
    );
};

export default About;