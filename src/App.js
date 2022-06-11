// import logo from './logo.svg';
import './App.scss';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTree, faPen, faWater, faHome } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    // 來源 https://www.youtube.com/watch?v=C8wSNZqktOM
    <div className="App">
      <ul>
        <li>
          <a href="/#">
            {/* 不能用React的Link替代a，注意引入 */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faBook} />
            </span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faTree} />
            </span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faWater} />
            </span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faPen} />
            </span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
