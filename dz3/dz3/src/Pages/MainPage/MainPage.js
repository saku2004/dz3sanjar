import React from "react";
import Users from "../../components/Users/Users";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
            <h1 style={{color: 'red', fontSize: '25px'}}>BREAKING</h1>
            <h2>NFT простыми словами: что это и как на нем заработать</h2>
                <Users users={this.props.users}/>
            </div>
        )
    }
}

export default MainPage;