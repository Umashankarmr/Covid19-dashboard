import React, {useEffect, useState} from 'react'
import '../stateWiseData/statewise.css'
const Statewise = () => {
    
    const [data, setData] = useState([]);

    const getCovidData =async () =>{
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise)
        setData(actualData.statewise);
    }

    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <>
            <div className='container-fluid mt-0'>
                <div className='main-heading sticky-top'>
                <h1 className= 'mb-0 py-2 text-center'>India COVID-19 Status</h1>
                </div>
                <div className='table-responsive table_style'>
                    <table className='table table-hover table-striped mx-0 text-center'>
                        <thead className='table-dark '>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                                
                            </tr>
                        </thead>
                       <tbody>
                           {
                               data.map((curElm, index)=>{
                                   return(
                                    <tr>
                                    <td className='green'> {curElm.state} </td>
                                    <td className='green'>{curElm.confirmed}</td>
                                    <td className='green'>{curElm.recovered}</td>
                                    <td className='death'>{curElm.deaths}</td>
                                    <td className='green'>{curElm.active}</td>
                                    <td>{curElm.lastupdatedtime}</td>
                                </tr>
                                   )
                               })
                           }
                       
                       </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}
export default Statewise;