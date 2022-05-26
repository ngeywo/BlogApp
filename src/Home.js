import PostsList from "./postsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from "./useFetch";

const Home = () => {

    const {data: posts, isLoading, error} = useFetch('http://localhost:8000/posts')

    
    

    return (
        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="home">
                        {error && <div><h2> {error}</h2> </div>}
                        {isLoading && <div> Loading ... </div>}
                        {posts && <PostsList posts={posts} title='All posts'  />}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-section" >
                        <h3>Trending Events</h3>
                        <p className='text-muted'><strong>Most trending events of the day</strong></p>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-light">Latest events</li>
                            <li className="list-group-item list-group-item-light">Announcements</li>
                            <li className="list-group-item list-group-item-light">Calendars</li>
                            <li className="list-group-item list-group-item-light">etc</li>
                        </ul>
                    </div>
                </div>
            </div >

        </main >








    );
}

export default Home;