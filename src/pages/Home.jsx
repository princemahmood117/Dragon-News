import Breaking from "./Breaking";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftNav from "./shared/LeftNav"
import RightNav from "./shared/RightNav"

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
       

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">

                <div className="border">
                    <LeftNav></LeftNav>
                </div>

                <div className="border md:col-span-2 text-4xl">
                    <h2>News Coming soon</h2>
                </div>

                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;