import {Helmet} from "react-helmet";

const Dashboard = () => {
    const title = 'Dashboard'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        <div className='row'>
            Dashboard
        </div>
            </>
    )
}
export default Dashboard;