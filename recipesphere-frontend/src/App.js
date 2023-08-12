import React from 'react';
import "./App.css";
import homepageLogo from "./images/ReceipeSpehereLogov2.PNG";

//Compontents
import Card from './components/card/Card';


function App() {
  return (
    <div className="App">

      <div className='homepage-logo'>
        <h1>RecipeSphere</h1>
        <img src={homepageLogo} alt="Company logo" />
      </div>

      <div className='card-collection'>
        <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />

      <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />

      <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />

      <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />

      <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />

      <Card 
        imgsrc="https://picsum.photos/300/200"
        imgalt="Card Image"
        title="Card Title"
        description="This is the Card Description"
        buttonlink="#"
        buttontitle="Card Button"
      />
      </div>
      
      
    </div>
  );
}

export default App;




