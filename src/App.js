import React,{useState,useEffect} from 'react';
import axios from "axios";
import MasterPage from "./Components/MasterPage";

import {createBrowserHistory} from 'history';


const history = createBrowserHistory();


function App() {

    const API = 'https://rickandmortyapi.com/api/character/';
    const [characters,setCharacters] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then((res) => setCharacters(res.data.results))
            .catch((err) => console.error(err));
    },[]);

    const handlePageChange = (activePage) => {
        history.push(activePage);
    }
    return (
        <div className="App">
            <MasterPage history={history} handlePageChange={handlePageChange} characters={characters}/>
        </div>
  );
}

export default App;
