function NavBar() {
    return (

        <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
            <h1 className = 'navbar-brand'>The News Today</h1>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href = '#'>India</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Sports</a>
                </li>
    
                <li class="nav-item active">
                    <a class="nav-link" href="#" >Technology</a>
                </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar