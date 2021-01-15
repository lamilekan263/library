import React, { Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom'

// import Footer from "./components/footer/Footer";
import Nav from "./components/Nav/Nav";


const Home = lazy(() => import("./Views/Home"));
const Contact = lazy(() => import("./Views/Contact"));
const Service = lazy(() => import("./Views/Service"));
const Opac = lazy(() => import("./Views/Opac"));
const Login = lazy(() => import("./Views/auth/Login"));
const Register = lazy(() => import("./Views/auth/Register"));


function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/resources/opac" component={Opac} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
