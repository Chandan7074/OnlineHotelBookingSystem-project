import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../pages/auth/Login';
import AdminRouter from './AdminRouter';
import ManagerRouter from './ManagerRouter';
import UserRouter from './UserRouter';

const MainRoute = () => {
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Default Redirect for Unauthorized Users */}
        {!userRole && <Route path="*" element={<Navigate to="/login" replace />} />}
        
        {/* Role-Based Routes */}
        {userRole === 'CUSTOMER' && <Route path="/*" element={<UserRouter />} />}
        {userRole === 'HOTELMANAGER' && <Route path="/*" element={<ManagerRouter />} />}
        {userRole === 'ADMIN' && <Route path="/*" element={<AdminRouter />} />}
        
        {/* Fallback for Unmatched Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
