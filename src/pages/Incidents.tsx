import React from "react";

const Component = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/comments')
                const result = await res.json()
                setData(result)
            } catch (e) {
                alert('error!')
            }
        }
        getData()
    }, [])

    return (
        <main>
            <h2>Инциденты</h2>
            <div className={'scroll-box'}>
                <div style={{padding: 20}}>
                    {data
                        .map(({email, name, body}, i) => (
                            <div key={i}>
                                {/*<span>{email}</span>*/}
                                <span>{name}</span>
                                {/*<span>{body}</span>*/}
                            </div>
                        ))}
                </div>
            </div>
        </main>
    )
}

export default Component
