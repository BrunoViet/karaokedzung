export default function ContactSection() {
  return (
    <section className="contact-section section-padding" id="section_5">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <div
              style={{
                display: 'inline-block',
                padding: '8px 24px',
                background: 'rgba(188, 108, 37, 0.2)',
                borderRadius: '50px',
                marginBottom: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <em
                className="text-white"
                style={{
                  fontSize: '16px',
                  fontStyle: 'italic',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                }}
              >
                <i className="bi-star-fill me-2" style={{ color: '#DDA15E' }}></i>
                Bạn muốn đặt phòng karaoke ở Huế tại Karaoke Dzũng
                <i className="bi-star-fill ms-2" style={{ color: '#DDA15E' }}></i>
              </em>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2
              className="mb-4"
              style={{
                fontSize: '52px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffffff 0%, #DDA15E 50%, #BC6C25 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 10px rgba(255, 255, 255, 0.1)',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Liên hệ với chúng tôi
              <span
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #BC6C25, #DDA15E)',
                  borderRadius: '2px',
                }}
              ></span>
            </h2>
            <p
              className="text-white"
              style={{
                fontSize: '20px',
                opacity: 0.95,
                fontWeight: '300',
                letterSpacing: '0.5px',
                marginTop: '30px',
              }}
            >
              <i className="bi-clock-fill me-2" style={{ color: '#DDA15E' }}></i>
              Chúng tôi luôn sẵn sàng phục vụ bạn 24/7
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <a
              href="tel:+84906404048"
              className="contact-card-link"
              style={{
                textDecoration: 'none',
                display: 'block',
                height: '100%',
              }}
            >
              <div
                className="contact-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(221, 161, 94, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(188, 108, 37, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <i className="bi-telephone-fill" style={{ fontSize: '36px', color: '#fff' }}></i>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '6px 18px',
                    background: 'linear-gradient(135deg, rgba(188, 108, 37, 0.4), rgba(221, 161, 94, 0.4))',
                    borderRadius: '20px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <h4
                    className="text-white mb-0"
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <i className="bi-telephone-forward me-2" style={{ fontSize: '14px' }}></i>
                    Hotline 1
                  </h4>
                </div>
                <div
                  className="text-white"
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'block',
                    transition: 'color 0.3s',
                  }}
                >
                  0906 404 048
                </div>
                <div
                  style={{
                    marginTop: '15px',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontStyle: 'italic',
                  }}
                >
                  <i className="bi-phone-fill me-2"></i>
                  Nhấn để gọi ngay
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <a
              href="tel:+84903532106"
              className="contact-card-link"
              style={{
                textDecoration: 'none',
                display: 'block',
                height: '100%',
              }}
            >
              <div
                className="contact-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(221, 161, 94, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(188, 108, 37, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <i className="bi-phone-fill" style={{ fontSize: '36px', color: '#fff' }}></i>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '6px 18px',
                    background: 'linear-gradient(135deg, rgba(188, 108, 37, 0.4), rgba(221, 161, 94, 0.4))',
                    borderRadius: '20px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <h4
                    className="text-white mb-0"
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <i className="bi-phone-vibrate me-2" style={{ fontSize: '14px' }}></i>
                    Hotline 2
                  </h4>
                </div>
                <div
                  className="text-white"
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'block',
                    transition: 'color 0.3s',
                  }}
                >
                  0903 532 106
                </div>
                <div
                  style={{
                    marginTop: '15px',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontStyle: 'italic',
                  }}
                >
                  <i className="bi-phone-fill me-2"></i>
                  Nhấn để gọi ngay
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-12 col-12 mb-4">
            <div
              className="contact-card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(188, 108, 37, 0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <i className="bi-envelope-fill" style={{ fontSize: '36px', color: '#fff' }}></i>
              </div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  background: 'linear-gradient(135deg, rgba(188, 108, 37, 0.4), rgba(221, 161, 94, 0.4))',
                  borderRadius: '20px',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <h4
                  className="text-white mb-0"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  <i className="bi-envelope-paper me-2" style={{ fontSize: '14px' }}></i>
                  Email
                </h4>
              </div>
              <a
                href="mailto:dzungdzung3000@yahoo.com.vn"
                className="text-white"
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'block',
                  wordBreak: 'break-word',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#DDA15E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                dzungdzung3000@yahoo.com.vn
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="row">
          <div className="col-lg-12 col-12">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '25px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div style={{ width: '100%', maxWidth: '1200px' }}>
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    padding: '25px',
                    background: 'rgba(188, 108, 37, 0.15)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 24px',
                      background: 'linear-gradient(135deg, rgba(188, 108, 37, 0.3), rgba(221, 161, 94, 0.3))',
                      borderRadius: '30px',
                      marginBottom: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <i
                      className="bi-geo-alt-fill"
                      style={{
                        fontSize: '24px',
                        color: '#DDA15E',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                      }}
                    ></i>
                    <h3
                      className="text-white mb-0"
                      style={{
                        fontSize: '26px',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        background: 'linear-gradient(135deg, #ffffff 0%, #DDA15E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Vị trí của chúng tôi
                    </h3>
                  </div>
                  <p
                    className="text-white"
                    style={{
                      fontSize: '17px',
                      opacity: 0.95,
                      fontWeight: '400',
                      letterSpacing: '0.3px',
                      margin: 0,
                    }}
                  >
                    <i className="bi-pin-map-fill me-2" style={{ color: '#DDA15E', fontSize: '18px' }}></i>
                    2/29 Lê Hồng Phong, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2995394717!2d107.59175567601365!3d16.460363584277214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13f1c8c909b%3A0xb3d0c0fce979874!2sKaraoke%20Dzung!5e0!3m2!1sen!2s!4v1709561520773!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  style={{
                    border: 0,
                    borderRadius: '20px',
                    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.4)',
                    minHeight: '300px',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
