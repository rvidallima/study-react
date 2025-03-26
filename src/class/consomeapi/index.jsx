import { useEffect, useState } from "react";

export default function ConsomeApi() {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      });
      
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

    const [data, setData] = useState([])
    const handleBuscar = () => {
        fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.text())
        .then(result => setData(result))
        .catch(error => console.log('error', error));      
    }
    if (data == null)
        handleBuscar()
    return (
            <div>
                <p><strong>Consome API</strong> {data}</p>
            </div>
    )
}