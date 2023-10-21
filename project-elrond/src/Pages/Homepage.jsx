
import React, { useState, useEffect } from 'react';

const FetchAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => response.json())
            .then((result) => {
                console.log("data Print" ,result);
                setData(result);
            });
    }, []);

    let fechdata = data.map((val, index) => {
        return (
            <tr style={{ border: '1px solid black',color:'aqua' }} key={index}>
                <td style={{ border: '1px solid black', padding: "10px" }} >{val.id}</td>
                <td style={{ border: '1px solid black', textAlign: "center", padding: "10px" }}>{val.userId}</td>
                <td style={{ border: '1px solid black', padding: " 0 10px" }}> <img src={val.url} alt="#none" srcset="" /></td>
                <td style={{ border: '1px solid black', padding: " 0 10px" }}> <img src={val.thumbnailUrl} alt="#none" srcset="" /></td>
                <td style={{ border: '1px solid black', textAlign: "center" }}>{JSON.stringify(val.completed)}</td>
            </tr>
        );
    });

    return (
        <div>
            <table style={{ border: '1px solid black', width: "100%" }}>
                {fechdata}
            </table>
        </div>
    );
};

export default FetchAPI;
