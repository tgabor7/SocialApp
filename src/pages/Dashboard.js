import './Dashboard.css'
import { usePosts } from '../hooks'

const Dashboard = () => {

    const [loading, data] = usePosts()

    const posts = data ? data.map(e => {
        return <div className='card post mt-4 mb-4'>
            <div className='card-content'>
                <p className='title'>{e.title}</p>
                <div className='content'><img src={e.url}></img></div>
            </div>
        </div>
    }) : []

    return (<>{}
    <div className='navbar is-fixed-top p-4 is-info'>
          <i className='is-size-2 fa fa-home pr-4'></i>
          <h1 className='is-size-4 has-text-weight-bold'>SocialApp</h1><div className='navbar-end'>
              <button className='button is'><h1 className='is-size-4 has-text-weight-bold mr-2' onClick={()=>{
                  window.location = '/login'
              }}>Login</h1></button>
          </div>
        </div><div className='background mt-5'></div><div className='columns is-multiline mt-6'><div className='column is-half is-offset-one-quarter'>
            {loading ? <button class="button is-primary is-loading is-size-1 mt-5">Loading</button> : posts}
            </div></div></>)
}

export default Dashboard