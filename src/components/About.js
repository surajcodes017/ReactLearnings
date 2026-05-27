import UserClass from "./UserClass"
import User from "./User"
// import React from "react";     => import {Component} from "react";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor")
    }
    componentDidMount(){
        // console.log("Parent component did Mount");
    }
    render(){
        // console.log("Parent render")
        return (
            <div className="about">
            <h1>About</h1>
            <h1>This is an About Page</h1>
            {/* <User name={"SURAJ DUPPALLY (Functional)"} location="Hyderabad" /> */}
            <UserClass  />
            {/* <UserClass name={"VIRAT KOHLI (class-2)"} location="LONDON(UK)" /> */}
        </div>
        )
    }
}

// const About = () =>{
//     return (
//         <div className="about">
//             <h1>About</h1>
//             <h1>This is an About Page</h1>
//             {/* <User name={"SURAJ DUPPALLY (Functional)"} location="Hyderabad" /> */}
//             <UserClass name={"SURAJ DUPPALLY (class)"} location="Hyderabad" />
//         </div>
//     )
// }

export default About; 