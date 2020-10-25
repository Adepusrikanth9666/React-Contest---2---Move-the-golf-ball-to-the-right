import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    //call back function
    buttonClickHandler() {
        this.setState({ renderBall:true })
// componentDidMount();
        // this.setState({  ballPosition:{ left: "200px" } })
    // let circle = document.getElementById("ball1");
    // console.log(circle+"hello");
}
    renderChoice() {
		if(this.state.renderBall){return <div id="ball1" className="ball" style={this.state.ballPosition}></div>}
		 else   return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
    }

    //bind ArrowRight keydown event
    componentDidMount() {
let call = document.getElementById("call");
// addEventLisnear

call.style.right="10px";

      
    }

    render() {
        return (
            <div className="playground">
                {this.renderChoice()}
                
            </div>
        )
    }
}


export default App;
