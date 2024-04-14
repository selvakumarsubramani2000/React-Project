import './App.css';
import Header from './Header';
import Content  from "./Content";
import Footer from './Footer';
import AddItems from "./AddItems";
import {useState} from "react";
import {Search} from './Search';
import { useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/itemss';
  const [items,setItems]=useState([]);
  const [newItem,setNewItem] = useState('');
  const [search,setSearch] = useState('');
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) { throw Error("Data not recevied")};
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
        console.log("use effect called")
      } catch (err) {
        setFetchError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000);
  },[])

  function changeHandler(id){
    const newList= items.map( (item) => (
      item.id === id ? {...item,isChecked:!item.isChecked} : item
    ));
    setItems(newList);
    localStorage.setItem("ToDo", JSON.stringify(newList));
  }
  function deleteHandler(id){
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    localStorage.setItem("ToDo", JSON.stringify(newList));

  }

  const addItem = (doto) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const addNewItem = {id,isChecked:false,doto}
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("ToDo",JSON.stringify(listItems));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(e);
    setNewItem('');
  }
  return (
    <div className="App">
          <Header/>
          <AddItems 
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmit={handleSubmit}
          />
          <Search
            Search={search}
            setSearch={setSearch}
          />
          <main>
            {isLoading && <p> loading... </p>}
            {fetchError && <p>{`Error:${fetchError}`}</p>}
            {!isLoading && !fetchError && 
              <Content
                items={items.filter((item) => (item.doto.toLowerCase().includes(search.toLowerCase())))}
                changeHandler={changeHandler}
                deleteHandler={deleteHandler}
              />
            }
          </main>
          <Footer 
          length = {items.length}/>
    </div>
  );
}

export default App;
