const LoginStatus = (props) => {
    if (props.isLoggedIn) {
        return (<div>Welcome,{props.name}</div>)
    } else {
        return (<div>Please Login</div>)
    }
}
export default LoginStatus;