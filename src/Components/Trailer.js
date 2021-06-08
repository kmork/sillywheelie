import React from 'react';
const Trailer=()=>{
    return (
        <div className="trailer">
            <header className="App-header">
                <iframe width="90%" height="800" src="https://www.youtube.com/embed/vCYosJwQCG0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </header>
        </div>
    );
}
export{Trailer}
