import React, { useState } from "react";
function Radio() {
const [data,setdata]=useState("")
    const [checked, setChecked] = useState({ apple: false, orange: false ,banana:false});
    const changeRadio = (e) => {
        setChecked(() => {
          return {
            apple: false,
            orange: false,
            banana:false,
            [e.target.value]: true
          };
        });
        setdata(...data, e.target.value)
      };
const subimthandle =()=>{
setChecked({ apple: false, orange: false, banana:false})
setdata("")
}
    return ( 
        <>
         <button
       onClick={subimthandle}
      >
        uncheck
      </button>
      <label>
        <input
          type="radio"
          checked={checked.apple}
          value="apple"
          name="choice"
          onChange={changeRadio}
        />
        apple
      </label>

      <label>
        <input
          type="radio"
          checked={checked.orange}
          value="orange"
          name="choice"
          onChange={changeRadio}
        />
        orange
      </label>
      <label>
        <input
          type="radio"
          checked={checked.banana}
          value="banana"
          name="choice"
          onChange={changeRadio}
        />
        Banana
      </label>
      <p>{data}</p>
        </>
     );
}
export default Radio;