import './css/Home.css'
import TextBox2 from './components/TextBox2';
import Sessions from './components/SessionBar';
import Navbar  from './components/Navbar';
export default function Home() {
  /////////////////////////////////
  // handling container reactivity
  /////////////////////////////////

  //const openbtn = document.querySelector('openbtn').addEventListener('click', function(){ toggleSessionbar()} );

  function toggleSessions(){
    var sessionContainer = document.querySelector('.session-container');
    var chatContainer = document.querySelector('.chat-container');
    var bar = document.getElementById('session-bar');
    //open the container
    if (sessionContainer.style.flexGrow === '1' || sessionContainer.style.flexGrow === '') {
        sessionContainer.style.flexGrow = '9'; // Adjust the flexGrow value as needed
        chatContainer.style.flexGrow = '31'; // Adjust the flexGrow value for the chat container
    } else {
        sessionContainer.style.flexGrow = '1';
        chatContainer.style.flexGrow = '40'; // Adjust the flexGrow value for the chat container
    }

    //open the component
    if (bar.style.width === '0px' || bar.style.width === '') {
      bar.style.width = '250px'; // Adjust the width as needed
    } else {
      bar.style.width = '0';
    }
  }








  /////////////////////////////////
  // Putting together the return html object
  /////////////////////////////////
  return (
    <>
    <Navbar/>
    <home link rel="stylesheet" type="text/css" href="./css/Home.css" >
      
      <div className="session-container">
        <button type="button" className="openbtn" onClick={toggleSessions}></button>
        <Sessions/>
      </div>
      <div className="chat-container">
        <TextBox2 />
      </div>
  
    </home>
  </>

  )
}