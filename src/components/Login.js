import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const URL = "http://localhost:5000/login"

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();


  const handleInput = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
      const response =await fetch(URL, {
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(user)
      })

      console.log("login form ", response)

      if(response.ok){
        alert("Login successful")
        setUser({email: "", password:""});
        navigate("/")
      }else{
        console.log('invalid credentials');
      }

    }catch(error){
      console.log(error)
    }
  }



  return (
    <div>
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
            <h1 className="text-6xl pb-2">LOGIN</h1>
            <h1 className="text-2xl pb-10 font-bold">
              HOME <span className="text-red-600"> {"// LOGIN"}</span>
            </h1>
          </div>
        </div>

        <div className="header flex flex-col items-center text-black pt-5 pb-2 text-4xl font-bold">
          <h1 className="py-3">Login</h1>
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
              <label for="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                name="email"
                id="email-register"
                className="form-control"
                type="text"
                placeholder="Enter email"
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
              Login
            </button>
          </form>

          <div className="text-center">
            <span className="center">
              New User ?<Link to="/register"> Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
