import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Online from '../../Pages/Online';
import Offline from '../../Pages/Offline';
import Contact from '../../Pages/Contact';
import Home from '../../Pages/Home';
import Development from '../../Pages/Development/Development';
import Teal1 from "../../Pages/6_Teal/Teal1"
import Teal2 from "../../Pages/6_Teal/Teal2"
import Seminarroom1 from "../../Pages/5_Facilities/Seminarroom1"
import Seminarroom2 from "../../Pages/5_Facilities/Seminarroom2"
import Seminarroom3 from './../../Pages/5_Facilities/Seminarroom3';
import AVRecordingRoom from "./../../Pages/5_Facilities/AVRecordingRoom"
import ConferenceRoom from "./../../Pages/5_Facilities/ConferenceRoom"
import LectureRooms from '../../Pages/5_Facilities/LectureRooms';
import PublicAddressingSystem from "../../Pages/5_Facilities/PublicAddressingSystem"
import GES from '../../Pages/4_GES/User/GES';
import HomeUser from '../../Pages/1_Home/HomeUser';
import ContactUs from '../../Pages/16_Help/Contact_us';
import GESAdmin from '../../Pages/4_GES/Admin/GesAdmin'
import VideoPlayer from '../../Pages/5_Facilities/Eoe';
import HomeAdmin from '../../Pages/1_Home/HomeAdmin';
import PastStaffNew from '../../Pages/3_Staff/pastStaffNew';
import PresentStaffNew from '../../Pages/3_Staff/presentStaffNew';
import PastStaffCRUD from '../../Pages/3_Staff/Past Staff CRUD/PastStaffCrud';
import PresentStaffCRUD from './../../Pages/3_Staff/Present Staff CRUD/PresentStaffCrud';
import PastStaffEdit from "../../Pages/3_Staff/Past Staff CRUD/PastStaffEdit";
import PresentStaffEdit from './../../Pages/3_Staff/Present Staff CRUD/PresentStaffEdit';
import PresentStaffAdd from '../../Pages/3_Staff/Present Staff CRUD/presentStaffAdd';
import PastStaffAdd from '../../Pages/3_Staff/Past Staff CRUD/pastStaffAdd';
import Login from './../../Pages/Login/Login';
import RegistrationForm from '../../Pages/Login/Register';
import LogoutButton from '../../Pages/Login/Logout';
import LandingPage from '../../Pages/15_Landing_Page/LandingPage';







const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeUser/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Online" element={<Online />} />
      <Route path="/Offline" element={<Offline />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Development" element={<Development/>} />
      <Route path="/Teal1" element={<Teal1/>} />
      <Route path="/Teal2" element={<Teal2/>} />
      <Route path="/Seminarroom1" element={<Seminarroom1/>} />
      <Route path="/Seminarroom2" element={<Seminarroom2/>} />
      <Route path="/Seminarroom3" element={<Seminarroom3/>} />
      <Route path="/AVRecordingRoom" element={<AVRecordingRoom/>} />
      <Route path="/ConferenceRoom" element={<ConferenceRoom/>} />
      <Route path="/LectureRooms" element={<LectureRooms/>} />
      <Route path="/PublicAddressingSystem" element={<PublicAddressingSystem/>} />
      <Route path="/GES" element={<GES/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/VideoPlayer" element={<VideoPlayer/>} />
      <Route path="/PastStaffNew" element={<PastStaffNew />} />
      <Route path="/PresentStaffNew" element={<PresentStaffNew/>} />

      /* Admin section */
      <Route path="/HomeAdmin" element={<HomeAdmin/>} />
      <Route path="/GESAdmin" element={<GESAdmin/>} />
      <Route path="/PastStaffCRUD" element={<PastStaffCRUD/>} />
      <Route path="/PresentStaffCRUD" element={<PresentStaffCRUD/>}/>
      <Route path="/PresentStaffEdit/:id" element={<PresentStaffEdit/>}/>
      <Route path="/PresentStaffAdd" element={<PresentStaffAdd/>}/>
      <Route path="/PastStaffEdit/:id" element={<PastStaffEdit/>}/>
      <Route path="/PastStaffAdd" element={<PastStaffAdd/>}/>

      /* Login Register Logout */
      <Route path='/LandingPage' element={<LandingPage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
      <Route path='/LogoutButton' element={<LogoutButton/>}/>


    </Routes>
  );
};

export default RoutesConfig;
