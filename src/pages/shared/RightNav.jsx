import { FaGoogle,FaGithub, FaFacebook,FaTwitter,FaInstagram     } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightNav = () => {
  return (
    <div>
      <div className="p-2 space-y-2 mb-4">
        <h2 className="text-2xl">Login With</h2>

        <button className="btn btn-outline w-full">

            <FaGoogle></FaGoogle>
      
          Login with Google
        </button>

        <button className="btn btn-outline w-full">

        <FaGithub></FaGithub>
      
          Login with Github
        </button>
      </div>


      <div className="p-2 mb-4">
        <h2 className="text-2xl mb-4">Find us on</h2>

        <a className="flex p-4 items-center  border rounded-t-lg text-lg" href="">
            <FaFacebook className="mr-3"></FaFacebook>
            <span>Facebook</span>
        </a>

        <a className="flex p-4 items-center border-x text-lg" href="">
            <FaTwitter className="mr-3"></FaTwitter>
            <span>Twitter</span>
        </a>

        <a className="flex p-4 items-center  border rounded-b-lg text-lg" href="">
            <FaInstagram   className="mr-3"></FaInstagram  >
            <span>Instagram</span>
        </a>
      </div>


      <div className="p-2 space-y-2 mb-4 bg-[#F3F3F3]">
        <h2 className="text-2xl">Q-Zone</h2>

        
       <div className="space-y-8 p-2">
       <img src={qZone1} alt="qZone_image1" />
        <img src={qZone2} alt="qZone_image2" />
        <img src={qZone3} alt="qZone_image3" />
       </div>
      

      </div>









    </div>
  );
};

export default RightNav;
