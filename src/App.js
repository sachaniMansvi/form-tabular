import './App.css';
import Form from './component/Form';
import Data from './component/data';
import { useEffect, useRef, useState } from 'react';
import Getdata from './component/Getdata';
import axios from 'axios';
function App() {
  const [finaldata, setfinaldata] = useState(Data())
  const [data, setdata] = useState({ id: "", firstname: "", lastname: "", username: "", password: "", date: "", gender: "", country: "", state: "", phone: "" })
  const [radiocheck, setradiocheck] = useState({ female: false, male: false, other: false })
  const [error, seterror] = useState({ username: "", password: "", phone: '' })
  const [date, setadate] = useState([])
  const [getstate, setstae] = useState()
  const [getcity, setcity] = useState([])
  const [dcountry, setdcountry] = useState("")
  const [dstate, setdstate] = useState("")
  const ref = useRef()
  useEffect(() => {
    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        .then((res) => setadate(res.data)
        ).catch((e) => console.log(e))
}, [])
 // return country without
 const country = [...new Set(data.map((item) => item.country))]
 country.sort()

 // return state without repeat
 const countryhandler = (e) => {
     setdcountry(e.target.value)
     let state = data.filter((state) => state.country === e.target.value)
     let singlestate = [...new Set(state.map((item) => item.subcountry))]
     singlestate.sort()
     setstae(singlestate)
 }
 // return city
 const cityhandler = (e) => {
     setdstate(e.target.value)
     let city = data.filter((city) => city.subcountry === e.target.value)
     let singlecity = [...new Set(city.map((item) => item.name))]
     singlecity.sort()
     setcity(singlecity)
     getcity.map((val) => console.log(val))
 }
  const deleteItem = (id) => {
    const filll = finaldata.filter((element, index) => {
      return element.id !== id
    })
    setfinaldata(filll)
  }
  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(finaldata))
  }, [finaldata])

  // input handler
  const inputchangeHandler = (e) => {
    let { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    })
    validation(name, value)
  }
  const validation = (name, value) => {
    switch (name) {
      case "phone":
        value.length   < 10 ? seterror({ ...error, phone: "mobile number atleast have 10 digit" }) : seterror({ error, phone: "" })
        break;
      case "username":
        if (!/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(value)) {
          seterror({...error,username:"username only havee number and letter length should be 6"})
        } else {
          seterror({...error,username:""})
        }
        break;
        case "password":
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(value)){
            seterror({...error,password:"a password must be eight characters including one uppercase letter, one special character and alphanumeric characters"})
          } else {
            seterror({...error,password:""})
          }
          break;
      // default:
        break;
    }
  }
  // radio handle change
  const radiochangeHandler = (e) => {
    const { name, value } = e.target;
    setradiocheck(
      {
        ...radiocheck,
        [e.target.value]: true
      })
    setdata({
      ...data,
      gender: value
    })
  }

  // submit event
  const submithandler = (e) => {
    e.preventDefault()
    let newref = ref.current.value;
    const selectdata = { dcountry, dstate, newref }
    setfinaldata([...finaldata, data,selectdata])
    setdata({ id: "", firstname: "", lastname: "", username: "", password: "", gender: "", date: "", country: "", state: "", city: "", phone: "" })
    setradiocheck({ ...radiocheck, female: "", male: "", other: "" })
  }
  return (
    <>
      <Form
        data={data}
        submithandler={submithandler}
        inputchangeHandler={inputchangeHandler}
        radiochangeHandler={radiochangeHandler}
        radiocheck={radiocheck}
        countryhandler={countryhandler}
        cityhandler={cityhandler}
        error={error}
        date={date}
        getstate={getstate}
        getcity={getcity}
        dcountry={dcountry}
        dstate={dstate}
        ref={ref}
      />
      <Getdata deleteItem={deleteItem} />
    </>
  );
}
export default App;
