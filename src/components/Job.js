import React from 'react';

const Job = props => {
    return(
        <div className="job-box">
            <h2 className="empresa">Empresa: {props.job.empresa}</h2>
            <p className="cargo">Cargo:{props.job.cargo}</p>
            <p className="descr">{props.job.desc}</p>
            <p className="in-out">Entrada: {props.job.entrada} || Saída : {props.job.saida}</p>
            <p className="portfolio">{props.job.portfolio}</p>
        </div>
    );
  
}

export default Job;