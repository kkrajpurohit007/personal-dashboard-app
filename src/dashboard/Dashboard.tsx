import { Helmet } from 'react-helmet';
import useAuth from '../hooks/useAuth';
import {FaUser} from "react-icons/fa";
import CustomCard from "../components/utilites/CustomCard.tsx";
import CustomBreadcume from "../components/utilites/CustomBreadcume.tsx";

function Dashboard() {
    const title = 'Dashboard';

    // const { getSession } = useAuth();
    // const user = getSession();
    const user = {
        title: 'Dashboard',
        username: 'kamal',
        firstname: 'kamal',
        lastname: 'kishore',
        id: 1235,
        email: 'kamal@mail.com'
    }

    return (
        <>
            <Helmet>
                <title>{user.title}</title>
            </Helmet>
            <div className="container-fluid">
                <CustomBreadcume title={'General Dashboard'} />
                <div className='row'>
                    {/* Earnings (Monthly) Card Example */}
                    <CustomCard title={'Earnings (Monthly)'} body={'$40,000'} icon={<FaUser size='2em' />} />
                    {/* Earnings (Monthly) Card Example */}
                    <CustomCard title={'Earnings (Monthly)'} body={'$40,000'} icon={<FaUser size='2em' />} />
                    {/* Earnings (Monthly) Card Example */}
                    <CustomCard title={'Earnings (Monthly)'} body={'$40,000'} icon={<FaUser size='2em' />} progress={40} />
                    {/* Earnings (Monthly) Card Example */}
                    <CustomCard title={'Earnings (Monthly)'} body={'$40,000'} icon={<FaUser size='2em' />} progress={40} />
                </div>
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary fs-5">@{user.username}</strong>
                        <h3 className="mb-0">{user.firstname} {user.lastname}</h3>
                        <p className="card-text mb-auto text-muted">{user.id}</p>
                        <p className="card-text mb-auto text-muted">{user.email}</p>
                        <div className="d-grid d-md-block mt-4">
                            <button className="btn btn-outline-secondary btn-sm">Edit</button>
                        </div>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <div className="pt-3 pe-3">
                            <FaUser name={user.username}/>
                        </div>
                    </div>
                </div>
                <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                    <div className={"col p-4 d-flex flex-column position-static"}>
                        <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{width: 45, height: 45}}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">John Doe</p>
                                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Software engineer</p>
                                <p className="text-muted mb-0">IT department</p>
                            </td>
                            <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
                            </td>
                            <td>Senior</td>
                            <td>
                                <button type="button" className="btn btn-link btn-sm btn-rounded">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                        className="rounded-circle"
                                        alt=""
                                        style={{width: 45, height: 45}}
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Alex Ray</p>
                                        <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Consultant</p>
                                <p className="text-muted mb-0">Finance</p>
                            </td>
                            <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
                            </td>
                            <td>Junior</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-rounded btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                        className="rounded-circle"
                                        alt=""
                                        style={{width: 45, height: 45}}
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Kate Hunington</p>
                                        <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Designer</p>
                                <p className="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                                <span className="badge badge-warning rounded-pill d-inline">
                                  Awaiting
                                </span>
                            </td>
                            <td>Senior</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-rounded btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
