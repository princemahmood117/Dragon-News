
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";

const AllNews = ({info}) => {
    const {title,image_url,details,_id} = info;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-6">
        <figure>
          <img
            src={image_url}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
     
            {
                details.length > 200 ? <p> {details.slice(0,200)}
                <Link to={`/news/${_id}`} className='text-blue-600 font-bold ml-4'>Read More...</Link> </p> :
                <p>{details}</p>
            }
     
        </div>
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



