import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/register"

const Register = () => {

  const  [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
  });

  const navigate = useNavigate();
  
  //handling input
  const handleInput = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...user,
      [name]:value,
    })
  }

  // hanling form submission
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(user)

    try{
      const response =await fetch(URL, {
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(user),
      })

      if(response.ok){
        alert("Registration successful")
        setUser({username:"",
        email:"",
        password:""});
        navigate("/")
      }
  
      console.log(response);
    }catch(error){
      console.log("register ", error)
    }
  }


  return (
    <div className="">
      <div
        className="relative"
        style={{
          backgroundImage: "url(../Images/loginImage.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
          <h1 className="text-6xl pb-2">REGISTER</h1>
          <h1 className="text-2xl pb-10 font-bold">
            HOME <span className="text-red-600"> {"// REGISTER"}</span>
          </h1>
        </div>
      </div>

      <div className="header flex flex-col items-center text-black pt-5 pb-2 text-4xl font-bold">
        <h1 className="py-3">Register</h1>
        <hr className="w-50" />
      </div>

      <div className="container py-4 pb-5 md:w-[60%] lg:w-[50%] xl:w-[50%]">
        <form
          // action="/register"
          // method="POST"
          id="registration-form"
          className="py-3"
          onSubmit={handleSubmit}
        >
          <div className="form-group py-2">
            <label for="username-register" className="text-muted mb-1">
              <small>Username</small>
            </label>
            <input
              name="username"
              id="username-register"
              className="form-control"
              type="text"
              placeholder="Enter username"
              autocomplete="off"
              required
              value={user.username}
              onChange={handleInput}
            />
          </div>

          <div className="form-group py-2">
            <label for="email-register" className="text-muted mb-1">
              <small>Email</small>
            </label>
            <input
              name="email"
              id="email-register"
              className="form-control"
              type="text"
              placeholder="you@example.com"
              autocomplete="off"
              required
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="form-group py-2 pb-4">
            <label for="password-register" className="text-muted mb-1">
              <small>Password</small>
            </label>
            <input
              name="password"
              id="password-register"
              className="form-control"
              type="password"
              placeholder="Create password"
              required
              value={user.password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="bg-[#333131] hover:bg-[#eb3e32] w-full py-3 tracking-wide font-bold text-white shadow-none"
          >
            Register
          </button>
        </form>

        <div className="text-center">
          <span className="center">
            Already Registered?
            <Link to="/login"> Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
