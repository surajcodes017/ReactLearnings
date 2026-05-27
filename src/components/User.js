import {useState} from "react";


const User = (props) =>{
    const [count]= useState(0);
    const [count2] = useState(1);
    const {name,Location} = props;

    return (
        <div className="User-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {Location}</h3>
            <h4>Contact: SURAJDUPPALLY@</h4>
        </div>
    )
}

export default User;