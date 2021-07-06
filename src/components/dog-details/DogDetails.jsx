import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './dog-details.scss';

export default function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((dog) =>
    dog.name.toLowerCase() === name.toLowerCase() ? dog : null
  );

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
          <li key={uuid()} className="fact">
            {fact}
          </li>
        ))}
      </div>
    </div>
  );
}
