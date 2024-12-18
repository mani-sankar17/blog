import { Link, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import Navbar from './nav';

const Home = () => {
    const navigate = useNavigate();
                    
    const {memory, loading, error} = useFetch("http://localhost:7000/memory");

    return(
        <section className="home-section">
          <Navbar />
            <div className="home-head">
            <h1 className="head">Moments become memories</h1>
            <h4 className="sub-head">Simple moments make great memories</h4>
            <button onClick={() => navigate("/post")} className="moment-button">Capture </button>
            </div>
            <div className="image-card">
                <img  style={{alignSelf:"end",}}  src="https://img.freepik.com/free-photo/skater-girl-urban-from-back-shot-copy-space_23-2148787225.jpg?ga=GA1.1.1841183981.1707650756" alt="memory" />
                <img src="https://img.freepik.com/free-photo/vertical-silhouette-person-climbing-up-hill-sunset_181624-45298.jpg?ga=GA1.1.1841183981.1707650756" alt="memory" />
                <img  style={{alignSelf:"end",}}  src="https://img.freepik.com/free-photo/three-friends-mountain-top-looking-view_23-2148139652.jpg?ga=GA1.1.1841183981.1707650756" alt="memory" />
            </div>
            <h2 className="container-head">Memories</h2>
            <div className="memory-container">

            {loading && <div>Loading...</div>}

            {error && <div>Failed to fetch</div>}

            { memory && memory.map(mem => {
                return <Link key={mem.id} to={`/details/${mem.id}`} >
                <div className="memory" >
                    <img src={mem.url} alt="img" />
                    <div className="memory-content">
                        <p>{mem.title}</p>
                        <p className="memory-date">{mem.date}</p>
                    </div>
                </div>
                </Link>
        })}
            </div>

            <div className="footer">
                <div className="foot-st">
                    <h1>KisiK</h1>
                    <b>Stay tuned by subscribing to our newsletter</b>
                    <input type="email" placeholder="Enter email here" required/>
                    <button className='subscribe' onClick={() => navigate("/thanks")}>Subscribe</button>
                </div>
                <div className="foot-mid">
                    <h2>Quick links</h2>
                    <Link to="/">Home</Link>
                    <Link to="/post">Post</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Contact</Link>
                </div>
                <div className="foot-end">
                    <h2>Follow us</h2>
                    <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                    <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                    <p><i className="fa-brands fa-twitter"></i> Twitter</p>
                    <p><i className="fa-brands fa-youtube"></i> Youtube</p>
                </div>
            </div>
            </section>
    )
}

export default Home;