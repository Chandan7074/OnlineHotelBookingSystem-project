import { Route, Routes } from 'react-router-dom';
import Logout from '../components/Logout';
import Footer from '../components/user/Footer';
import Navbar from '../components/user/Navbar';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import BookingConfirmationPage from '../pages/user/BookingConfirmationPage';
import HomePage from '../pages/user/HomePage';
import HotelsList from '../pages/user/HotelsList';
import RoomDetailsPage from '../pages/user/RoomDetailsPage';
import RoomListPage from '../pages/user/RoomListPage';

const UserRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomListPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels/:hotelId/rooms" element={<RoomListPage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserRouter;
