import {Redirect} from 'react-router-dom';

const logout = () => {
	return(
		<Redirect to="/"></Redirect>
	)
}

export default logout;