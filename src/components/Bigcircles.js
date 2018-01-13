import React, { Component } from 'react';
import '../css/Bigcircle.css';

class Bigcircle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			color: '#333',
			animate: 'none'
		}
		this.animateCircles = this.animateCircles.bind(this);
	}

	addToCircle(title) {
	    var title = this.state.title;
	    title.push(title);
	    this.setState({title: title});
	}

	circleColor(color) {
	    var color = this.state.color;
	    color.push(color);
	    this.setState({color: color});
	}

	animateCircles() {
		const circle = document.querySelectorAll('.big-circle');
		const circleContainer = document.querySelector('#circles-container');

		circleContainer.classList.add('disappear');

		for (let i=0;i<circle.length;i++) {
			circle[i].classList.add('rotate');
		} 
	}

	render() {
		return (
			<div id={this.props.color} className="big-circle" onClick={this.animateCircles}>{this.props.title}</div>
		);
	}
}

class Bigcircles extends Component {
	render() {
		return (
			<div id="circles-container" style={{marginTop: '80px', whiteSpace: 'no-wrap'}}>
				<Bigcircle title="recent work" color="blue" />
				<Bigcircle title="about" color="orange" />
				<Bigcircle title="contact" color="green" />
			</div>
		);
	}
}

export default Bigcircles;