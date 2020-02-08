import React from 'react';

const Whats = props => {
    return <a className="btn-whats" href={`https://api.whatsapp.com/send?phone=${props.telefone}`} target="_blank">Chamar no Whats</a>
}

export default Whats;