export default function Jobs() {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-gray-900 mb-auto">
            <div className="text-white text-3xl text-center mb-4">Jobs</div>
            <div className="flex flex-col bg-gray-800 w-full max-w-lg mb-4">
                <div className="job-item">
                    <div className="job-title">Senior Software Engineer</div>
                    <div className="flex">
                        <div className="job-heading">Experience</div>
                        <div className="job-data">8+ years</div>
                    </div>
                    <div className="flex">
                        <div className="job-heading">Qualification</div>
                        <div className="job-data">Bachelors</div>
                    </div>
                </div>
                <div className="job-item">
                    <div className="job-title">Junior Software Engineer</div>
                    <div className="flex">
                        <div className="job-heading">Experience</div>
                        <div className="job-data">5+ years</div>
                    </div>
                    <div className="flex">
                        <div className="job-heading">Qualification</div>
                        <div className="job-data">Bachelors</div>
                    </div>
                </div>
                <div className="job-item">
                    <div className="job-title">Office Boy</div>
                    <div className="flex">
                        <div className="job-heading">Experience</div>
                        <div className="job-data">N/A</div>
                    </div>
                    <div className="flex">
                        <div className="job-heading">Qualification</div>
                        <div className="job-data">Intermediate</div>
                    </div>
                </div>
            </div>
            <div>
                <p>To apply, send updated resume to <a href="mailto:example@mail.com">example@mail.com</a></p>
            </div>
        </div>

    );
}