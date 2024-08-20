import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AllNews = ({info}) => {
    return (
        <div>

            <Link className="p-2">
            <h2 className="text-2xl mb-2 mt-2">{info.title}</h2>
            <img src={info.image_url} alt="" /></Link>
            <p className="text-sm my-2 p-2">{info.details}</p>
            <p className="text-sm ml-2 font-bold">Read more...</p>
            

        </div>
    );
};

AllNews.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }).isRequired,
};


export default AllNews;



