import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import MyWines from './components/MyWines';
import AddWine from './components/AddWine';
import WineInfo from './components/WineInfo';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  const [wine, setWine] = useState([])
  const [brand, setBrand] = useState([])
  const [location, setLocation] = useState([])
  const [user, setUser] = useState(null);
 
  console.log(wine)

  const handelNewWine = (addNewWine)=>{
    setWine({...wine, addNewWine})
  }

  useEffect(() => {
      fetch("/wines")
      .then((r) => r.json())
      .then((data) => setWine(data));
  }, []);

  useEffect(() => {
    fetch("/brands")
    .then((r) => r.json())
    .then((data) => setBrand(data));
}, []);

useEffect(() => {
  fetch("/locations")
  .then((r) => r.json())
  .then((data) => setLocation(data));
}, []);

useEffect(() => {
  // auto-login
  fetch("/authorized").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

  // function deleteWine(deleteWine){
  //     const updatedArray = wine.filter((wines)=>{
  //         return wines.id !== deleteWine
  //     })
  //     setWine(updatedArray)
  // }

  return (
    <>
    <Header />
    <Switch>
      <Route path="/myWine">
        <MyWines  wine={wine}/>
      </Route>
      <Route path="/add_wine">
        <AddWine wine={wine} brand={brand} location={location} handelNewWine={handelNewWine} />
      </Route>
      <Route path="/wine-info/:id">
        <WineInfo  wine={wine}/>
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>

    </>
  );
}

export default App;
