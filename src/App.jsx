import QR from "../src/assets/qr_img.png"

import './App.css'

function App() {

  return (
    <>
      <section>
        <div className="qr-code-container">
          <div className="qr-code-card">

            <div className="picture-backgorund">
              <img src={QR} alt="Picture"/>
              <div className="circle-1"></div>
              <div className="circle-2"></div>                    
            </div>

            <div className="qr-code-description-text">
              <h1>Listen to the best that music has to offer</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium laborum voluptatibus, corporis animi cumque ut aperiam nisi exercitationem expedita minima sapiente eveniet recusandae dolor perferendis velit totam adipisci? Mollitia?</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
