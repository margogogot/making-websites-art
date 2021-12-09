import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FiMapPin, FiPhoneIncoming, FiBookOpen , FiMail, FiCalendar, FiBook} from "react-icons/fi";
import { GiVirgo } from "react-icons/gi";
const infoList = [
    {
        "id": "2",
        "icon": <FiMapPin />,
        "label": "Location:",
        "link": "Pittsburgh Area"
    },
    {
        "id": "3",
        "icon": <FiBookOpen />,
        "label": "Study:",
        "link": "University of Pittsburgh - School of Information Science"
    },
    {
        "id": "4",
        "icon": <FiMail />,
        "label": "Mail:",
        "link": "mike@sqrld.com"
    },
    {
        "id": "5",
        "icon": <GiVirgo />,
        "label": "Astrological Sign:",
        "link": "Virgo"
    },
]


const About = ( ) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDefaultQuery {
            homedefaultJson (jsonId: {eq: "about"}) {
                title
                description
                downloadButton
                linkBUtton
                aboutData {
                    iconName
                    id
                    label
                    value
                }
            },
            file(relativePath: {eq: "images/banner/headshot-2.jpg"}) {
              childImageSharp {
                gatsbyImageData(
                  width: 395
                  height: 470
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
        }
    `);
    const PortfolioImages = getImage(aboutQueryData.file);
    const title = aboutQueryData.homedefaultJson.title;
    const description = aboutQueryData.homedefaultJson.description;
    const downloadButton = aboutQueryData.homedefaultJson.downloadButton;
    const linkBUtton = aboutQueryData.homedefaultJson.linkBUtton;

    return (
        <div className="rb-about-area about-style-01 rn-section-gap bg-color-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">BIOGRAPHY</span>
                            <h2 className="title">ABOUT ME</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--60 mb--30 row--25">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="thumbnail">
                            <div className="image">
                                <GatsbyImage className="portfolio-images" image={PortfolioImages} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12 mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="content">
                                <div className="section-title">
                                    {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title }}></h3>}
                                    {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>}
                                </div>
                                {infoList &&
                                    <ul className="myabout-list">
                                        {infoList.map((value, index) => (
                                            <div className="list" key={index}>
                                                <div className="icon">{value.icon}</div>
                                                <span className="label">{value.label}</span>
                                                <a className="link" href="#labelvalue">{value.link}</a>
                                            </div>
                                        ))}
                                    </ul>
                                }
                                <div className="button-group mt--20">
                                    {linkBUtton && <a className="rn-button" href="#contact"><span>{linkBUtton}</span></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
