import "./firstpage.css"
import logo from "../images/WhatsApp_Image_2023-03-12_at_13.43.33-removebg-preview.png"

export const FirstPage = () => {

    return (<>
        <div class="logo">
            <img src={logo} alt="Logo LA" />
            <label>Lenin Anguisaca</label>
            <label>Systems Enginner and Software Developer</label>

        </div>
        <div class="links">
            <a href="https://github.com/lenin120" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/lenin-anguisaca-66335b132/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="mailto: leninsantiago19972@gmail.com">Gmail</a>
        </div>

    </>)
}