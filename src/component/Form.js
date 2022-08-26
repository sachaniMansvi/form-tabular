import './Form.css'
function Form({ submithandler, inputchangeHandler, data, radiochangeHandler, radiocheck, error,date,getstate,getcity,dcountry,dstate,ref,cityhandler,country,countryhandler}) {
    console.log();
    return (
        <div className="container">
            <form onSubmit={submithandler}>
                <div className='row  text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input required className='inp text-primary' name='firstname' placeholder="Firstname" onChange={inputchangeHandler} value={data.firstname} />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input required className='inp' name='lastname' placeholder="Lastname" onChange={inputchangeHandler} value={data.lastname} />
                    </div>
                </div><br />
                <div className='row text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input required className='inp text-primary' name='username' placeholder="Username" onChange={inputchangeHandler} value={data.username} />
                        <p className='small text-danger'>{error.username}</p>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input required className='inp' name='password' placeholder="Password" onChange={inputchangeHandler} value={data.password} />
                        <p className='small text-danger'>{error.password}</p>
                    </div>
                </div><br />
                <div className='row  text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input required className='inp text-primary' name='id' placeholder="id" onChange={inputchangeHandler} value={data.id} />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input required className='inp' name='phone' type={"number"} placeholder="Phone No." onChange={inputchangeHandler} value={data.phone} />
                        <p className='small text-danger'>{error.phone}</p>
                    </div>
                </div><br />
                <div className='row text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input required className='inp text-primary' type={"date"} name="date" onChange={inputchangeHandler} value={data.date} />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input type={"radio"} className='' name='gender' onChange={radiochangeHandler} value={"female"} checked={radiocheck.female} style={{ margin: " 0% 2% 0% 0%" }} required />Female
                        <input type={"radio"} className='' name='gender' onChange={radiochangeHandler} value={"male"} checked={radiocheck.male} style={{ margin: " 0% 2% 0% 7%" }} />Male
                        <input type={"radio"} className='' name='gender' onChange={radiochangeHandler} value={"other"} checked={radiocheck.other} style={{ margin: " 0% 2% 0% 7%" }} />Other
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col-lg-4 col-md-4'>
                        <select onChange={countryhandler} className="select-title">
                            <option className='select-option'>select country</option>
                            {country?.map((val, i) => <option key={i} name="country" className='select-option' value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <select onChange={cityhandler} className="select-title">
                            <option className='select-option'>select country</option>
                            {getstate?.map((val, i) => <option key={i} name="country" className='select-option' value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <select ref={ref} className="select-title">
                            <option className='select-option'>select country</option>
                            {getcity?.map((val, i) => <option key={i} name="country" className='select-option' value={val}>{val}</option>)}
                        </select>
                    </div>
                </div>
                {/* <select onChange={cityhandler}>
                        <option>select country</option>
                        {getstate?.map((val, i) => <option key={i} name="state" value={val}>{val}</option>)}
                    </select>
                    <select ref={ref}>
                        <option >select country</option>
                        {getcity?.map((val, i) => <option key={i} name="city" >{val}</option>)}
                    </select> */}
                {/* <div className='col-lg-4 col-md-4'>
                        <select onChange={countryhandler} className="select-title" required>
                            <option name="country" value={"selectcountry"} className='select-option'>Select country</option>
                            <option name="country" value={"India"} className='select-option'>India</option>
                            <option name="country" value={"Canada"} className='select-option'>Canada</option>
                        </select>
                    </div>
                    {data.country === "India" ?
                        <div className='col-lg-4 col-md-4'>
                            <select onChange={statehandler} className="select-title" required>
                                <option name="state" value={"selectcountry"}>Select state</option>
                                <option name="state" value={"Gujarat"} className='select-option'>Gujarat</option>
                                <option name="state" value={"Maharastra"} className='select-option'>Maharastra</option>
                            </select>
                        </div> :
                        <div className='col-lg-4 col-md-4'>
                            <select onChange={statehandler} className="select-title" required>
                                <option name="country" value={"selectcountry"} className='select-option'>Select state</option>
                                <option name="country" value={"Ottawa"} className='select-option'>Ottawa</option>
                                <option name="country" value={"Calagary"} className='select-option'>Calagary</option>
                            </select>
                        </div>
                    }
                    {
                        data.state === "Gujarat" ? <div className='col-lg-4 col-md-4'>
                            <select onChange={cityhandler} className="select-title" required>
                                <option name="state" value={"selectcountry"} className='select-option'>Select city</option>
                                <option name="state" value={"Gujarat"} className='select-option'>Surat</option>
                                <option name="state" value={"Maharastra"} className='select-option'>Ahemdabad</option>
                            </select>
                        </div> :
                            <div className='col-lg-4 col-md-4'>
                                <select onChange={cityhandler} className="select-title" required>
                                    <option name="country" value={"selectcountry"} className='select-option'>Select city</option>
                                    <option name="country" value={"Ottawa"} className='select-option'>Mumbai</option>
                                    <option name="country" value={"Calagary"} className='select-option'>Pune</option>
                                </select>
                            </div>
                    }
                </div><br /><br /><br /> */}
                <div className='row text-center'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
                        <button className='btn btn-primary text-center'>Submit</button>
                    </div>
                </div>
            </form>
        </div>

    );
}
export default Form;