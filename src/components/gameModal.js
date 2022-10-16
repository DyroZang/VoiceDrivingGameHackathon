import Modal from "react-bootstrap/Modal";

export default function CustomModal({ show, setShow, state, setState}) {

  function startGame() {
    setShow(false)
    setState('play')
  }

  return (
    <Modal show={show} onHide={startGame}>
      <Modal.Header closeButton>
        {state === 'start' && <Modal.Title>How to play the game</Modal.Title>}
        {state === 'won' && <Modal.Title>You have arrived at your destination!</Modal.Title>}
        {state === 'lost' && <Modal.Title>You crashed!</Modal.Title>}
      </Modal.Header>
      {state === 'start' &&
        <Modal.Body>
          <b>Rules of the game:</b>
          <br></br>
          <br></br>
          <ul>
            <li>You have 1 minute to finish the game</li>
            <li>You have 2 commands</li>
          </ul>

          <b>Commands:</b>
          <br></br>
          <br></br>
          <ul>
            <li>"Straight!"</li>
            <li>"Right!"</li>
            <li>"Left!"</li>
          </ul>
        </Modal.Body>
      }
      {state === 'won' &&
        <Modal.Body>
          <b>PLACEHOLDER</b>
          <br></br>
          <br></br>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </Modal.Body>
      }
      {state === 'lost' &&
        <Modal.Body>
          <b>PLACEHOLDER</b>
          <br></br>
          <br></br>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </Modal.Body>
      }
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
