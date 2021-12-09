import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ServiceOne from "../../elements/service/serviceOne";
import { ProgressBar } from 'react-bootstrap';

const Service = () => {
    const bgshapeImages = useStaticQuery(graphql`
        query BgshapeImagesQuery {
            file(relativePath: {eq: "bg/bg-image-1.jpg"}) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationHeight
                    presentationWidth
                  }
                }
            },
            homedefaultJson(jsonId: {eq: "skill"}) {
                title
                description
            }
        }
    `);
    const Title = bgshapeImages.homedefaultJson.title;
    const Description = bgshapeImages.homedefaultJson.description;
    return (
        <div className="service-area bg-color-extra03 rn-section-gap" id="service">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb--30">
                                <span className="subtitle">SERVICES</span>
                                <h2 className="title">WHAT I DO</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ServiceOne column="col-lg-4 col-md-6 col-12" serviceStyle="service-style-1 mt--30" />
                    </div>
                </div>
            </div>
            {/* End Service Area  */}
        </div>
    )
}
export default Service;
