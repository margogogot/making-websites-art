import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {BlogThumb} from './thumbnail.stc'


const Thumbnail = ({image, path, title}) => {
    const imageSrc = image.childImageSharp;
    let blogImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        blogImage = <GatsbyImage image={getImage(imageSrc)} alt={title}/>;
    } else if(imageSrc.fluid){
        blogImage = <GatsbyImage image={getImage(imageSrc)} alt={title}/>
    } else{
        blogImage = <img src={imageSrc} alt={title}/>
    }
    return (
        <BlogThumb>
            <Link to={path}>{blogImage}</Link>
        </BlogThumb>
    )
}

Thumbnail.defaultProps = {
    image: {}
}
export default Thumbnail
