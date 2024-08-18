import Marquee from "react-fast-marquee";

const Breaking = () => {
    return (
        <div className="flex" >
            <button className="bg-pink-500 p-2 rounded-lg text-white">Latest</button>
            <Marquee speed={100} className="text-red-500 ml-2">
             <a className="ml-12" href="https://www.youtube.com/watch?v=HnaUjQ7zCzs">Click to play Far cry 5 theme song!</a>   

            </Marquee>
        </div>
    );
};

export default Breaking;