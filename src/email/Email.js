import "./email.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Email() {
  return (
    <div className="email_inner">
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            First name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter your First name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Last name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter your Last name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Father name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter your Father name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Gender
          </Form.Label>
          <Col sm="10">
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                width: "180px",
              }}
            >
              Male: <Form.Check type="radio" aria-label="radio 1" />
              Female: <Form.Check type="radio" aria-label="radio 2" />
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter your age" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Office phone
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter your office phone" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Home phone
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter your home phone" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Phone
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter your phone" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Email;
