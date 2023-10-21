
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import RootRouter from './router.jsx'; // import router file, check router.jsx is exported first or else it gives error.
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; //to use bootstrap in app
import "@fortawesome/fontawesome-free/css/all.min.css"; //to use font-awesome in app



// to show all the data in webpage you have to import a router file and RouterProvider from 'react-router-dom'.
// after that this file implements code on index.html file in Public folder
// that file shows output in browser

const root = ReactDOM.createRoot(document.getElementById('root'));   
root.render(<RouterProvider router={RootRouter} />);

