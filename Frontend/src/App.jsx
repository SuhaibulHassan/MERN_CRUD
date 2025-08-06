import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";
import CreateProfile from "./pages/CreateProfile";
import ProfileList from "./pages/ProfileList";
import EditUser from "./pages/EditUser";
import EditProfile from "./pages/EditProfile";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
return (
<div>
  <MenuBar/>
  <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/profile-list" element={<ProfileList />} />
        <Route path="/edit-profile/:id" element={<EditProfile/>} />
        <Route path="/profile-details/:id" element={<ProfileDetails/>}/>
      </Routes>
    </div>
 </div>
);
}
export default App;
