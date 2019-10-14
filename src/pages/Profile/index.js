import React from 'react';

function Profile({history}) {
    return (
        <>
            <h1>Profile</h1>
            <button onClick={() => history.goBack()}>Go Back</button>
        </>
    )
}

export default Profile;