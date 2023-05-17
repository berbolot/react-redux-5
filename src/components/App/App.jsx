import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../Posts/Posts";
import PostsDetails from "../Posts/PostDetails";
import { AboutPage, MainPage } from "../../pages";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const App = () => {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<AboutPage />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<PostsDetails />}/>
        <Route path="*" element={<div>Not found 404</div>} />
      </Routes>
    </Router>
  );
};

export default App;
