import React from "react";
import Sunny from "../../components/Sunny/Sunny";

class AppPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
            <h3>Что такое NFT</h3>
                <Sunny sunny={this.props.sunny}/>
                <h4  style={{width: '50%'}}>Илон Маск, основатель Tesla, выставил на аукционе свой твит с треком об NFT за 1 млн долларов. В итоге он так и не был продан, но привлек много внимания интернет-СМИ.</h4>
            </div>
        )
    }
}

export default AppPage;