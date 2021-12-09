import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout";
import { FiList, FiUser, FiInstagram, FiExternalLink } from "react-icons/fi";
import { graphql } from 'gatsby'

const ProjectDetails = ({data}) => {
    const projectData = data.projectJson;
    console.log(projectData)
    const projectFeaturedImage = getImage(projectData.featured_image)
    console.log(projectFeaturedImage)
    const projectImage = data.projectJson.features;
    return (
        <Layout>
            <div className="rn-project-details-area rn-section-gapBottom pt--90 bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="page-top">
                                    <h1 className="title_holder">{projectData.title}</h1>
                                </div>
                                <div className="portfolio-content mt--90 mt_lg--30 mt_md--20 mt_sm--20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content-left">
                                                <h3>Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Category:</span><span className="projectinfo">{projectData.category}</span></li>
                                                    <li><span className="icon"><FiUser />Client:</span><span className="projectinfo">{projectData.client}</span></li>
                                                    {projectData.link &&
                                                      <li><span className="icon"><FiExternalLink />Link:</span><span className="projectinfo"><a href={projectData.link} rel="nofollow" target="_blank">{projectData.title}</a></span></li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--30 mt_sm--30">
                                            <div className="content-left">
                                                <p>{projectData.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                                    <GatsbyImage image={projectFeaturedImage} alt={projectData.title} />
                                </div>

                                <div className="image-group">
                                    {projectImage.map((data, index) => (
                                        <div className="single-image mt--30" key={index}>
                                            <GatsbyImage image={getImage(data.image)} />
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
    query($id: String!) {
        projectJson(id: {eq: $id}) {
            id
            title
            body
            category
            client
            imgesBY
            link
            featured_image {
              childImageSharp {
                gatsbyImageData(
                  width: 2000
                  height: 1000
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            },
            features {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      height: 1280
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
            }

        }
    }
`;
export default ProjectDetails;
