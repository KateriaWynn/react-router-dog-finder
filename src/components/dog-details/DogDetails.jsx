import { useParams } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import './dog-details.scss';

export default function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  console.log(dog);

  return (
    <div className="dog-details">
      <div className="dog-name">
        <h1>{dog.name.toUpperCase()}</h1>
      </div>
      <div className="dog-age">
        <p className="age">Age: {dog.age}</p>
      </div>
      <div className="dog-image">
        <img className="image" src={dog.src} alt={dog.name} />
      </div>
      <div className="dog-facts">
        {dog.facts.map((fact) => (
          <li className="fact">{fact}</li>
        ))}
      </div>
    </div>
  );
}
