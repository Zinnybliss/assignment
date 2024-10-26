
import './App.css'
import Pic1 from "./images/pic1.jpg"
import Pic2 from "./images/pic2.jpg"
import Pic5 from './images/pic5.jpg'
import Pic6 from './images/pic6.jpg'
import ProfileCard from './Component/ProfileCard/ProfileCard.Jsx'
import Product from './Component/Product/Product.Jsx'
import BlogPost from './Component/BlogPost/BlogPost.Jsx'

function App() {
  const profiles = [
    { name: 'John Doe', age: 30, location: 'New York', src: './images/pic1.jpg', theme: 'light' },
    { name: 'Jane Smith', age: 25, location: 'Los Angeles', src: "./images/pic2.jpg" , theme: 'dark' },
  ];
  const products = [
    { productName: 'Product 1', price: 99.99, src: {Pic5}, description: 'This is product 1.' },
    { productName: 'Product 2', price: 59.99, src: {Pic6}, description: 'This is product 2.' },
    { productName: 'Product 3', price: 129.99, src: {Pic1}, description: 'This is product 3.' },
  ];
  const posts = [
    { title: 'Post 1', author: 'John Doe', content: 'This is the content of post 1.', date: '2023-10-20' },
    { title: 'Post 2', author: 'Jane Smith', content: 'This is the content of post 2.', date: '2023-10-18' },
    { title: 'Post 3', author: 'Sarah Connor', content: 'This is the content of post 3.', date: '2023-10-15' },
  ];
  return (
    <>
      
      <div>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          location={profile.location}
          profileImage={profile.src}
          theme={profile.theme}
        />
      ))}
      </div>
      
      <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          price={product.price}
          imageUrl={product.src}
          description={product.description}
        />
      ))}
    </div>
      
    <div className="post-list">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
    </>
  )
}

export default App
