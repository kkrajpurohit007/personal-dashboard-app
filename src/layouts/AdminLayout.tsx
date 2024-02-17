import {  Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import AdminNavbar from '../components/AdminNavbar.tsx';
import Sidebar from '../components/Sidebar';
// import useAuth from '../hooks/useAuth';

function AdminLayout() {
  // const auth = useAuth();
  // const { pathname } = useLocation();

  // if (auth.isAuth()) {
    return (
      <>
        <AdminNavbar />
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <Sidebar />
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
              <Footer />
            </main>
          </div>
        </div>
      </>
    );
  // }

  // return <Navigate to={`/login?redirect=${encodeURIComponent(pathname)}`} replace />;
}

export default AdminLayout;
