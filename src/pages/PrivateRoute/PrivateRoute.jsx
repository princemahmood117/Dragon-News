import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    
    const location = useLocation() // লগিন না থাকা অবস্থায় কোথায় যেতে চেয়েছিলাম সেটার "pathname" টা নিয়ে কাজ করে
    // console.log(location.pathname);
    
    const { user, loading } = useContext(AuthContext);
    
    
    // loading spinner is visible untill the data is completely fetched
    if (loading) {
        return (
            <div className="mx-[50%] mt-16">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
}


  // ইউজার থাকলে যা দেখতে চায় তা দেখাবে "children" হিসাবে, না থাকলে ন্যাভিগেট করে লগ-ইন পেইজে নিয়ে যাবে
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
