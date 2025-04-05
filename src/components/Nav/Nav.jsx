import { useContext } from 'react'
import { ResetButton } from '../ResetButton/ResetButton'
import { CartContext } from '../../context/CartContext'
import logo from '../../assets/images/logo.png'

export function Nav() {
    const { countCart } = useContext(CartContext)

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand d-flex">
                    <img src={logo} alt="GAPSI LOGO" width="90" height="auto" />
                    <span className='d-none d-md-block'>e-Commerce Gapsi</span>
                </a>
                <div className="cart-container ms-auto px-3 border-end d-flex justify-content-center align-items-center">
                    <p className='m-0 px-1 bg-dark text-light me-1' style={{ borderRadius: '3px' }}>
                        {countCart()}
                    </p>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3" id="navbarSupportedContent" style={{ flexGrow: 'unset' }}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <ResetButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
