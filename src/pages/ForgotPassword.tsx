import {Helmet} from "react-helmet";

const ForgotPassword = () => {
    const title = 'Forgotpassword'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        <div className='row'>
            ForgotPassword
        </div>
            </>
    )
}
export default ForgotPassword;