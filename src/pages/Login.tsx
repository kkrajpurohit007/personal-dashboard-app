import {Helmet} from "react-helmet";

const Login = () => {
    const title = 'Login'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        <div className={'row'}>
            Login
        </div>
        </>
    )
}
export default Login;