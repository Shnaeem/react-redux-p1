// import {useEffect} from "react";
// import {connect} from "react-redux"
// import {fetchPosts} from "../actions/postsActions"
// import {Post} from "../components/Post"

// //The connect function is a higher order function that
// //connects redux store to a react component

// //redux state is now in the props of the component(postspage)
// const PostsPage = ({dispatch, loading, posts, hasErrors}) => {

//     useEffect(()=>{
//         //Notice how fetchPost returns a function. The dispatch only accepts plain objects. The Thunk middleware is what allows dispatch to accept a function
//         dispatch(fetchPosts())

//     }, [dispatch])

//     const renderPosts = () => {
//         if (loading)  return <p> Loading posts ....</p>
//         if (hasErrors) return <p> Unable to display posts</p>
//         return posts.map((post) => 
//             <Post key={post.id} post={post} />
//         )
//     }

//     return(
//         <section>
//             <h1> Posts</h1>
//             {renderPosts()}
//         </section>
//     )
// }


// const mapStateToProps = (state) => ({
//     loading: state.posts.loading,
//     posts: state.posts.posts,
//     hasErrors: state.posts.hasErrors,
// })

// export default connect(mapStateToProps) (PostsPage);



import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post';
// The connect function is ahigher order function
// that connects the Redux store to a React Component
// Redux State is now in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  const renderPosts = () => {
    if (loading) return <p>Loading posts..</p>
    if (hasErrors) return <p>Unable to display posts</p>
    return posts.map((post) => <Post key={post.id} post={post} />)
  }
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})
export default connect(mapStateToProps)(PostsPage)