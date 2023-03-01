import "./email.css";
import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [fatherName, setFatherName] = useState(false);
  const [age, setAge] = useState(false);
  const [officePhone, setOfficePhone] = useState(false);
  const [homePhone, setHomePhone] = useState(false);
  const [phone, setPhone] = useState(false);
  const [officeAddress, setOfficeAddress] = useState(false);
  const [homeAddress, setHomeAddress] = useState(false);
  const [email, setEmail] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bc1skxq",
        "template_wq1gbti",
        form.current,
        "D0LjXagDaRFtJJ0My"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleChange = (value, type = "firstName") => {
    switch (type) {
      case "firstName":
        const firstname = new RegExp("(?=.*[A-Z]+[a-z]{2})");
        firstname.test(value) ? setFirstName(true) : setFirstName(false);
        break;
      case "lastName":
        const lastname = new RegExp("(?=.*[A-Z]+[a-z]{3})");
        lastname.test(value) ? setLastName(true) : setLastName(false);
        break;
      case "fatherName":
        const fathername = new RegExp("(?=.*[A-Z]+[a-z]{3})");
        fathername.test(value) ? setFatherName(true) : setFatherName(false);
        break;
      case "age":
        const age = new RegExp("([1-4]\\d|5[0-3])$|^18$|^53$");
        age.test(value) ? setAge(true) : setAge(false);
        break;
      case "officePhone":
        const officePhone = new RegExp("(?=.*0\\d{8}$)");
        officePhone.test(value) ? setOfficePhone(true) : setOfficePhone(false);
        break;
      case "homePhone":
        const homePhone = new RegExp("(?=.*010\\d{8}$)");
        homePhone.test(value) ? setHomePhone(true) : setHomePhone(false);
        break;
      case "phone":
        const phone = new RegExp(/\+374\d{8}$/);
        phone.test("+" + value) ? setPhone(true) : setPhone(false);
        break;
      case "officeAddress":
        const officeAddress = new RegExp("(?=.*[A-Z]+[a-z]{5})");
        officeAddress.test(value)
          ? setOfficeAddress(true)
          : setOfficeAddress(false);
        break;
      case "homeAddress":
        const homeAddress = new RegExp("(?=.*[A-Z]+[a-z]{5})");
        homeAddress.test(value) ? setHomeAddress(true) : setHomeAddress(false);
        break;
      case "email":
        const email = new RegExp("(?=[^\\s@]+@[^\\s@]+\\.[^\\s@]+$)");
        email.test(value) ? setEmail(true) : setEmail(false);
        break;
      default:
        console.log(`something went wrong`);
    }
  };

  return (
    <div className="email_inner">
      <h2 style={{ marginLeft: "22%", paddingBottom: "10px" }}>User Form</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            First name
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              onChange={(e) => handleChange(e.target.value, "firstName")}
            />
            {
              <div className="validate">
                <div className={firstName ? "validated" : "not-validated"}>
                  {firstName ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Last name
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="text"
              name="last_name"
              placeholder="Enter your Last name"
              onChange={(e) => handleChange(e.target.value, "lastName")}
            />
            {
              <div className="validate">
                <div className={lastName ? "validated" : "not-validated"}>
                  {lastName ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Father name
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="text"
              name="father_name"
              placeholder="Enter your Father name"
              onChange={(e) => handleChange(e.target.value, "fatherName")}
            />
            {
              <div className="validate">
                <div className={fatherName ? "validated" : "not-validated"}>
                  {fatherName ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
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
              Male:{" "}
              <Form.Check
                type="radio"
                aria-label="radio 1"
                name="male"
                value="male"
              />
              Female:{" "}
              <Form.Check
                type="radio"
                aria-label="radio 2"
                name="female"
                value="female"
              />
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="number"
              name="age"
              placeholder="Enter your age"
              onChange={(e) => handleChange(e.target.value, "age")}
            />
            {
              <div className="validate">
                <div className={age ? "validated" : "not-validated"}>
                  {age ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Office phone
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="number"
              name="office_phone"
              placeholder="Enter your office phone"
              onChange={(e) => handleChange(e.target.value, "officePhone")}
            />
            {
              <div className="validate">
                <div className={officePhone ? "validated" : "not-validated"}>
                  {officePhone ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Home phone
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="number"
              name="home_phone"
              placeholder="Enter your home phone"
              onChange={(e) => handleChange(e.target.value, "homePhone")}
            />
            {
              <div className="validate">
                <div className={homePhone ? "validated" : "not-validated"}>
                  {homePhone ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Phone
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter your phone"
              onChange={(e) => handleChange(e.target.value, "phone")}
            />
            {
              <div className="validate">
                <div className={phone ? "validated" : "not-validated"}>
                  {phone ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Office address
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="text"
              name="office_address"
              placeholder="Enter your office address"
              onChange={(e) => handleChange(e.target.value, "officeAddress")}
            />
            {
              <div className="validate">
                <div className={officeAddress ? "validated" : "not-validated"}>
                  {officeAddress ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Home address
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="text"
              name="home_address"
              placeholder="Enter your home address"
              onChange={(e) => handleChange(e.target.value, "homeAddress")}
            />
            {
              <div className="validate">
                <div className={homeAddress ? "validated" : "not-validated"}>
                  {homeAddress ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email to send
          </Form.Label>
          <Col sm="10" className="inputs">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => handleChange(e.target.value, "email")}
            />
            {
              <div className="validate">
                <div className={email ? "validated" : "not-validated"}>
                  {email ? (
                    <span className="list-icon green">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <MdOutlineCancel />
                    </span>
                  )}
                </div>
              </div>
            }
          </Col>
        </Form.Group>
        <Button className="send_btn" variant="dark" type="submit" value="Send">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default Email;
