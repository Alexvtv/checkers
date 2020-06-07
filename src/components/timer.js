import React, { Component } from "react";

class Timer extends React.Component {

    constructor(props) {
    	super(props);
    	this.state = {
            firstPlayerTime: this.props.startingTime,
            secondPlayerTime: this.props.startingTime
    	}
    }

    seconds = () => {
            if(this.props.stepOfFirstPlayer == true) {
                if(this.state.firstPlayerTime % 60 < 10) {
                    return('0' + this.state.firstPlayerTime % 60)
                } else {
                    return (this.state.firstPlayerTime % 60);
                }
            } else {
                if(this.state.secondPlayerTime % 60 < 10) {
                    return('0' + this.state.secondPlayerTime % 60)
                } else {
                    return (this.state.secondPlayerTime % 60);
                }
            }
    }
    minutes = () => {
            if(this.props.stepOfFirstPlayer == true) {
                if(Math.floor(this.state.firstPlayerTime/60) < 10) {
                    return('0' + Math.floor(this.state.firstPlayerTime/60))
                } else {
                    return (Math.floor(this.state.firstPlayerTime/60));
                }
            } else {
                if(Math.floor(this.state.secondPlayerTime/60) < 10) {
                    return('0' + Math.floor(this.state.secondPlayerTime/60))
                } else {
                    return (Math.floor(this.state.secondPlayerTime/60));
                }
            }
    }

    componentDidMount() {
        this.timerRecord = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerRecord);
    }

    increment() {
        if(this.props.blockDisplay !== 'block') {
            if(this.props.stepOfFirstPlayer == true) {
                this.setState({firstPlayerTime: this.state.firstPlayerTime - 1});
                if(this.state.firstPlayerTime == 0) {
                    this.props.firstPlayerLosing();
                }
            } else {
                this.setState({secondPlayerTime: this.state.secondPlayerTime - 1});
                if(this.state.secondPlayerTime == 0) {
                    this.props.secondPlayerLosing();
                }
            }
        } else {
            this.setState({ firstPlayerTime: this.props.startingTime});
            this.setState({ secondPlayerTime: this.props.startingTime});
        }
    }

    render() {
    	return (
    		<div className='timer-main'>
                <div className='timer'>
                    <p>{ this.minutes() } : { this.seconds() }</p>
                </div>
                <button className='gameType' onClick={ this.props.setShortTiming }>
                    <p>игра 5 минут</p>
                </button>
                <button className='gameType' onClick={ this.props.setMediumTiming }>
                    <p>игра 10 минут</p>
                </button>
                <button className='gameType' onClick={ this.props.setLongTiming }>
                    <p>игра 15 минут</p>
                </button>    
    		</div>
    	)
    }
}
export default Timer;