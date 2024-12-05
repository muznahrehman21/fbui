import React from 'react';
import './feed.css';
import { likePost } from '../../features/feeds/feedSlice';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Feed() {
  const posts = useSelector((state) => {
    console.log(state.feed.posts);
    
    return state.feed.posts;
  });
  const dispatch = useDispatch();

  
  const likeFunction = (postId) => {
    dispatch(likePost(postId)); 

  };

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="postheader">
            <img
              src={post.user.profilePicture}
              alt={post.user.name}
              className="profile-picture"
            />
            <div className="post-user">{post.user.name}</div>
          </div>
          <div className="post-content">{post.content}</div>
          <img src={post.image} alt="Post" className="post-image" />
          <div className="post-footer">
            <span>{post.likes} Likes</span>
            <button
              onClick={() => likeFunction(post.id)}
              className="like-button"
            >
              <ThumbUpIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
