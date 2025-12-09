import React, { useState, useMemo } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Christmas = new Date("Dec 25, 2025 00:00:00").getTime();
const getCountDownDate = () => {
    var now = new Date().getTime();

    // Find the distance between now and Christmastime
    var distance = Christmas - now;

    // Get days, hours, minutes, seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until Christmas 2025.`
}

const IndexPage = () => {
    const [countDownMesssage, setCountDownMessage] = useState(getCountDownDate());
    setInterval(() => {
        setCountDownMessage(getCountDownDate());
    }, 1000)
    return (<Layout>
        <SEO title="Sparkle Season 2025" />
        <section style={{ minHeight: '100dvh', display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "600px" }}>
                <p style={{ fontWeight: "bold" }}>You're too early! Do you shake your presents before Christmas, too?</p>
                <figure>
                    <img src="/img/shaking-present.jpg" alt="picture of a nerd shaking a Christmas gift. That is you."></img>
                    <caption>{countDownMesssage}</caption>
                </figure>
            </div>

        </section>
    </Layout>)
}



export default IndexPage;
