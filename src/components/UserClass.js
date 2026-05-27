import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0 ,
            userInfo:{
                name: "dummy",
                location: "default",
                    
            }
        }
        // console.log(this.props.name+"Child constuctor")
        console.log("i am constructor")
    }
    async componentDidMount(){
        // console.log(this.props.name+"child component did Mound");
        const data = await fetch("https://api.github.com/users/surajcodes017");
        const json= await data.json();
        this.setState({
            userInfo: json,
        })
        // console.log(json);
        console.log("i am coponentdid_MOUNT")
    }
    componentDidUpdate(){
        console.log("i am componentdid_UPdate")
    }
    componentWillUnmount(){
        console.log("i AM UNMOUNT BRO")
    }

    render(){
        // console.log(this.props.name+"Child render")
        // const {name, location}=this.props;
        console.log("i am render");
        const {count}=this.state;
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="User-card">
                <h2 >Count: {count}</h2>
                <button className="cnt-btn" onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    })
                }}>Count Increase</button>
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @surajduppally</h4>
            </div>
        )
    }
}

export default UserClass;