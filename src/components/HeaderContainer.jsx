import React from "react";
import Header from "./Header";
import { signin } from "../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
	componentDidMount(){
		this.props.signin();
	}

	render(){
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	userId: state.auth.userId,
	login: state.auth.login,
	email: state.auth.email,
});
export default connect(mapStateToProps, {
	signin,
})(HeaderContainer);
