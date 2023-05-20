import './styles/header.css'
import '../style/responsive.css'

export default function Header() {
    return(
        <header>
            <div class="profile-page">
                {/* <nav> */}
                    <a className ="brand-logo">Lilian Bernot</a>
                    <ul>
                        <li><a href="/">Retour à l'introduction !</a></li>
                    </ul>
                {/* </nav> */}
                <div className ="content-center">
                    <div className ="cc-profile-image"><a href="#"><img src="../images/pichilemu/hammac.jpg" alt="Image"/></a></div>
                </div>
                <p>Blog Chili</p>
            </div>
        </header>
    )
}