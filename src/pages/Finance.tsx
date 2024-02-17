import {Helmet} from "react-helmet";

const Finance = () => {
    const title = 'Finance Dashboard'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        <div className={'row'}>
            Finance
        </div>
            </>
    )
}
export default Finance;