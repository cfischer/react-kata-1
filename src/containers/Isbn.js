import React from 'react';
import { Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

function Isbn() {
  const { id } = useParams();

  return (
    <div>
        <Header as='h1'>ISBN: {id} </Header>
        <p>Please follow the complete instructions from this Kata.</p>
    </div>
  );
}

export default Isbn;
