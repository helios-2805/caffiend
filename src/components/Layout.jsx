import { useState } from "react"
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(false)
  const { globalUser, logout } = useAuth()
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      { globalUser ? (
        <button onClick={logout}>
        <p>Logout</p>
        <i className="fa-solid fa-mug-hot"></i>
        </button>
        ) : (
        <button onClick={() => setShowModal(true)}>
         <p>Sign up for free</p>
         <i className="fa-solid fa-mug-hot"></i>
       </button>
      )}
    </header>
  )

  const footer = (
    <footer>
      <p><span className="text-gradient">Caffiend</span> was made by <a href="https://bento.me/helios-2805" target="_blank">Helios </a> <br />
        Project Credits- <a href="https://www.smoljames.com" target="_blank">SmolJames</a><br />
        Check out the project on <a target="_blank" href="https://github.com/helios-2805/caffiend">Github</a>!</p>
    </footer>
  )

  function handleCloseModal() {
    setShowModal(false)
  }
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal= {handleCloseModal} />
        </Modal>)}
      {header}
      <main>
        {children}
      </main>
      {footer}
    </>
  )
}