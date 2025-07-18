import React, {useState, useEffect} from 'react'
import axios from'axios'

console.log('Data Fetching...')
/*
export function DataFetching(){
    const [posts, setPosts]= useState([])   // fetch all posts in an array so we declare array.
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return(
        <div>
            <ul>
                {
                    posts.map(post=> <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
*/
console.log('Fetching individual posts by passing post_id:')
/*
export function DataFetching(){
    const [post, setPost]= useState({}) //  fetch only one data from jsonplaceholder which is an object inside array so we declare an empty object instead of array .
    const [id, setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>{
                console.log(res)
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
    return(
        <div>
            <input type='text' value={id} placeholder='Enter id' onChange={(e)=> setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    )
}
*/
        // display title with 5
/*
export function DataFetching(){
    const [posts, setPosts]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/5') // fetching data with id 5 
            .then((res)=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return(
        <div>
            {posts.title}
        </div>
    )
}
*/

console.log('Triggering useEffect on button click:')

export function DataFetching(){
    const [post, setPost]= useState({})
    const [id, setId]= useState(1)
    const [idFromBtnClick, setIdFromBtnClick]= useState( 1)

    const ClickHandler=()=>{
        setIdFromBtnClick(id)

    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>{
                console.log(res)
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[idFromBtnClick])
    
   
    return(
        <div>
            <input type='text' placeholder='Enter Id' value={id} onChange={(e)=> setId(e.target.value)}/>
            <button onClick={ClickHandler}>Fetch post</button>
            <div>{post.title}</div>
        </div>
    )
}   // when user enter an ID in input bar (ID is stored in input also) and click the button setIdFromBtnClick changes idFromBtnClick value to the entered id which is called by axios.get in useEffect and returns data in specified ID.


// Context provides a way to pass data through the component tree without having to pass props down manually at every level. For eg: Componentc, componentB, Component A  and context.js in class 3