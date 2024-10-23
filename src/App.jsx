
import './App.css'
import Pic1 from "./images/pic1.jpg"
import Pic2 from "./images/pic2.jpg"
import Pic5 from './images/pic5.jpg'
import Pic6 from './images/pic6.jpg'
import ProfileCard from './Component/ProfileCard/ProfileCard.Jsx'
import Product from './Component/Product/Product.Jsx'
import PostList from "./PostList/PostList.Jsx"

function App() {

  return (
    <>
      <div>
<ProfileCard  name=" Eze Chinny" age="28" location="Anambra" src={Pic1} altText="fine Pic"  />
<ProfileCard  name=" Emmy Waya" age="38" location="PH"  src={Pic2} altText="fine Pic" />
      </div>
      <div>
        <Product src={Pic5} altText="fine Pic" productName="Ladies Boot" description="Ladies comfy boot in all colours" price="N20000"/>
        <Product src={Pic6} altText="fine Pic" productName="Ladies Shirts" description="Ladies Oversized Tee in all sizes" price="N18000"/>
      </div>
      <div>
<PostList/>
      </div>
    </>
  )
}

export default App
