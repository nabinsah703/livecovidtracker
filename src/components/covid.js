import React, { useEffect , useState } from 'react'

const Covid = () => {
    const [data, setData] = useState([]);
    
      const getCovidData = async () =>{
          try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
            
          } catch (err) {
              console.log(err);
              
          }
         
      }
      useEffect(() => {
          getCovidData();
    
    }, []);
    
  return (
    <section>
        <h1>Live</h1>
        <h2>COVID-19 CORRONAVIRUS TRACKER</h2>
        <ul>
            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR </span>COUNTRY</p>
                        <p className='card_country'>INDIA</p>
                    </div>
                </div>
            </li>
            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>RECOVERED</p>
                        <p className='card_country'>{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>CONFIRMED</p>
                        <p className='card_country'>{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>DEATH</p>
                        <p className='card_country'>{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>ACTIVE</p>
                        <p className='card_country'>{data.active}</p>
                    </div>
                </div>
            </li>
            <li className='card_1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>LAST </span>UPDATED</p>
                        <p className='card_country'>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>

        </ul>

    </section>
  )
}

export default Covid

