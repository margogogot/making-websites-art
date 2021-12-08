import React from 'react';
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const Projectcard = ({image, id, title, category, column}) => {
    let projectImg;
    if(image.fixed && typeof image.fixed !== 'function'){
        projectImg = <GatsbyImage image={getImage(image)} alt={title}/>;
    } else{
        projectImg = <img src={image.src} alt={title}/>
    }
    return (
        <div className={column}>
            <div className="portfolio">
                <div className="thumbnail">
                    <Link to={`/project/${id}`}>
                        {projectImg}
                    </Link>
                </div>
                <div className="content">
                    <div className="inner">
                        {title && <h4 className="title"><Link to={`/project/${id}`}>{title}</Link></h4>}
                        {category && <span className="category">{category}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projectcard;
