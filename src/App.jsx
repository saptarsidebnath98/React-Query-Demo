import {
  Link,
  Outlet
} from "react-router-dom";


function App() {

  return (
    <div>
      <nav className="bg-amber-200 px-4 py-2 items-center shadow-lg">
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>

      <div className="px-4 py-2">
        <Outlet />
      </div>
    </div>

  )
}

export default App
