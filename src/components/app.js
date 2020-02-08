import React from 'react';
import unsplash from '../api/api';//versão com default da URL
import JobList from './JobList';
import Whats from './WhatsApp';
import TopBar from './Top-2-info';


class App extends React.Component {
    state = { jobs: [] };

    constructor(props) {
        super(props);
        this.getJobs();
    }

    getJobs = async() => {
        const response = await unsplash.get('jobs/read.php');
        this.setState({ jobs : response.data.resultados });
    }

     
    render() {
        return <div>
            <TopBar />
            <JobList jobs={this.state.jobs} />
            <Whats telefone="5551991595579"/>
        </div>
    }
}

export default App;
