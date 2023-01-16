import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ArtOne from "../../elements/art-stuff/artOne";


const Project = () => {
    const portfolioData = useStaticQuery(graphql`
        query artDataQuery {
            homedefaultJson(jsonId: {eq: "art-stuff"}) {
            title
            subtitle
            description
            }
        }
    `);
    const Title = portfolioData.homedefaultJson.title;
    const Subtitle = portfolioData.homedefaultJson.subtitle;
    const Description = portfolioData.homedefaultJson.description;
    return (
        <div className="rn-portfolio-area rn-section-gap bg-color-white portfolio-style-1">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">{Subtitle}</span>
                            <h2 className="title"  dangerouslySetInnerHTML={{ __html: Title }}></h2>
                            <div className="content">
                                <p className="description">{Description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ArtOne />
            </div>
        </div>
    )
}
export default Project
