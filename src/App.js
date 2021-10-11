import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import NotFound from './Componants/NotFound/NotFound';
import Header from './Componants/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './Componants/Shipping/Shipping';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import PlaceOrder from './Componants/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>

     <Router>
       <Header></Header>
       <Switch>

         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/register">
            <Register></Register>
         </Route>

         <PrivateRoute path="/shipping">
            <Shipping></Shipping>
         </PrivateRoute>
         <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         
         <Route path="*">
            <NotFound></NotFound>
         </Route>
       
       </Switch>
     </Router>

     </AuthProvider>
    </div>
  );
}

export default App;
