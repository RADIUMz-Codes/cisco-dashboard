import { useEffect, useState } from "react";
import "./App.css";
import Statcards from "./components/Statcards";
import Tables from "./components/Tables";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    
    const [doughnutData,setDoughnutData] = useState([]);
    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                setData(res.data);
                setDoughnutData(res.data);
                console.log("test");
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Statcards doughnutData={doughnutData} />
            <Tables data={data} setDoughnutData = {setDoughnutData}/>
        </>
    );
}

export default App;
