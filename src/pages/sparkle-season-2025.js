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

const getDaysTilChristmas = () => {
    var now = new Date().getTime();

    // Find the distance between now and Christmastime
    var distance = Christmas - now;
    return Math.floor(distance / (1000 * 60 * 60 * 24));

}

const IndexPage = () => {
    const [countDownMesssage, setCountDownMessage] = useState(getCountDownDate());
    const [daysTilChristmas, setDaysTilChristmas] = useState()
    setInterval(() => {
        setCountDownMessage(getCountDownDate());
        setDaysTilChristmas(getDaysTilChristmas());
    }, 1000)
    return (<Layout>
        <SEO title="Sparkle Season 2025" />
        <section style={{ minHeight: '100dvh', display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem", justifyContent: "center", alignItems: "center" }}>
            {daysTilChristmas > 1 &&
                <div style={{ width: "100%", maxWidth: "600px" }}>
                    <p style={{ fontWeight: "bold" }}>You're too early! Do you shake your presents before Christmas, too?</p>
                    <figure>
                        <img src="/img/shaking-present.jpg" alt="picture of a nerd shaking a Christmas gift. That is you."></img>
                        <caption style={{ width: "100%" }}>{countDownMesssage}</caption>
                    </figure>
                </div>
            }
            {daysTilChristmas <= 1 &&
                <div style={{ maxWidth: "600px" }}>
                    {daysTilChristmas > 0 &&
                        <p style={{ fontWeight: "bold" }}>Okay, you can have an early treat.</p>
                    }
                    {daysTilChristmas < 1 &&
                        <p style={{ fontWeight: "bold" }}>It's Christmas Day!</p>
                    }
                    <p>We made some Christmas music videos!</p>
                    <iframe style={{width: "100%"}} width="560" height="315" src="https://www.youtube.com/embed/ST09qjw0wTY?si=wWAQhgoLAQYq3tTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h6>Jingle Bellz</h6>
                    <br/>
                    <iframe style={{width: "100%"}} width="560" height="315" src="https://www.youtube.com/embed/HPrrj0oyoKQ?si=9wTz9g-xV-z-Rs0N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h6>What Child is This?</h6>

                </div>
            }

        </section>
    </Layout>)
}



export default IndexPage;
