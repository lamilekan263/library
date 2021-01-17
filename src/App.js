import React, {useEffect, useState, Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom'
import Menu from './components/menu/Menu';

// import Footer from "./components/footer/Footer";
import Nav from "./components/Nav/Nav";


const Home = lazy(() => import("./Views/Home/Home"));
const Contact = lazy(() => import("./Views/Contact"));
const Service = lazy(() => import("./Views/Service/Service"));
const Opac = lazy(() => import("./Views/Opac"));
const Login = lazy(() => import("./Views/auth/Login"));
const Register = lazy(() => import("./Views/auth/Register"));
const Resources = lazy(() => import("./Views/resource/Resources"));


function App() {
   const [menuOpen, isMenuOpen] = useState(false);

   const menuController = () => isMenuOpen(!menuOpen);

   useEffect(() => {
     const menuCheck = () => {
       if (window.innerWidth > 760) {
         isMenuOpen(false);
       }
     };
     window.addEventListener("resize", menuCheck);

     return () => window.removeEventListener("resize", menuCheck);
   }, [isMenuOpen]);
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="App">
        <Nav menu={menuController} />
        <Menu isMenuOpen={menuOpen} menu={menuController} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/resources/opac" component={Opac} />
          <Route exact path="/resources/free" component={Resources} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
