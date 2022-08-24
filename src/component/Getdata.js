import Icon from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash"
function Getdata({ deleteItem }) {
    let data = JSON.parse(localStorage.getItem("formdata"));
    return (<>
        <div className="container">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Password</th>
                        <th scope="col">Delete</th>

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
                                <td  > <Icon onClick={() => deleteItem(item.id)} style={{ color: "red" }} icon={trash}></Icon></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>

    </>

    );
}
export default Getdata;