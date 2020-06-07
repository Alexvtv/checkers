import React, { Component } from "react";

class Cell extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	}
}

handleClick = () => {
    if(this.props.firstStep == true) {
        if((this.props.stepOfFirstPlayer == true) && (this.props.filled == 'firstPlayer') || (this.props.stepOfFirstPlayer == false) && (this.props.filled == 'secondPlayer')) {
        this.props.firstHandleClick(this.props.id);
        }
    } else {
        this.props.secondHandleClick(this.props.id);
    }
    this.props.checkingEndGame();
}


render() {
	let color;
        if(this.props.shape == true) {
            color={backgroundColor: 'rgba(163, 125, 0, 0.3)' }
        } else if(this.props.active == true) {
                color={backgroundColor: 'grey'}
        }

    let visibility;
        if (this.props.filled == 'firstPlayer') {
            visibility = {display: 'block', backgroundColor: '#ffffff' }
            if(this.props.queen == true) {
                visibility = {display: 'block', backgroundColor: '#ffffff', border: '2px solid #d17000' }
            }
        } else  if (this.props.filled == 'secondPlayer') {
            visibility = {display: 'block', backgroundColor: 'rgba(0, 0, 0, 1)' }
            if(this.props.queen == true) {
                visibility = {display: 'block', backgroundColor: 'rgba(0, 0, 0, 1)', border: '2px solid #d17000' }
            }
        }

	return (
		<div
                onClick={this.handleClick} 
                style={color} className='cell' >  
			<button
				style={ visibility }
			> 
            </button>
		</div>
	)
}

}

export default Cell;
