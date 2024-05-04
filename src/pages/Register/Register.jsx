import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { connect } from "react-redux";
import { auth } from "../../utils/firebase/firebase-config";
import { userAction } from "../../utils/reducer/userReducer";
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Register = (props) => {
  const navigate = useNavigate();

  function register() {
    if (
      props.userObj.email === "" ||
      props.userObj.password === "" ||
      props.userObj.repeatPassword === ""
    ) {
      alert("enter the information");
    }
    if (props.userObj.password === props.userObj.repeatPassword) {
      createUserWithEmailAndPassword(
        auth,
        props.userObj.email,
        props.userObj.password
      )
        .then((res) => {
          props.saveUser({ ...props.userObj, uid: res.user.uid }, navigate);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("wrong password");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-5 py-12 sm:px-6 lg:px-8 px-3">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                required
                onChange={(e) => props.getEmail(e.target.value)}
                type="email"
                label="Email"
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                required
                onChange={(e) => props.getPassword(e.target.value)}
                type="password"
                label="Password"
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                required
                onChange={(e) => props.getRepeatPassword(e.target.value)}
                type="repeat password"
                label="Repeat Password"
              />
            </div>

            <div className="flex justify-center">
              <Button
                className="w-80"
                onClick={() => register()}
                color="warning"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ ...state.user }), userAction)(Register);
