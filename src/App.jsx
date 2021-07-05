import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import NavBar from './components/navbar/NavBar';
import dogPics from './images/index';
import './app.scss';

function App({ dogs }) {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="left">
          <a href="/dogs" className="logo">
            DOG FINDER
          </a>
        </div>
      </div>
      <div className="dogs">
        <Router>
          <NavBar dogs={dogs} />
          <Routes dogs={dogs} />
        </Router>
      </div>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: dogPics.whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Duke',
      age: 3,
      src: dogPics.duke,
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      name: 'Perry',
      age: 4,
      src: dogPics.perry,
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: dogPics.tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
};

export default App;
