import './Form.css'
function Form({ submithandler, inputchangeHandler, data }) {
    console.log();
    return (
        <div className="container">
            <form onSubmit={submithandler}>
                <div className='row text-center'>
                <input className='inp text-primary' name='id' placeholder="id" onChange={inputchangeHandler} value={data.id}/><br/><br/>  

                </div>
                <div className='row  text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input className='inp text-primary' name='firstname' placeholder="Firstname" onChange={inputchangeHandler} value={data.firstname}/>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input className='inp' name='lastname' placeholder="Lastname" onChange={inputchangeHandler} value={data.lastname}/>
                    </div>
                </div><br/>
                <div className='row text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' >
                        <input className='inp text-primary' name='username' placeholder="Username" onChange={inputchangeHandler} value={data.username} />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <input className='inp' name='password' placeholder="Password" onChange={inputchangeHandler} value={data.password} />
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center'>
                        <button className='btn btn-primary text-center'>Submit</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Form;