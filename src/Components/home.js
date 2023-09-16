import React from "react";

function Home({ todo }) {
    const { id, name, completed } = todo;
    const title = <h1>{name}</h1>
    const status = completed ? <h1><strike>{name}</strike></h1> : <h1>{name}</h1>
    return (
        <React.Fragment>
            <center data-testid={`test-${id}`}>
                {status}
            </center>
        </React.Fragment>
    )
}

export default Home;