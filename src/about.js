import Navbar from "./nav"

const About = () => {
    return(
        <div className="about-section">
            <Navbar />
            <div className="about-us">
                <div className="about-content">
                    <div>
                    <h3>About Us</h3>
                    <h4 className="grey-qo-regular">Preserving Life's Moments, One Memory at a Time</h4>
                    </div>
                    <img src="https://img.freepik.com/free-photo/girl-taking-photo-her-friends-group-young-friends-hiking-through-forest-travel-hiking-adventure-concept_613910-18677.jpg?t=st=1734004415~exp=1734008015~hmac=c4a0ceda99b4615e3165f5dd9914098c1761d42893846e0d0dfb5afce1408fcf&w=740" alt="group photo" />
                    <p>Welcome to KisiK, your personal digital time capsule. We believe that memories are the most precious treasures, and we're here to help you preserve them for generations to come. Our mission is to provide a safe and beautiful digital space where you can cherish, organize, and share your most cherished memories. We understand the importance of preserving life's milestones, from childhood adventures to unforgettable travels, and believe that technology should enhance, not diminish, the human experience. Whether you're journaling, sharing photos, or simply reflecting on the past, we're here to help you preserve and celebrate the moments that matter most.</p>
                </div>
            </div>
        </div>
    )
}

export default About;