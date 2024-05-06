import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={styles.body}>User Form</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            else if (values.email.length < 10) {
              errors.email = 'Email address too short';
            }

            if (!values.password) {
              errors.password = 'Required';
            }
            else if (values.password.length < 8) {
              errors.password = 'Password too short';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="email" component="div" />
              </span>
              <Field type="password" name="password" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="password" component="div" />
              </span>
              <Button variant='danger' type='submit' disabled={isSubmitting}>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default UserForm;

const styles = {
  body: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  }
}
