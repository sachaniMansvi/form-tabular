const Data=()=>{
    const data=localStorage.getItem("formdata")
    if (data) {
        return JSON.parse(data)
    }
    else{
        return []
    }
}
export default Data;