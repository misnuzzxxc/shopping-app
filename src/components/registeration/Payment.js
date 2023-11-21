import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
function Payment({ formData, setFormData, nextStep, prevStep }) {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
          <Field
            name="method"
            label="Payment Method"
            margin="normal"
            as={TextField}
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setDirection("back")}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setDirection("forward")}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Payment;
