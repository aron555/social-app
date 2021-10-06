import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OnlineContacts() {

	/**
	 *
	 * @type {{dots: boolean, infinite: boolean, slidesToScroll: number, slidesToShow: number, speed: number}}
	 */
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	}

	let onlineUsers = [
		{id: 1, name: 'Елена', image: 'assets/img/avatar/avatar-8.jpg'},
		{id: 2, name: 'Принц', image: 'assets/img/avatar/avatar-7.jpg'},
		{id: 3, name: 'Юля', image: 'assets/img/avatar/avatar-13.jpg'},
	]

	let onlineUsersElements = onlineUsers.map(ou => <OnlineContact key={ou.id} name={ou.name} image={ou.image}/>);

	function OnlineContact(props) {
		return (
			<div className="top-contacts-box">
				<div className="profile-img online">
					<img src={props.image} alt={props.name}/>
				</div>
				<div className="profile-name">
					<span>{props.name}</span>
				</div>
			</div>
		)
	}

	return (
		<div className="top-online-contacts">
			<Slider {...settings}>
				{onlineUsersElements}
			</Slider>
		</div>
	)
}