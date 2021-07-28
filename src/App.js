import React from "react";
import Post from './components/Post';

import author1 from './components/images/post1/author-photo.jpg';
import post1 from './components/images/post1/post-image.jpg';

import author2 from './components/images/post2/author-photo.jpg';
import post2 from './components/images/post2/post-image.jpg';


const posts = [
  {
    author: {
      name: "Anakin Skywalker",
      photo: author1,
      nickname: "@dart_vader"
    },
    post: {
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: post1,
      date: " Feb 26",
      comments: 482,
      retweets: 146,
      likes: 887
    }
  },
  {
    author: {
      name: "Володимир Зеленський",
      photo: author2,
      nickname: "@ZelenskyyUa"
    },
    post: {
      content: "Іще одна медаль від Flag of Ukraine спортсменів на Олімпіаді @Tokyo2020! Олена Костевич та Олег Омельчук посіли третє місце у стрільбі з пневматичного пістолета! Вітаю бронзових призерів, бажаю вам наснаги та нових перемог!",
      image: post2,
      date: "Jul 27",
      comments: 123,
      retweets: 74,
      likes: 624
    }
  }
];

function App() {
  return (
    <div className="App">
      <div className='container'>
        {posts.map((post, index) => <Post {...post} key={index} />)}
      </div>
    </div>
  );
}

export default App;
