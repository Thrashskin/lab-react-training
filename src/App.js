import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClikcablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';


function App() {

  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang='es'>José</Greetings>
      <Greetings lang='de'>Andrea</Greetings>
      <Greetings lang='en'>Andrew</Greetings>
      
      <h1>Random</h1>
      <Random min={9} max={99}/>
      <Random min={11} max={150}/>

      <h1>BoxColor</h1>
      <BoxColor r={200} g={76} b={95}/>

      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
        />

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>Driver Card</h1>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"}}/>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER" }} />

      <br/>
      <br/>
      <br/>
      <h1>Like Buttons</h1>
      <LikeButton /><LikeButton />

      <br/>
      <br/>
      <br/>
      <h1>Clickable Picture</h1>

      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <br/>
      <br/>
      <br/>
      <h1>Dice</h1>

      <Dice />

      <br/>
      <br/>
      <br/>
      <h1>Carousel</h1>

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <br/>
      <br/>
      <br/>
      <h1>NumbersTable</h1>
      <NumbersTable limit={12} />

      <br/>
      <br/>
      <br/>
      <h1>Facebook</h1>
      <Facebook />

      <br/>
      <br/>
      <br/>
      <h1>SignupPage</h1>
      <SignupPage />


      <br/>
      <br/>
      <br/>
      <h1>Color Picker</h1>
      <RGBColorPicker />


    </div>
  );
}

export default App;
