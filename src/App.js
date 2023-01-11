import WSPGallery from './components/WSPGallery';
import './App.css';


function App() {
  const galleryImages=[
    {
      img: 'https://i.pinimg.com/236x/e8/af/07/e8af07a396d7ee5e4660c5770ebfb3e0.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/cf/de/85/cfde857330d0e08122f7b1a6323533ee.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/76/63/cd/7663cd94efb2cc45f3a9e6d4a973df5f.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/1b/b8/79/1bb879335dda979e565a56ce8b79866d.jpg'
    },
    {
      img: 'https://i.pinimg.com/564x/81/64/42/8164429bf20ce4d191a27acb719be092.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/42/b3/df/42b3df28f82b94cc3952fa887eb78f8a.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/bb/aa/68/bbaa68e6dc54163a11209de190cb01eb.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/fa/80/a6/fa80a6978c11565170e43f7c12778ce7.jpg'
    },
    {
      img: 'https://i.pinimg.com/236x/00/7e/d5/007ed57db8884b28757eeae460d2436b.jpg'
    },
    {
      img: 'https://i.pinimg.com/564x/e3/d6/d7/e3d6d796b4a393f0474c3f8450beefe1.jpg'
    }
  ]
  return (
    <div className="App">
      <br/>
      <div class='title'>
        <strong>Jung Hoseok from BTS</strong>
      </div>
      <h2>Click on any image to enlarge his cuteness</h2>
      <br/>
      <WSPGallery
         galleryImages={galleryImages}
      />
      <br/>
      <div>-Responsive Image Gallery in React--2022 ©️Kathyayini Pasunuri-</div>
      <div></div>
    </div>
  );
}

export default App;
