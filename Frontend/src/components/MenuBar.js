import React from "react";
import { Link } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
function MenuBar() {
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to={"/"} className="nav-link">MERN CRUD App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to={"/create-user"} className="nav-link">Create User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/user-list"} className="nav-link">User List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/create-profile"} className="nav-link">Create Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/profile-list"} className="nav-link">Profile List</Link>
                    </li>
                    <div className="my_name btn btn-primary">
                        A Suhaibul Hassan<br/>
                        24IT063
                    </div>
                </ul>
            </div>
        </div>
    </nav>
);
}
export default MenuBar;
