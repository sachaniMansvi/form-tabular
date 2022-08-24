function Getdata({deleteItem}) {
  
    let data = JSON.parse(localStorage.getItem("formdata"));
    return (<>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Password</th>
                    {/* <th scope="col">LastName</th> */}
                    
                </tr>
            </thead>
            <tbody>
                {data?.map((item, i) => {
                    return (
                        <tr key={i}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td style={{pointer:"cursor"}} onClick={()=>deleteItem(item.id)}>delete</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </>

    );
}
export default Getdata;