import {Helmet} from "react-helmet";

const Signup =() => {
    const title = 'signup'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className='row'>Signup</div>
        </>
    )
}
export default Signup;