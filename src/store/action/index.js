import firebase from "../../config/firebase";

const Signup = (data) => {
  return (dispatch) => {
    console.log("DAta", data);
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(function (user) {
        alert("SIGNEDUP");
        dispatch({
          type: "SIGNEDUP",
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const Login = (data) => {
  return (dispatch) => {
    console.log("DAta", data);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(function (user) {
        alert("LOGIN");

        let createUser = {
          email: user.user.email,
          uid: user.user.uid,
        };
        dispatch({
          type: "SETUSER",
          payload: createUser,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const SignedOut = (data) => {
  return (dispatch) => {
    console.log("DAta", data);
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Logout");

        dispatch({
          type: "SIGNEDOUT",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { Signup, Login, SignedOut };
