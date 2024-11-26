import React, { useState } from 'react';
import {
  FaCommentAlt,
  FaRegUserCircle,
  FaShareAlt,
  FaThumbsUp,
} from 'react-icons/fa';
import celebrate1 from '../assets/celebrate 1.png';
import celebrate2 from '../assets/celebrate 2.png';
import './SocialFeed.css';

const SocialFeed = () => {
  const [feedPosts, setFeedPosts] = useState([
    {
      id: 1,
      user: 'Navodya',
      avatar: <FaRegUserCircle size={40} />,
      content:
        'Just completed the "Advanced JavaScript" course! Feeling accomplished!',
      image: celebrate1,
      likes: 10,
      comments: 3,
    },
    {
      id: 2,
      user: 'Pathini',
      avatar: <FaRegUserCircle size={40} />,
      content: 'Check out this cool project I built using React!',
      image: celebrate2,
      likes: 25,
      comments: 5,
    },
    {
      id: 3,
      user: 'Rashmika',
      avatar: <FaRegUserCircle size={40} />,
      content: 'Anyone here struggling with Python recursion? Let’s discuss!',
      image: null,
      likes: 8,
      comments: 2,
    },
  ]);

  const handleLike = (id) => {
    setFeedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className='social-feed'>
      <div className='feed-header'>
        <h2>Community Engagement Panel</h2>
        <p>
          Interact with your peers, view trending activities, and share your
          progress!
        </p>
      </div>
      <div className='feed-content'>
        {feedPosts.map((post) => (
          <div key={post.id} className='feed-post'>
            <div className='post-header'>
              {post.avatar}
              <div className='user-info'>
                <h4>{post.user}</h4>
                <p>2 hours ago</p>
              </div>
            </div>
            <div className='post-body'>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt='Post visual' />}
            </div>
            <div className='post-actions'>
              <button onClick={() => handleLike(post.id)}>
                <FaThumbsUp /> {post.likes} Likes
              </button>
              <button>
                <FaCommentAlt /> {post.comments} Comments
              </button>
              <button>
                <FaShareAlt /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;
