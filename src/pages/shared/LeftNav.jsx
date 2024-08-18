import { useEffect } from "react";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";


const LeftNav = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        //যেহেতু বাম পাশের এগুলা রেন্ডারের মাধ্যমে আসবে না,তাই fetch দিয়ে করা লাগবে,যাতে হোম পাইজেই এগুলো বাই ডিফল্ট পাওয়া যায় 

        // public folder এ থাকায় শুধু ফাইল নাম দিলেই হবে

        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);
    return (
        <div className="space-y-7">
            <h2 className="mb-6 font-bold">All Category</h2>

            {
                categories.map(category => <Link key={category.id} className="block ml-4 text-xl font-semibold text-[#9F9F9F]">{category.name}</Link>)
            }

            <h2 className="text-xl text-bold p-4">All news</h2>

        </div>
    );
};

export default LeftNav;