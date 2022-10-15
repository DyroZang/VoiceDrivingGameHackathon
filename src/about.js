import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import logo from './assets/group.jpg'

export default function About() {

  return (
    <>
      <Container>
        <h1 className="display-1 my-3">About</h1>
        <Row>
          <Col md={6} className="aboutSummary p-3">
            <h5 className="display-4">Type Fast to Win ⌨️</h5>
            <p>
              &emsp;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </Col>
          <Col md={6}>
            <img src={logo} className="rounded shadow w-100 mb-3" />
          </Col>
          <Col md={6}>
            <div className="aboutTech">
              <img src={logo} className="rounded w-100 mt-3" />
            </div>
          </Col>
          <Col md={6} className="aboutSummary p-3">
            <h5 className="display-4">Under the Hood 🧰</h5>
            <ul>
              <dd className="d-inline">- React </dd><span className="text-muted"> (Front end)</span><br />
              <dd className="d-inline">- Socket.io </dd><span className="text-muted"> (Web Sockets)</span><br />
              <dd className="d-inline">- Express.js </dd><span className="text-muted"> (Back end)</span><br />
              <dd className="d-inline">- MongoDB </dd><span className="text-muted"> (Database)</span><br />
            </ul>
            <Row>
              <p className="text-muted ms-5" style={{fontSize: '1.1rem'}}>Read More at <a href="https://codabool.com">CodaBool.com</a></p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2 className="mt-5">Credit 🎨</h2>
            <p style={{fontSize: '1.1rem'}}>
              &emsp;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              <a href="https://github.com/DyroZang/VoiceDrivingGameHackathon"> github.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
