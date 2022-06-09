import logo from './logo.svg';
import './App.css';
import CommentState from './Context/commentState';
import About from './Component/About';
import Add from './Component/Add';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllIssue from './Component/AllIssue';
import Description from './Component/Description';

function App() {
  return (

    <CommentState>
      <BrowserRouter>
        <ul>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/allissue">ALL ISSUES</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/allissue">
            <AllIssue />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:id" children={<Description />} />







        </Switch>
      </BrowserRouter >
    </CommentState >

  );
}

export default App;
