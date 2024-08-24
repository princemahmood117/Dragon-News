import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const Login = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)


  const handleLogin = (e) => {

    e.preventDefault();
    console.log(e.currentTarget);

    // another way to collect input field's data [we also can use ' e.target.name_field_data.value '] 

    const formData = new FormData(e.currentTarget)  // gives some information from the form

    const email = formData.get('email')
    const password = formData.get('password')
    
    console.log(email,"",password);    // get method gets the data of "name" given inside the input form

    login(email,password)
    .then(() =>{
  
      console.log('login successfull');

      // state এ কিছু থাকলে সেখানে নিয়ে যাবে (কোনো detailsNews এ ক্লিকড অবস্থায় থাকলে), না থাকলে (সরাসরি লগ-ইন) হোম এ নিয়ে যাবে
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error.message);
    })
    
 
  };

  
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>


      <div>

        <h2 className="text-3xl text-center mb-4">This is login page</h2>

        <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="text-center my-4">Already have an account? <Link className="text-blue-600" to='/register'>Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
