import logo from './logo.svg';
import './App.css';
import FacebookPost from './components/views/FacebookPost';
import profileImg from './assets/profile.jpg'
function App() {

  const postInfo = {
    createdBy: 'Mustafa Ilahi',
    avatar: profileImg,
    description: 'No beauty shines brighter than the beauty of a supercar ❤️',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.khaleejtimes.com/storyimage/KT/20210313/ARTICLE/210319778/AR/0/AR-210319778.jpg','https://i.pinimg.com/736x/fe/3a/39/fe3a391ad4505935c08d21e70f27796a.jpg','https://i.insider.com/58eec10c2d9f6f24008b4eba','https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80','https://i.ytimg.com/vi/Rk3T__b2mDg/maxresdefault.jpg']
  }
  return (
    <div className="App">
      <FacebookPost postInfo={postInfo}/>
      </div>
  );
}

export default App;
