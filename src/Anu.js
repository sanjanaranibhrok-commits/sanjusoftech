import banner from "./announce.webp";
import "./Announce.css";

function Anu() {
    return (
        <div className="bar">

            <ul className="ul1">
                <li>Logo</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>

            <div className="banner">
                <img src={banner} alt="banner" />
            </div>

            <h1>Announcements</h1>

            <div className="announcement-box">

                <div className="announce">
                    <h2>Latest Announcements</h2>

                    <marquee direction="up" scrollamount="3" height="200">
                        <ul>
                            <li>Important announcement for all students.</li>
                            <li>College will remain closed tomorrow.</li>
                            <li>Students are requested to check the notice board.</li>
                            <li>College is organizing an important event.</li>
                            <li>Students must be present on time.</li>
                        </ul>
                    </marquee>
                </div>

                <div className="announce">
                    <h2>College Updates</h2>

                    <marquee direction="up" scrollamount="3" height="200">
                        <ul>
                            <li>New admission forms are available.</li>
                            <li>Students can contact the college office.</li>
                            <li>Annual function will be held soon.</li>
                            <li>Students are requested to participate.</li>
                            <li>Thank you for your cooperation.</li>
                        </ul>
                    </marquee>
                </div>

            </div>

            <footer>
                Copyrights@123 All Rights Reserved
            </footer>

        </div>
    );
}

export default Anu;