import React, {useEffect} from 'react';

function Child(props) {

    console.log(props);

    useEffect(() => {
        console.log('자식 useEffect');
    }, [<props className="count"></props>]);

    return (
        <div>
            <h1>Child</h1>
        </div>
    );
}

export default Child;