// importazione dei file
import ElementUser from "./components/Element"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


function App() {
  const arrayLink = ['characters', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop']

  const arrayFooter = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Videos",
    "News",
    "Shop DC",
    "Shop DC Collectibles",
    "Term Of Use",
    "Privacy policy (New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us",
    "DC",
    "MAD Magazine",
    "DC Kids",
    "DC Universe",
    "DC Power Visa"
  ];
  return (
    <>
      <Header link={arrayLink} />
      <Main />
      <ElementUser />
      <Footer link={arrayFooter} />
    </>
  )
}

export default App
