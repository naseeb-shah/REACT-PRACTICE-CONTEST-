import Navbar from './navabar.js'
import './App.css';
import Profile from './profile.js'
import Age from './age.js';
import List from './list.js';

function App() {
  return (
     <> 
     <Navbar />
    <div className="App"  id='fl'>
      <div>
<Profile />
<Age /></div>
<div>
  <List />
</div>
    </div>
    </>
  );
}

export default App;
