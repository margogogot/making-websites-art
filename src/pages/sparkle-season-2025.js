import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";


const IndexPage = () => (
    <Layout>
        <SEO title="Sparkle Season 2025" />
        <section style={{ minHeight: '100dvh', display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ maxWidth: "600px" }}>
                <p>You're too early! Do you shake your presents before Christmas, too?</p>
                <img src="/img/shaking-present.jpg" alt="picture of a nerd shaking a Christmas gift. That is you."></img>
            </div>

        </section>
    </Layout>

)
export default IndexPage;
