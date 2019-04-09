import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h3 className="center">Your Timeline</h3>
				<ul className="dashboard-list">
					{this.props.tweetIds.map(tweetId => (
						<li key={tweetId}>
							<Tweet id={tweetId} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ tweets }) {
	return {
		tweetIds: Reflect.ownKeys(tweets).sort(
			(a, b) => tweets[b].timestamp - tweets[a].timestamp
		)
	};
}

export default connect(mapStateToProps)(Dashboard);
