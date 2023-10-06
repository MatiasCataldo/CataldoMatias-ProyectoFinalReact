import './Footer.css'

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
          <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">Services</a></li>
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          </ul>
          <p className="copyright" id='copyright'>Strong Suplementos© - 2023</p>
      </footer>
  </div>
  )
}

export default Footer