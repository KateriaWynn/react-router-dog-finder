import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './dog-list.scss';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <div key={uuid()} className="dog">
          <img className="dog-image" src={dog.src} alt={dog.name} />
          <div className="dog-name">
            <Link exact to={`/dogs/${dog.name.toLowerCase()}`}>
              {dog.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
