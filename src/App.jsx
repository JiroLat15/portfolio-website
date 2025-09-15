import profilePic from './assets/profilepic/profile-pic-jiro.jpg';

function App() {
  return (
    <div>
      <h1>Hello, I’m Jiro 👋</h1>
      <p>Welcome to my portfolio built with React!</p>
      <img src={profilePic} alt="Profile" width="200" />
    </div>
  );
}

export default App;
