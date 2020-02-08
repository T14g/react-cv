import React from 'react';
import Job from './Job';

const JobList = props => {
    return props.jobs.map((job) =>{
        console.log(job);

        return <Job key={job.id} job={job} />;
         
    });
}

export default JobList;