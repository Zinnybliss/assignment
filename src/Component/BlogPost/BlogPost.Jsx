import './BlogPost.Css'


const BlogPost = (props) => {
    return(
        <>
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
        </>
    )
}


export default BlogPost;