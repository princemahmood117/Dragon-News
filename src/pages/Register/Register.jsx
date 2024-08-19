import { Link } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

const Register = () => {

    const handleRegister = (e) => {
            e.preventDefault();
    }
    return (
        <div>
        <Header></Header>
        <Navbar></Navbar>
  
  
        <div>
  
          <h2 className="text-3xl text-center mb-4">Register here first</h2>
  
          <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo_URL"
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

          <p className="text-center my-4">Already have an account? <Link className="text-blue-600" to='/login'>Login</Link> </p>
        </div>
      </div>
    );
};

export default Register;