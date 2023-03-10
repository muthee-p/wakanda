import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function Insurance() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:3001/health').then((response) =>{
     
      setHealthTopics(response.data);
    });
  }, []);

  if (!healthTopics) {
    return <div>Loading...</div>;
  }

  const selectedTopic = healthTopics.find(topic => topic.id === selectedTopicId);

  return (
    <div>
      <h1 className='text-4xl'>{selectedTopic.title}</h1>

      <p className='mt-4'>{selectedTopic.paragraph_one}</p>
      <p className='mt-4'>{selectedTopic.paragraph_two}</p>
      <p className='mt-4'>{selectedTopic.paragraph_three}</p>
      <p className='mt-4'>{selectedTopic.paragraph_four}</p>
      <p className='mt-4'>{selectedTopic.paragraph_five}</p>
      <p className='mt-4'>{selectedTopic.paragraph_six}</p>


    <h5 className='mt-4 mb-4'>Follow the link to get your health insurace</h5>

    <button className='bg-amber-500 p-3 rounded-3xl'>
      <Link to='insuranceform'>Health Insurance Application</Link>
    </button>
      
    </div>
  );
}

export default Insurance;
