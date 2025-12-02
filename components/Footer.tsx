import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 me-auto">
            <em className="text-white d-block mb-4">Địa chỉ Karaoke Dzung</em>

            <strong className="text-white">
              <i className="bi-geo-alt me-2"></i>
              2/29 Lê Hồng Phong, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế, Vietnam
            </strong>

            <ul className="social-icon mt-4">
              <li className="social-icon-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100063699004441"
                  className="social-icon-link bi-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </li>

              <li className="social-icon-item">
                <a href="" target="_new" className="social-icon-link bi-twitter">
                </a>
              </li>

              <li className="social-icon-item">
                <a href="" className="social-icon-link bi-whatsapp">
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
            <em className="text-white d-block mb-4">Contact</em>

            <p className="d-flex mb-1">
              <strong className="me-2">Phone:</strong>
              <a href="tel:0906404048" className="site-footer-link">
                (84) 0906404048 <br />
                (84) 0903532106
              </a>
            </p>

            <p className="d-flex">
              <strong className="me-2">Email:</strong>
              <a href="mailto:dzungdzung3000@yahoo.com.vn" className="site-footer-link">
                dzungdzung3000@yahoo.com.vn
              </a>
            </p>
          </div>

          <div className="col-lg-5 col-12">
            <em className="text-white d-block mb-4">Thời gian mở cửa</em>

            <ul className="opening-hours-list">
              <li className="d-flex">
                Cả tuần
                <span className="underline"></span>
                <strong>9:00 - 24:00</strong>
              </li>
            </ul>
          </div>

          <div className="col-lg-8 col-12 mt-4">
            <p className="copyright-text mb-0">
              Copyright © Karaoke Dzũng 2024 - Design By:{' '}
              <Link
                href="https://www.facebook.com/profile.php?id=100063699004441"
                target="_blank"
                rel="sponsored"
              >
                Trần Việt
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

