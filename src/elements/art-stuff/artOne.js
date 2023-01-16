import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Projectcard from "./artcard";

const ArtOne = () => {
    const ProjectData = useStaticQuery(graphql`
        query ArtDataQuery {
            allArtStuffJson(limit: 6, sort: {fields: jsonId}) {
                edges {
                  node {
                    id
                    title
                    category
                    featured_image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 360
                          height: 340
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                  }
                }
            }
        }
    `);

    const projectsData = ProjectData.allArtStuffJson.edges;
    return (
        <div className="row row--25">
            {projectsData.map( data => (
                <Projectcard key={data.node.id}
                    column="col-lg-4 col-md-6 col-12"
                    portfolioStyle="portfolio-style-1"
                    key={data.node.id}
                    id={data.node.id}
                    image={data.node.featured_image}
                    title={data.node.title}
                    category={data.node.category}
                />
            ))}
        </div>
    )
}

export default ArtOne;
