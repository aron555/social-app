import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OnlineContacts(props) {

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


	let onlineUsersElements = props.onlineUsers.map(ou => <OnlineContact
		key={ou.id}
		name={ou.name}
		image={ou.image}
	/>);

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