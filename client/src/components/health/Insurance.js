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
      <h1>{selectedTopic.title}</h1>

        <p>{selectedTopic.paragraph_one}</p>

		<p>{selectedTopic.paragraph_two}</p>
		<p>{selectedTopic.paragraph_three}</p>
		<p>{selectedTopic.paragraph_four}</p>
		<p>{selectedTopic.paragraph_five}</p>
		<p>{selectedTopic.paragraph_six}</p>


    <h5>Follow the link to get your health insurace</h5>

    <button>
      <Link to='health/insuranceform'>Health Insurance Application</Link>
    </button>
      
    </div>
  );
}

export default Insurance;
