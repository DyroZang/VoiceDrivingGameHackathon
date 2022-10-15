import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from "./assets/group.jpg";

export default function About() {
  return (
    <>
      <Container>
        <h1 className="display-1 my-3"></h1>
        <Row>
          <Col md={6} className="aboutSummary p-3">
            <h5 className="display-4">About the project</h5>
            <Row>
              <Col md={10}>
                <p style={{ fontSize: "1.1rem" }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.
                  <a href="https://github.com/DyroZang/VoiceDrivingGameHackathon">
                    {" "}
                    github.com
                  </a>
                </p>
                Used technologies: React, Figma
              </Col>
            </Row>
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
            <Row>
              <Col md={10}>
                <p>Team members:</p>
                <ul>
                  <li>Doug</li>
                  <li>Haritha</li>
                  <li>Gabriel</li>
                  <li>Daryl</li>
                  <li>Hasan</li>
                  <li>Christine</li>
                  <li>Zachary</li>
                  <li>Sierra</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}
