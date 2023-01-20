import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              name="firstName"
              placeholder="First Name"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              name="lastName"
              placeholder="Last Name"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone
          </Label>
          <Col md="10">
            <Field
              name="phoneNum"
              placeholder="Phone"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label chack md={{ size: 4, offset: 2 }}>
            May we contact you?
          </Label>
          <Col md="4">
            <Field name="contactType" as="select" className="form-control">
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            <Field name="agree" type="checkbox" className="form-check-input" />{" "}
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              name="feedback"
              as="textarea"
              rows="12"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
              Send Feedback
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
