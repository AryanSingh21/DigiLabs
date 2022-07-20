import Nav from './navbar'
import Intro from './intro'
import Sponsor from './sponsor';
import Card from './card'
import Price from './Price';
import Idea from './Idea';
import Form from './contact';
import Foot from './footer';
import tick from './image/Vector.png'
import pic from './image/Ellipse 2.png'
import Text from './ImgText'
import './App.css';

function App() {
  return (
    <div>
    <div className='container-fluid'>
      <Nav />
      <Intro />
      <Sponsor />
      <div className='Acards' >
        <Card />
        <Card />
        <Card />
      </div>
      <div className='priceTag'>
        <Price plan="Free" cost="$0" img={tick} height="350px" margin="2% 0 0 0"/>
        <Price popular="Most Popular" plan="Standard" cost="$9" img={tick} color="white" backgroundColor="#5555FF" height="400px" padding="2% 2% 2% 0" />
        <Price plan="Enterprise" cost="$16" img={tick} height="350px" margin="2% 0 0 0" />
      </div>
      <div className='words'>
        <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</h1>
        <img src={pic}></img>
        <h5>Jennifer Rowlands</h5>
        <p>Chief Design Office, uxtoast</p>
      </div>
      <div className='order'>
        <Text />
        <Text order='2' />
        <Text />
      </div>
      <Idea />
      <Form />
      
    </div>
    <Foot />
    </div>
  );
}

export default App;
