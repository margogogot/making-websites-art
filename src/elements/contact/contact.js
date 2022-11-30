import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import { FiLinkedin, FiGithub, FiGlobe, FiTwitter,FiFacebook, FiInstagram, FiPhoneIncoming, FiCodepen } from "react-icons/fi";
import Contactform from "./contactform";
const infoList = [
    {
        "id": "1",
        "icon": <FiLinkedin />,
        "label": "LinkedIn:",
        "link": "https://www.linkedin.com/in/margotwieczorkowski/"
    },
    {
        "id": "2",
        "icon": <FiGithub />,
        "label": "GitHub:",
        "link": "https://github.com/margogogot"
    },
    {
        "id": "3",
        "icon": <FiCodepen />,
        "label": "Codepen:",
        "link": "https://codepen.io/margogot/pens/"
    }
]

const Contact = () => {
    const contactData = useStaticQuery(graphql`
        query contactDataQuery {
            homedefaultJson(jsonId: {eq: "contactus"}) {
                title
                subtitle
            }
            site {
                siteMetadata {
                    getform_url
                }
            }
        }
    `);
    const Title = contactData.homedefaultJson.title;
    const Description = contactData.homedefaultJson.subtitle;
    const { site: { siteMetadata: { getform_url } } } = contactData;
    return (
        <div className="rn-contact-area rn-section-gap bg-color-white" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb--30">
                            <span className="subtitle">{Description}</span>
                            <h2 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h2>
                            <p className="description mt--75 mt_sm--30 mt_md--30">Please fill out the form on this section to contact with me.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Start Contact Form  */}
                    <div className="col-lg-6 col-12 mt--30">
                        <Contactform url={getform_url} />
                    </div>
                    {/* End Contact Form  */}

                    <div className="col-lg-6 col-12 mt--30">
                        <div className="contact-info-list-wrapper">
                            {infoList.map((value, index) => (
                                <div className="list" key={index}>
                                    <div className="icon">{value.icon}</div>
                                    <span className="label">{value.label}</span>
                                    <a className="link" href={value.link} target="_blank">{value.link}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
