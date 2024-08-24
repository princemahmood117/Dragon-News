import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightNav from "./shared/RightNav";
import Navbar from "./Navbar";
import { useEffect } from "react";

const DetailsNews = () => {

    // show the top of the page after clicking on "Read more"
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

//   const { id } = useParams();

  const {title,image_url,details} = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4">
        <div className="col-span-1 md:col-span-3 px-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={image_url}
                alt=""
                className="block object-center rounded-md mx-auto"
              />
             
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold my-10">
                  {title}
                </h3>
              </a>
              <p className="leading-loose">
                {details}
              </p>
            </div>
          </div>
        </div>

        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
