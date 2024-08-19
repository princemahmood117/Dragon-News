import { useEffect, useState } from "react";
import Breaking from "./Breaking";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftNav from "./shared/LeftNav"
import RightNav from "./shared/RightNav"
import AllNews from "./AllNews";

const Home = () => {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data => setNews(data))
    },[])
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

                    {
                        news.map(info => <AllNews key={info._id} info={info}></AllNews> )
                    }

        
                </div>

                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;