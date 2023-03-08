import React, { useEffect, useState } from "react";
import axios from "axios";

function Facilities() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(3);

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
      
    </div>
  );
}

export default Facilities;
