
import { useState} from 'react';

const Home = () => {

  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);
  const [from, setFrom] = useState('Boston');
  const handleClick = (e) => {
   setName('luigi');
   setAge(30);
   setFrom('Salt lake City');
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} age is {age} years old and is from {from}</p>
      <button onClick={handleClick}>Click me</button>
      
    </div>
  );
}
  
  export default Home; 