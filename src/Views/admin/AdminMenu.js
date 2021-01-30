import React from 'react'
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div>
      <aside className="main-sidebar bg-green-700 text-white elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="pr-5 text-md font-weight-light">
            FMCA Medical Library
          </span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User "
              />
            </div>
            <div className="info">
              <h1 className="text-lg font-weight-light">Welcome Admin</h1>
              <h1>Olalekan Ibrahim</h1>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item text-white">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="fas fa-tachometer-alt text-white mr-3"></i>
                  <p className="text-white">Dashboard</p>
                </a>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link text-white">
                  <i className="nav-icon fas fa-user"></i>
                  <p>
                    My Profile
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/changepassword" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">change Password</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">Update Details</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link text-white">
                  <i className="nav-icon fas fa-book-medical"></i>
                  <p>
                    Manage Books
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/add-book" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">Add Books</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">View Books</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white">
                <Link to="/admin/issue-book" className="nav-link">
                  <i className="fas fa-folder-open text-white mr-3"></i>
                  <p className="text-white">Issue Books</p>
                </Link>
              </li>
              <li className="nav-item text-white">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="fas fa-list text-white mr-3"></i>
                  <p className="text-white">View All Issued Books</p>
                </a>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link text-white">
                  <i className="nav-icon fas fa-users"></i>
                  <p>
                    Manage Users
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/add-user" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">Add User</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-users" className="nav-link">
                      <i className="far fa-circle nav-icon text-white"></i>
                      <p className="text-white">View All Users</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="fas fa-sign-out-alt text-white mr-3"></i>
                  <p className="text-white">Log Out</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default AdminMenu;
