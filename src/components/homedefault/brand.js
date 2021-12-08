import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Brand = () => {
    const brandQueryData = useStaticQuery(graphql`
        query brandQuery {
            homedefaultJson(jsonId: {eq: "brand"}) {
                brandGroup {
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 160
                          height: 65
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                }
            }
        }
    `)
    const BrandImage = brandQueryData.homedefaultJson.brandGroup;
    return (
        <div className="rn-brand-area ptb--70 bg-color-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-list-wrapper">
                            {BrandImage.map((data, index) => (
                                <div className="single-image" key={index}>
                                    <GatsbyImage image={getImage(data)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Brand
