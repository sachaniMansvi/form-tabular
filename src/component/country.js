import { useEffect, useState } from "react";

function Country() {
    const [countryname, setcountry] = useState([])
    const [statename, setstatename] = useState([])
    const [storeCid, setstorecid] = useState("")
    const [update, setupdate] = useState(false)
    let basketballPlayers
    useEffect(() => {
        const countryFnc = async () => {
            const countrydata = await fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json")
            const countryFinal = await countrydata.json()
            console.log(countryFinal);
            setcountry(await countryFinal)
            setupdate(true)
        }
        countryFnc()
    }, [])
    const countryhandler = (e) => {
        const countryid = e.target.value;
        setstorecid(countryid)
    }
    // state 
    useEffect(() => {
        const stateFnc = async () => {
            const statedata = await fetch(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json`)
            const stateFinal = await statedata.json()
            console.log("state : ", stateFinal);
            setstatename(await stateFinal)
            setupdate(true)
        }
        stateFnc()
    }, [])

    return (<>
        <p>{storeCid}</p>
        <select className="custom-select" onChange={countryhandler}>
            <option selected>--select country--</option>
            {
                update &&
                countryname?.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )
                })
            }
        </select>
        <select className="custom-select" >
            <option selected>--select country--</option>
            {
                update ?
                    basketballPlayers = statename.filter(function (item) {
                        return item.country_id == storeCid;
                    }) : console.log("data not defina")
            }
            {
                update &&
                basketballPlayers.map((value) => {
                    return (
                      console.log(value.name)   
                    )
                })
            }
        </select>
    </>);
}

export default Country;