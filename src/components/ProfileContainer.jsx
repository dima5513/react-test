import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import AuthRedirect from '../hoc/AuthRedirect'

class ProfileContainer extends React.Component {
	componentDidMount(){
		if(this.props.match){
			let userId = this.props.match.params.userId;
			this.props.setUserProfile(userId);
		} else {
			this.props.setUserProfile(2);
		}
	}

	render(){
		return <Profile {...this.props} />;
	}
}

const ProfileURLMatch = (props) => {
	debugger
	const match = useMatch("/profile/:userId");
	return AuthRedirect(ProfileContainer);
};



const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {
	setUserProfile,
})(ProfileURLMatch);
