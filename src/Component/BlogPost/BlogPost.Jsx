import './BlogPost.css'

const BlogPost = (props) => {
    const { title, author, content, date } = props;
  
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return (
      <div className="blog-post">
        <h2>{title}</h2>
        <p><em>By {author} on {formattedDate}</em></p>
        <p>{content}</p>
      </div>
    );
  };


export default BlogPost;