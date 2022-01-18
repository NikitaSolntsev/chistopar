import React from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function Specialist(){

  const { id } = useParams();

  const [specialist, setSpecialist] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://chistopar.trendtalk.online/api/specialists/'+id).then( ( {data} ) => {
      setSpecialist(data.specialist);
    } )
  }, []);

	return (
    <div className="Specialist">
      
      <div className="container">
        <h1>{specialist.name}</h1>
      </div>
      
    </div>
	);
}

export default Specialist;