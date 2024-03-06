import "./navbar.scss"

const Navbar =()=> {

    return(
        <>
       <div className="navbar">
        <div className="wrapper">

            <span>Protolio</span>
            <div className="social-icons">
                <a href=""><img src="/facebook.png"></img></a>
                <a href=""><img src="/instagram.png"></img></a>
                <a href=""><img src="/youtube.png"></img></a>
                <a href=""><img src="/dribbble.png"></img></a>
            </div>
        </div>

        </div>
        </>

    )
}
export default Navbar;