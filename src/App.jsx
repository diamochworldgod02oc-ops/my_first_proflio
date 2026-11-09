import Navbar from "./Compents/Navbar"
import "./App.css"

function App(){
  return(
    <div className="body">
      <Navbar/>

      <h1 className="CE">Chikamso Ehilegbu</h1>

      <p className="par">Hi my name is Chikamso Ehilegbu and I an learning javascript and <br></br>react,I also like playing football and i am making a game for people <br></br>to play soon. Thank you.</p>

      <button className="btn">  Let's Get started!  </button>

      <img src="/noob.jpg" className="img"/>

    </div>
  )
}

export default App