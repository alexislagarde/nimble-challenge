
function CandidateEmail({ candidate }) {
return (
    <div className="card-candidates">
        <table className="candidatesTable" style={{ border: "1px solid black" }}>
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Candidate ID</th>
            <th>Application ID</th>
            </tr>
        </thead>

        <tbody>
            {candidate && (
            <tr>
                <td>{candidate.firstName}</td>
                <td>{candidate.lastName}</td>
                <td>{candidate.email}</td>
                <td>{candidate.candidateId}</td>
                <td>{candidate.applicationId}</td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
    );
}

export default CandidateEmail;