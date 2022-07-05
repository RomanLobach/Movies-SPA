import MoviesRoute from "./Route"
import Search from "./Pages/Search/component"
import HeaderContent from "./Pages/Header";
import FooterContent from "./Pages/Footer";

import './styles.scss';

const Movies = () => {
  return (
    <>
      <HeaderContent/>
      <main className="main">
        <Search/>
        <MoviesRoute/>
      </main>
      <FooterContent/>
    </>
  )
}

export default Movies;