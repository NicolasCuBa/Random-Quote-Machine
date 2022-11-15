
import './App.css';
import React from "react";

function App() {
  return (
      <div>
        <Quote />
      </div>
  );
}



class Quote extends React.Component {
  constructor (props) {
    super(props);
    const randomQuote = this.randomItem();
    const randomRgb = this.randomColor();
    this.state = {
      text: randomQuote.text,
      author: randomQuote.author,
      color: randomRgb
    };
    this.randomItemState = this.randomItemState.bind(this);
  }
 
  randomItem () {
    const quoTes = [
      {text: "The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela"},
      {text: "The way to get started is to quit talking and begin doing", author: "Walt Disney"},
      {text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking", author: "Steve Jobs"},
      {text: "If life were predictable it would cease to be life, and be without flavor", author: "Eleanor Roosevelt"},
      {text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough", author: "Oprah Winfrey"},
      {text: "It is during our darkest moments that we must focus to see the light", author: "Aristotle"},
      {text: "Tell me and I forget. Teach me and I remember. Involve me and I learn", author: "Benjamin Franklin"},
      {text: "Spread love everywhere you go. Let no one ever come to you without leaving happier", author: "Mother Teresa"},
      {text: "In the end, it's not the years in your life that count. It's the life in your years", author: "Abraham Lincoln"},
      {text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose", author: "Dr. Seuss"},
      {text: "Life is never fair, and perhaps it is a good thing for most of us that it is not", author: "Oscar Wilde"},
      {text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein"},
      {text: "Life is really simple, but we insist on making it complicated", author: "Confucius"},
      {text: "In three words I can sum up everything I've learned about life: it goes on", author: "Robert Frost"},
      {text: "Love the life you live. Live the life you love", author: "Bob Marley"},
      {text: "Life is made of ever so many partings welded together", author: "Charles Dickens"},
      {text: "Life is trying things to see if they work", author: "Ray Bradbury"},
      {text: "Many of life's failures are people who did not realize how close they were to success when they gave up", author: "Thomas Edison"},
      {text: "Success is not final; failure is not fatal: It is the courage to continue that counts", author: "Winston S. Churchill"},
      {text: "The secret of success is to do the common thing uncommonly well", author: "John D. Rockefeller Jr"},
      {text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure", author: "Colin Powell"},
      {text: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere", author: "Barack Obama"},
      {text: "Try not to become a man of success. Rather become a man of value", author: "Albert Einstein"},
      {text: "If you genuinely want something, don't wait for it — teach yourself to be impatient", author: "Gurbaksh Chahal"},
      {text: "Whether you think you can or you think you can't, you're right", author: "Henry Ford"},

    ];

    const randomIndex = Math.floor(Math.random() * quoTes.length);
    const randomQuote = quoTes[randomIndex];

    return randomQuote;
    
  };

  randomColor () {
    
    const randomIndex = Math.floor(Math.random() * 12) + 1;

    return randomIndex;

  };

  randomItemState () {

    const randomQuote = this.randomItem();
    const randomRgb = this.randomColor();

    this.setState({
      text: randomQuote.text,
      author: randomQuote.author,
      color: randomRgb
    });

  }
  
  render() {
    let section_classname = 'contenedor-pagina animation bcolor' + this.state.color.toString();
    let text_classname = 'animation color' + this.state.color.toString();
    let icon_classname = 'fa-brands fa-twitter-square fa-xl animation color' + this.state.color.toString();
    let button_classname = 'animation bcolor' + this.state.color.toString();

    return (
      <div>
        <section className={section_classname} style={{backgroundColor: this.state.color}}>
          <div id="quote-box" className="contenedor-quote">
            <div id="contenedor-text">
              <p id="text" className={text_classname}><i id="logo-1" className="fa-solid fa-quote-left">
                </i>{this.state.text}
              </p>
            </div>
            <div id="contenedor-author">
              <p id="author" className={text_classname}>
                -{this.state.author}
              </p>
            </div>
            <div id="contenedor-boton">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
                <i className={icon_classname}></i>
              </a> 
              <button id="new-quote" className={button_classname} onClick={this.randomItemState}>
                New Quote
              </button>
            </div>
          </div>
        </section>  
      </div>
    );
  }
}

export default App;

