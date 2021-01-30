import React from 'react'
import Menu from './Menu'
import ChangePassword from './pages/ChangePassword'

import Header from './Header'
import { Route } from 'react-router-dom'
import AddUser from './pages/AddUser'
import AddBook from './pages/AddBook'
import IssueBook from './pages/IssueBook'
import UserList from './pages/UserListPage'

const Admin = ({ match }) => {
    console.log(match.path);
    return (
      <div className="wrapper ">
        <Header />
        <Menu />
        <Route
          path={`${match.url}/changepassword`}
          component={ChangePassword}
        />
        <Route path={`${match.url}/add-user`} component={AddUser} />
        <Route path={`${match.url}/add-book`} component={AddBook} />
        <Route path={`${match.url}/issue-book`} component={IssueBook} />
        <Route path={`${match.url}/all-users`} component={UserList} />
      </div>
    );
}

export default Admin
