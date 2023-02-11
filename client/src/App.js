import { useState, useEffect, createContext } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch,useParams } from 'react-router-dom';
import AllWines from './components/AllWines';
import AddWine from './components/AddWine';
import AddBrand from './components/AddBrand';
import AddLocation from './components/AddLocation';
import WineInfo from './components/WineInfo';
import SignUp from './components/Signup';
import Login from './components/Login';
import GuestHeader from './components/GuestHeader';
import Dashboard from './components/Dashboard';
export const UserContext = createContext([]);

function App() {
  const [wine, setWine] = useState([])
  const [brand, setBrand] = useState([])
  const [location, setLocation] = useState([])
  const [user, setUser] = useState([]);
  const { id } = useParams()
  const [wineId,serWineId] = useState([])

 


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
    fetch("/authorized_user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const updateUser = (user) => setUser(user)

  const handelNewWine = (addNewWine) => {
    setWine({ ...wine, addNewWine })
  }
  const handelUpdatedWine = (updateWine) => {
    setWine({ ...wine, updateWine })
  }
  // const handelUpdateWine = (wineUpdate)=> setWine{}

  // const updatedWine = {...wine}
  // updatedWine = wine.map((wines) => wines.id === wineUpdate.id ? wineUpdate : wines)
  // setWine(updatedWine)

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
          <Route path="/dashboard/:id">
            <Dashboard user={user}/>
          </Route>
          <Route path="/all_wines">
            <AllWines user={user} wine={wine} />
          </Route>
          <Route path="/add_wine">
            <AddWine wine={wine} brand={brand} location={location} deleteWine={deleteWine} handelNewWine={handelNewWine} />
          </Route>
          <Route path="/add_brand">
            <AddBrand wine={wine} brand={brand} location={location} deleteWine={deleteWine} handelNewWine={handelNewWine} />
          </Route>
          <Route path="/add_location">
            <AddLocation wine={wine} brand={brand} location={location} deleteWine={deleteWine} handelNewWine={handelNewWine} />
          </Route>
          <Route path="/wine-info/:id">
            <WineInfo wineData={wine} brand={brand} location={location} onUpdateItem={handleUpdateItem} />
          </Route>
        </Switch>
    </>)
}

export default App;
