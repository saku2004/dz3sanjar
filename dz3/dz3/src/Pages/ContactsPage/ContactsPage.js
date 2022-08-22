import React from "react";

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = ({value:''})
        this.changeStateValue =this.changeStateValue.bind(this)
        this.submitData = this.submitData.bind(this)
    }

    changeStateValue(e){
        // console.log(e.target.value)
        this.setState({value: e.target.value})
    }

    submitData(e) {
        e.preventDefault()
        console.log(this.state);
    }
    
    render(){
        return(
            <div>
                {console.log(this.state.value)}
                <form>
                    {/* <input type="text" value = {this.state.value} onChange = {this.changeStateValue}></input>
                    <button type="submit" onClick={this.submitData}>Send</button> */}
                </form>
            </div>
    
        )
    }}

export default ContactPage;