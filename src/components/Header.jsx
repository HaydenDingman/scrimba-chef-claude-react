import chefClaude from "../assets/chef-claude-icon.png"

function Header() {
    return (
        <header>
            <img src={chefClaude} alt="Chef Claude" className="img-chef-claude" />
            <p className="title">Chef Claude</p>
        </header>
    )
}

export default Header