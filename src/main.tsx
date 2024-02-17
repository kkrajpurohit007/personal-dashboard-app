import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min';
import App from './App.tsx'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Settings from "./pages/settings/Settings.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";

function Logout() {
    return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          {/*<AuthProvider>*/}
              <Routes>
                  <Route path="/" element={<MainLayout />}>
                      <Route path="/" element={<App />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="login" element={<Login />} />
                      <Route path="logout" element={<Logout />} />
                      <Route path="signup" element={<Signup />} />
                      <Route path="forgot" element={<ForgotPassword />} />
                      <Route path="not-found" element={<NotFound />} />
                      <Route path="*" element={<Navigate to="/not-found" />} />
                  </Route>
                  <Route path="/admin" element={<AdminLayout />}>
                      <Route path="" element={<Dashboard />} />
                      {/*<Route path="profile" element={<Profile />} />*/}
                      {/*<Route path="users" element={<Users />} />*/}
                      <Route path="settings" element={<Settings />} />
                  </Route>
              </Routes>
          {/*</AuthProvider>*/}
      </BrowserRouter>
  </React.StrictMode>,
)
