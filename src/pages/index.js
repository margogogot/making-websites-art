import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/homedefault/banner";
import About from "../components/homedefault/about";
import Service from "../components/homedefault/service";
import Project from "../components/homedefault/project";
import ArtStuff from '../components/homedefault/art-stuff'
import Testimonial from "../components/homedefault/testimonial";
import Timeline from "../components/homedefault/timeline";
// import BlogPost from "../components/blogPost";
import Contact from "../elements/contact/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Margot Wieczorkowski" />
    <Banner />
    <About />
    <Service />
    <div id="portfolio">
        <Project />
    </div>
    <div id="art-stuff">
        <ArtStuff />
    </div>
    <Contact />
  </Layout>

)
export default IndexPage;
