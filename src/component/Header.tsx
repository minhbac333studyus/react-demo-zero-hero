import {Link} from "react-router-dom";

console.log("Header render")
const Header = () => {
    return (
        <div style={{ position: 'fixed', top: 0, width: '100%' }}>
            <div style ={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                <h1>Header</h1>
                <img style={{width:128,height:128}} src="https://i.pinimg.com/736x/22/de/8d/22de8dbda07ba5571a97736b12905a17.jpg" />
            </div>
            <Link to = "/"> HOME</Link>
            <Link to = "/about"> ABOUT</Link>
            <Link to = "/contact"> CONTACT</Link>
        </div>
    )
}
export default Header;