import './Dashboard.css'

const Dashboard = () => {

    let posts = [{
        'user': 'adam',
        'text': 'lovely place',
        'title': 'asd'

    },
    {
        'user' : 'adam',
        'text': 'qwe',
        'title': 'post 2'
    }]

    posts = posts.map(e => {
        return <div className='card post mt-4 mb-4'>
            <div className='card-content'>
                <p className='title'>{e.title}</p>
                <div className='content'>{e.text}</div>
            </div>
        </div>
    })

    return (<><div className='background mt-5'></div><div className='columns is-multiline mt-6'><div className='column is-half is-offset-one-quarter'>{posts}</div></div></>)
}

export default Dashboard