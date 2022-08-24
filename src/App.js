// import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Data from './component/data';
import { useEffect, useState } from 'react';
import Getdata from './component/Getdata';
function App() {
  const [finaldata,setfinaldata]=useState(Data())
  const [data,setdata]=useState({id:"",firstname:"",lastname:"",username:"",password:""})
  const deleteItem =(id)=>{
    console.log(id);
    const filll=finaldata.filter((element,index)=>{
        return element.id!==id
    })
    setfinaldata(filll)
}
  useEffect(() => {
    localStorage.setItem('formdata',JSON.stringify(finaldata))
  },[finaldata])
  const inputchangeHandler =(e)=>{
   let{ name,value}=e.target;

   setdata({
    ...data,
    [name]:value
   })
  }
  const submithandler =(e)=>{
    setfinaldata([...finaldata,data])
    e.preventDefault()
    setdata({id:"",firstname:"",lastname:"",username:"",password:""})

  }
  return (
    <>
      <Form
      data={data}
      submithandler={submithandler}
      inputchangeHandler={inputchangeHandler}
       />
       <Getdata deleteItem={deleteItem}/>
    </>
  );
}

export default App;
