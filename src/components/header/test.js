import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("omsIDuJFbczLNlxEJYRc")
  .collection("cartItems")
  .doc("kctlj2lQjX6zFDWkn2ZP");

firestore.doc("/users/omsIDuJFbczLNlxEJYRc/cartItems/kctlj2lQjX6zFDWkn2ZP");

firestore.collection("/users/omsIDuJFbczLNlxEJYRc/cartItems/");
