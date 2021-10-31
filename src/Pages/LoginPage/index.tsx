import Login from "../../Components/Login/index"
interface ILoginProps {
    authenticated: boolean;
    setAuthenticated: any;
}
const LoginPage = ({authenticated, setAuthenticated}: ILoginProps) => {
    return (
        <>
        <Login setAuthenticated = {setAuthenticated} authenticated = {authenticated}/>
        </>
    )
}
export default LoginPage