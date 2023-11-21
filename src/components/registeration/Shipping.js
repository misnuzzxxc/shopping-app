import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required").max(20),
  lastName: yup.string().required("Last Name is required").max(20),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
});

function Shipping({ formData, setFormData, nextStep }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={formData}
      onSubmit={(values) => {
        setFormData(values);
        nextStep();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <Field
            name="firstName"
            label="First Name"
            margin="normal"
            as={TextField}
            error={touched.firstName && errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <Field
            name="lastName"
            label="Last Name"
            margin="normal"
            as={TextField}
            error={touched.lastName && errors.lastName}
            helperText={touched.lastName && errors.lastName}
          />
          <Field
            type="text"
            name="address"
            label="Address"
            margin="normal"
            as={TextField}
            error={touched.address && errors.address}
            helperText={touched.address && errors.address}
          />
          <Field
            type="text"
            name="city"
            label="City"
            margin="normal"
            as={TextField}
            error={touched.city && errors.city}
            helperText={touched.city && errors.city}
          />
          <Field
            type="text"
            name="country"
            label="Country"
            margin="normal"
            as={TextField}
            error={touched.country && errors.country}
            helperText={touched.country && errors.country}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Shipping;
