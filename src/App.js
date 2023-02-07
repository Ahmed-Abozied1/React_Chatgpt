import './App.css';
import ChatLog from './ChatLog/ChatLog';
import "./normal.css"
function App() {
  return (
    <div className="App">
    <aside className="sidemenu">
<div className="side-menu-btn">
<span>+</span>
new Chat</div>
    </aside>
    <section className="chatbox">
  <ChatLog/>
<div className="chat-input-holder">
  <input className="chat-input-textarea" 
  placeholder=" type Your message..."
  >

  </input>
</div>
    </section>
    </div>
  );
}

export default App;
