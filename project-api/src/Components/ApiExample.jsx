import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ApiExample = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetch("http://justjayapi.000webhostapp.com/allusers").then((res)=> {console.log(res);  return res.json()}).then((result)=>{
            FetchAllUsersData()
    },[])
    const FetchAllUsersData = async () => {
        // const response = await fetch("http://justjayapi.000webhostapp.com/allusers").then((res) => res.json()).then((result) => {
        const response = await fetch("https://jayramin.000webhostapp.com/allusers").then((res) => res.json()).then((result) => {
            // console.log(result);
            setData(result)
            setLoading(true)
            // return response
        })
    }
    let MenuData = "";
    if (loading) {
        // MenuData = Object.entries(data.Data).map(([key,value],i) => {
        //     console.log("value is ",value.username);
        //     console.log("key is ",key);
        //    return <li key={key}>{value.username}</li>
        // })
        console.log(data.Msg);
        MenuData = Object.entries(data.Data).map((res) => {
            console.log("value is ",res);
            // console.log("key is ",key);
           return <li key={res[0]}>{res[1].username}</li>
        })
        
    } else {
        MenuData = <>No data</>
        
    }
    return (
        <>
            {/* {JSON.stringify(data)} */}
            {/* anything */}
            {/* <li>{data.Msg}</li> */}
            {MenuData}
        </>
    );
};

export default ApiExample;