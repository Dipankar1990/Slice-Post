import React,{useState,useEffect} from 'react';
import axios from 'axios'

const ShowPost = () => {
    const [post,updatePost] = useState([])
    const [top10Post, SetTop10Post] = useState(2)
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((Response)=>{
            console.log(Response)
            const posts = Response.data.slice(0, top10Post)
            updatePost(posts)
        })
        .catch(error =>console.log(error))
    },[top10Post])

  //setLoading(true);
    const btnClick = ()=>{
        SetTop10Post(top10Post +2);
    }
    return ( 
        <>
        <div className="jumbotron container text-center">
            <ul>   
                {
                    post.map((post)=>{
                        return (
                        <>
                         <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        </>
                        )
                        })
                }   
            </ul>
        </div>

            <button className="btn btn-secondary text-center" onClick={loading? btnClick : 
                <button class="text-center btn btn-light">
                    <span class="spinner-border spinner-border-sm"></span>
                </button>
            }>Click More</button>
            
        </>
     );
}
 
export default ShowPost;