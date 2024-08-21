import { useNavigate } from "react-router-dom"

function Home() {
    const jobs = [
        { id: 1, title: "Fullstack Developer" },
        { id: 2, title: "Frontend Developer" },
        { id: 3, title: "Backend Developer" },
        { id: 4, title: "Data Scientist" },
        { id: 5, title: "Data Analyst" },
        { id: 6, title: "Data Engineer" },
        { id: 7, title: "Data Architect" },
    ];
    const navigate = useNavigate()
    // Handler function - to navigate to view job
    function navigateToViewJob(id) {
        navigate(`/job/${id}`);
    }
    return (
        <div>
            <h1>Home</h1>

            {/* <button onClick={
                //  this is how we call the handler function with parameter in JSX
                function(){
                    navigateToViewJob(1)
                }}
            >View job 1</button>
            <button onClick={() => navigateToViewJob(2)}>View job 2</button>
            <button onClick={() => navigateToViewJob(3)}>View job 3</button>
            <button onClick={() => navigateToViewJob(4)}>View job 4</button>
            <button onClick={() => navigateToViewJob(5)}>View job 5</button>
            <button onClick={() => navigateToViewJob(6)}>View job 6</button>
            <button onClick={() => navigateToViewJob(7)}>View job 7</button> */}

            {/* list all jobs dynamically from the array */}
            {jobs.map(function (job) {
                return (
                    <div style={{
                        border: "1px solid black", 
                        marginBottom: "10px", 
                        padding: "10px"
                        }}
                    >
                        <h3>{job.title}</h3>
                        <button onClick={() => navigateToViewJob(job.id)}>View Job</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Home