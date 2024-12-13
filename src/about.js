import Navbar from "./nav"

const About = () => {
    return(
        <div className="about-section">
            <Navbar />
            <div className="about-us">
                <img src="https://img.freepik.com/free-photo/girl-taking-photo-her-friends-group-young-friends-hiking-through-forest-travel-hiking-adventure-concept_613910-18677.jpg?t=st=1734004415~exp=1734008015~hmac=c4a0ceda99b4615e3165f5dd9914098c1761d42893846e0d0dfb5afce1408fcf&w=740" alt="group photo" />
                <div className="about-content">
                    <h3>About Us</h3>
                    <h4  className="grey-qo-regular">Preserving Life's Moments, One Memory at a Time</h4>
                    <p>Welcome to KisiK, your personal digital time capsule. We believe that memories are the most precious treasures, and we're here to help you preserve them for generations to come.</p>
                </div>
            </div>
        </div>
    )
}

export default About;