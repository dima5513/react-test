import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
	follow, unfollow,
	getUsers, getCurrentUsers,
} from "../redux/users-reducer";

class UsersAPIComponent extends React.Component {
	componentDidMount(){
		if(this.props.users.length !== 0){
			this.render();
		} else {
			this.props.getUsers(this.props.currentPage, this.props.countItems);
		}
	}

	onPageChanged = (pageNumber) => {
		this.props.getCurrentUsers(pageNumber, this.props.countItems);
	};

	render(){
		return (
			<Users
				isFetching={this.props.isFetching}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				currentPage={this.props.currentPage}
				countItems={this.props.countItems}
				totalCount={this.props.totalCount}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	currentPage: state.usersPage.currentPage,
	countItems: state.usersPage.countItems,
	totalCount: state.usersPage.totalCount,
	isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, {
	getUsers,
	getCurrentUsers,
	follow,
	unfollow,
})(UsersAPIComponent);
