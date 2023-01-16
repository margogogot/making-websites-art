import React from 'react';
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const { slugify } = require('../../utils/utilityFunctions')

const Projectcard = ({image, id, title, category, column}) => {
    console.log(image)
    let projectImg = <GatsbyImage image={getImage(image)} alt={title} />
    return (
        <div className={column}>
            <div className="portfolio">
                <div className="thumbnail">
                    <Link to={`/art/${slugify(title)}`}>
                        {projectImg}
                    </Link>
                </div>
                <div className="content">
                    <div className="inner">
                        {title && <h4 className="title"><Link to={`/art/${slugify(title)}`}>{title}</Link></h4>}
                        {category && <span className="category">{category}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projectcard;
