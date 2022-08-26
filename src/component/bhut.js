
import axios from "axios";
import { useEffect, useRef, useState } from "react";
function Bhut() {
    const [data, setadata] = useState([])
    const [getstate, setstae] = useState()
    const [getcity, setcity] = useState([])
    const [dcountry, setdcountry] = useState("")
    const [dstate, setdstate] = useState("")
    const ref = useRef()
    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then((res) => setadata(res.data)
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
    // submit event
    const submithandler = (e) => {
        e.preventDefault()
        let newref = ref.current.value;
        const selectdata = { dcountry, dstate, newref }
        console.log(selectdata);
    }
    return (<>
        <form onSubmit={submithandler}>
            <select onChange={countryhandler}>
                <option>select country</option>
                {country?.map((val, i) => <option key={i} name="country" value={val}>{val}</option>)}
            </select>
            <select onChange={cityhandler}>
                <option>select country</option>
                {getstate?.map((val, i) => <option key={i} name="state" value={val}>{val}</option>)}
            </select>
            <select ref={ref}>
                <option >select country</option>
                {getcity?.map((val, i) => <option key={i} name="city" >{val}</option>)}
            </select>
            <button>submit</button>
        </form>

    </>);
}
export default Bhut;