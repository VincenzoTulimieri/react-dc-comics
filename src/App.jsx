// importazione dei file
import ElementUser from "./components/Element"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


function App() {
  const arrayLink = ['characters', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop']

  const arrayDccomics = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]

  const arrayShop = ["Shop DC", "Shop DC Collectibles"]
  const arrayDc = ["Term Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]


  const arraySite = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];
  
  return (
    <>
      <Header link={arrayLink} />
      <Main />
      <ElementUser />
      <Footer linkDccomics={arrayDccomics}  linkShop={arrayShop} linkDc={arrayDc} linkSite={arraySite}/>
    </>
  )
}

export default App
