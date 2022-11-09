import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import PostPage from './pages/PostPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';

// Components
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: 'post/:id',
    element: <PostPage />
  },
  {
    path: 'about',
    element: <AboutPage />
  }
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
