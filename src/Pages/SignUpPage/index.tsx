import SignUp from "../../Components/SignUp/index"
interface ILoginProps {
    authenticated: boolean;
}
const SignUpPage = ({authenticated}: ILoginProps) => {
    return (
        <>
        <SignUp authenticated = {authenticated}/>
        </>
    )
}
export default SignUpPage