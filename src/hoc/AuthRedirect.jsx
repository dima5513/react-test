import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRedirect = (Component) => {
	debugger
	return (props) => {
		if(props.isAuth) return <Navigate to={'/login'}/>;
		return <Component {...props}/>;
	};
};

export default AuthRedirect;