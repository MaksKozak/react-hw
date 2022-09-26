import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom"

function App() {

    return (
      <div>
          <ul>
              <li><Link to = {'/todos'}>Go to todos</Link></li>
              <li><Link to = {'/albums'}>Go to albums</Link></li>
              <li><Link to = {'/comments'}>Go to comments</Link></li>
          </ul>

          <hr/>
          <hr/>
      </div>
  );
}

export default App;