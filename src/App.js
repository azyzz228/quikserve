import SignIn from "./screen/SignIn";
import SignUp from "./screen/SignUp";
import { app } from './firebaseConfig';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { AuthProvider } from "./Auth";
import { getAuth, signOut } from "firebase/auth";
import Test from "./components/Test";
import SpeechToText from "./components/SpeechToText";
import AddPatient from "./screens/AddPatient";
import HomePageScreen from "./screens/HomePageScreen";
import OneTableScreen from "./screens/OneTableScreen";
import TablesScreen from "./screens/TablesScreen";
import Login from "./screens/Login";
import AddNewOrderScreen from "./screens/AddNewOrderScreen";
import SecondScreen from "./screens/SecondScreen";

function App() {
  /*
  const auth = getAuth();
  const user = auth.currentUser;
*/
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {user ? <div><p> {`signed in as ${user.email}`}</p><button className="bg-blue-700 text-2xl text-white rounded-xl p-4 w-full mt-4" onClick={() => { signOut(auth); alert("refresh page") }}>Sign Out</button></div> : <p>No user found. go to /signup</p>}
          </Route>


          <Route exact path='/login'>
            <div className="flex justify-center bg-black">
              <Login />
            </div>
          </Route>


          <Route exact path='/signup'>
            <div className="flex justify-center bg-black">
              <SignUp />
            </div>

          </Route>

          <Route exact path='/home/'>
            <div className="flex justify-center">
              <HomePageScreen />
            </div>


          </Route>

          <Route path="/table/:id" exact>
            <div className="flex justify-center">

              <OneTableScreen />
            </div>
          </Route>

          <Route path="/tables" exact>
            <div className="flex justify-center">

              <TablesScreen />
            </div>
          </Route>

          <Route path="/new-order/:id" exact>
            <div className="flex justify-center">
              <AddNewOrderScreen />
            </div>
          </Route>


        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
