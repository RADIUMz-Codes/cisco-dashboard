import { useEffect, useState } from "react";
import "./App.css";
import Statcards from "./components/Statcards";
import Tables from "./components/Tables";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);
    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                setData(res.data);
                let tempData = res.data;

                let tempLabels = tempData.map((obj) => obj.jira_ticket_status);
                let labelSet = new Set(tempLabels);
                let processedLabels = [...labelSet];
                setLabels(processedLabels);

                let tempValues = {};
                for (let data of tempLabels) {
                    if (tempValues[data]) {
                        tempValues[data]++;
                    } else {
                        tempValues[data] = 1;
                    }
                }

                let valArray = [];
                for (let label of processedLabels) {
                    valArray.push(tempValues[label]);
                }
                setValues(valArray);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Statcards labels={labels} values={values} />
            <Tables data={data} />
        </>
    );
}

export default App;
