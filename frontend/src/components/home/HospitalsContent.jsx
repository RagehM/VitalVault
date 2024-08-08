import React, { useState, useEffect } from 'react'
import Card from './Card';
import Special from './Special';
const Content = () => {
  const [hospitals, setHospitals] = useState(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3000/hospitals')
      .then(res => {
        return (res.json());
      })
      .then(data => {
        setHospitals(data);
      })
  }, [flag])
  const handleHospitalDelete = (id) => {
    setHospitals(hospitals.filter(hospital => hospital.id !== id));
    setFlag(!flag);
  }
  return (
    <div className="content">
      <h1>Hospitals</h1>
      <hr />
      <div className='options'>
        {hospitals && hospitals.map(hospital => (
          <Card
            key={hospital._id}
            id={hospital._id}
            name={hospital.name}
            location={hospital.location}
            onSendData={handleHospitalDelete}
          />
        ))}
        <Special />
      </div>
    </div>
  )
}

export default Content;