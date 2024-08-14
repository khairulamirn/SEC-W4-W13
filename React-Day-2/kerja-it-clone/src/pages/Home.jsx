import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    // Handler function - to navigate to view job
    function navigateToViewJob() {
        navigate('/job')
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={navigateToViewJob}>
                View job 1
            </button>
        </div>
    );
}

export default Home