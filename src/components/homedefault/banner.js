import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from "gbimage-bridge"
import TextLoop from "react-text-loop";

const Banner = () => {
    const banenrQueryData = useStaticQuery (graphql`
        query BannerDefaultQuery {
                homedefaultJson(jsonId: {eq: "main-banner"}) {
                title
                subtitle
                bgImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
            },
            file(relativePath: {eq: "images/banner/headshot.jpg"}) {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
        }
    `);

    const BannerImages = convertToBgImage(getImage(banenrQueryData.homedefaultJson.bgImage));
    const PortfolioImages = getImage(banenrQueryData.file);
    const Title = banenrQueryData.homedefaultJson.title;
    const SubTitle = banenrQueryData.homedefaultJson.subtitle;
    return (
        <div className="rn-slider-area" id="home">
            {/* Start Single Slider  */}
            <BackgroundImage className="rn-slide slider-style-01 banner-fixed-height" {...BannerImages}>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content text-center">
                                        <div className="thumbnail">
                                            <GatsbyImage className="portfolio-images" image={PortfolioImages} />
                                        </div>
                                        <h1 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h1>
                                        <h4 className="subtitle">I'm<TextLoop mask={true}>
                                                <span>a Web Developer</span>
                                                <span>a Buisness Owner</span>
                                                <span>a Designer</span>
                                                <span>an Artist</span>
                                            </TextLoop>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="black-bg-overlay"></div>
                <a className="angle-down-btn" herf="#"><i className="xcon-angle-double-down"></i></a>
            </BackgroundImage>
            {/* End Single Slider  */}
        </div>
    )
}
export default Banner;
