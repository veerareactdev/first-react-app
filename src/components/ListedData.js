import React, {useState , useEffect} from "react";


function ListedData(){

    const [data ,setData] =useState([])


    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then((response) =>response.json())
       .then(data => setData(data))
       console.log("@@@",data)
    },[])
     return(
        <div>
            <h2>Data Display</h2>
            {
                data.map(item=>(
                    <ul key={item.id}>{item.title}</ul>
                )
                )
                
            }
        </div>
     )
}

export default ListedData ;