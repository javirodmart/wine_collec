import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch,useParams,useHistory } from 'react-router-dom';
import AllWines from './components/AllWines';
import AllBrands from './components/AllBrands'
import AllLocations from './components/AllLocation';
import AddWine from './components/AddWine';
import AddBrand from './components/AddBrand';
import AddLocation from './components/AddLocation';
import WineInfo from './components/WineInfo';
import BrandInfo from './components/BrandInfo';
import LocationInfo from './components/LocationInfo';
import SignUp from './components/Signup';
import Login from './components/Login';
import GuestHeader from './components/GuestHeader';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
const UserContext = React.createContext;

function App() {
  const [wine, setWine] = useState([])
  const [brand, setBrand] = useState([])
  const [location, setLocation] = useState([])
  const [user, setUser] = useState([]);
  const { id } = useParams()
  const [wineId,serWineId] = useState([])
  const history = useHistory()
  const [admin,setAdmin] = useState([])

 


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
    fetch("/authorized_user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user),setAdmin(user.admin));
      }else {
        setUser(null)
        history.push("/login")
    }
    });
  }, []);

  const updateUser = (user) => setUser(user)

  const handelNewWine = (addNewWine) => {
    const newWine = wine.filter((wines)=>{
     return wines.name !== addNewWine.name
    })
    setWine({ ...wine, addNewWine })
  }

  const handelNewBrand = (addNewBrand) => {
    setBrand({ ...brand, addNewBrand })
  }

  const handelNewLocation = (addNewLocation) => {
    setLocation({ ...location, addNewLocation })
  }
 
  function handleUpdateItem(updatedItem) {
    const updatedItems = wine.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setWine(updatedItems);
  }

  function deleteWine(deleteWine) {
    const updatedArray = wine.filter((wines) => {
        return wines.id !== deleteWine
    })
    setWine(updatedArray)
}

function deleteBrand(deleteBrand) {
  const updatedArray = brand.filter((brands) => {
      return brands.id !== deleteBrand
  })
  setBrand(updatedArray)
}



  // function deleteWine(deleteWine){
  //     const updatedArray = wine.filter((wines)=>{
  //         return wines.id !== deleteWine
  //     })
  //     setWine(updatedArray)
  // }
  if(!user) return(
    <>
    <GuestHeader />
    <Switch>
    <Route exact path="/login">
    <Login updateUser={updateUser}/>
    </Route>
      <Route path="/signup">
        <SignUp updateUser={updateUser} />
      </Route>
    </Switch>
    </>
  )  


  return (
    <>
        <Header user={user} updateUser={updateUser} setUser={setUser} />
        <Switch>
        <Route path="/home/:id">
            <Home user={user}/>
          </Route>
          <Route path="/dashboard/:id">
            <Dashboard user={user}/>
          </Route>
          <Route path="/all_wines">
            <AllWines handelNewWine={handelNewWine} admin={admin} user={user} wine={wine} />
          </Route>
          <Route path="/all_brands">
            <AllBrands user={user} brand={brand} deleteBrand={deleteBrand} />
          </Route>
          <Route path="/all_locations">
            <AllLocations user={user} location={location} handelNewLocation={handelNewLocation} />
          </Route>
          <Route path="/add_wine">
            <AddWine wine={wine} brand={brand} location={location} deleteWine={deleteWine} handelNewWine={handelNewWine} />
          </Route>
          <Route path="/add_brand">
            <AddBrand wine={wine} brand={brand} location={location} deleteWine={deleteWine} handelNewBrand={handelNewBrand} />
          </Route>
          <Route path="/add_location">
            <AddLocation brand={brand} location={location} deleteWine={deleteWine} handelNewWine={handelNewWine} />
          </Route>
          <Route path="/wine-info/:id">
            <WineInfo wineData={wine}  user={user} brand={brand} location={location} onUpdateItem={handleUpdateItem} />
          </Route>
          <Route path="/brand-info/:id">
            <BrandInfo BranData={wine} brand={brand} user={user} location={location} deleteBrand={deleteBrand} onUpdateItem={handleUpdateItem} />
          </Route>
          <Route path="/location-info/:id">
            <LocationInfo BranData={wine} brand={brand} user={user} location={location} deleteBrand={deleteBrand} onUpdateItem={handleUpdateItem} />
          </Route>
        </Switch>
    </>)
}

export default App;
