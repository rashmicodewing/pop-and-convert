const Navbar = ({navSwitch}) => {
    // const handlePageSwitch = (item) => () => { navSwitch(item) }

    function handlePageSwitch(item){
        return(
            function() {
                return navSwitch(item)
            }
        )      
    }
    
    return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" ariaCurrent="page" href="#" onClick={handlePageSwitch('welcome')}>Welcome</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={handlePageSwitch('notification')}>Notification</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    )
}

export default Navbar