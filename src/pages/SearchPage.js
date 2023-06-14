import Navbar from './../components/Navbar';
import SearchResults from './../components/SearchResults';
import Footer from './../components/Footer';
import RecentItems from './../components/RecentItems';
import Subscribe from './../components/Subscribe';

function SearchPage() {
  return (
    <div>
      <Navbar />
      <SearchResults />
      <RecentItems />
      <Subscribe />

      <Footer />
    </div>
  );
}

export default SearchPage;
