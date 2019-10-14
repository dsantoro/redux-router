import React from 'react';
import { connect } from 'react-redux';
import { signIn }  from '../../store/actions';

function Home({signIn}) {
    return (
        <>
            <h1>Home</h1>
            <button onClick={signIn}>Profile</button>
        </>
    )
}

export default connect(
    null,
    { signIn }
)(Home);