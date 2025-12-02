'use client'

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .hero-content {
          animation: fadeInUp 1s ease-out;
        }

        .hero-badge {
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-title {
          animation: fadeInUp 1.2s ease-out;
        }

        .hero-buttons {
          animation: fadeInUp 1.4s ease-out;
        }
      `}</style>
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 col-12 mx-auto text-center hero-content">
              {/* Content wrapper với relative position */}
              <div style={{ position: 'relative', zIndex: 1, padding: '50px 30px' }}>
              {/* Background overlay cho content */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  borderRadius: '40px',
                  zIndex: -1,
                  pointerEvents: 'none',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              ></div>
              {/* Badge */}
              <div
                className="hero-badge"
                style={{
                  display: 'inline-block',
                  padding: '10px 28px',
                  background: 'rgba(188, 108, 37, 0.25)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50px',
                  marginBottom: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              >
                <em
                  className="text-white"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <i className="bi-star-fill" style={{ color: '#DDA15E', fontSize: '14px' }}></i>
                  Giới thiệu
                  <i className="bi-star-fill" style={{ color: '#DDA15E', fontSize: '14px' }}></i>
                </em>
              </div>

              {/* Title */}
              <h1
                className="hero-title"
                style={{
                  fontSize: 'clamp(42px, 8vw, 72px)',
                  fontWeight: 'bold',
                  marginBottom: '25px',
                  lineHeight: '1.2',
                  background: 'linear-gradient(135deg, #ffffff 0%, #DDA15E 50%, #BC6C25 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                }}
              >
                Karaoke Dzũng
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120px',
                    height: '5px',
                    background: 'linear-gradient(90deg, transparent, #DDA15E, transparent)',
                    borderRadius: '3px',
                  }}
                ></span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-white mb-5"
                style={{
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  fontWeight: '300',
                  letterSpacing: '0.5px',
                  lineHeight: '1.6',
                  opacity: 0.95,
                  maxWidth: '700px',
                  margin: '0 auto 40px',
                }}
              >
                Kính <em style={{ color: '#DDA15E', fontStyle: 'italic', fontWeight: '600' }}>chào</em> Quý Khách.
                <br />
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>
                  Địa điểm karaoke hàng đầu tại Huế với không gian sang trọng và dịch vụ chuyên nghiệp
                </span>
              </p>

              {/* Buttons */}
              <div className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                <a
                  className="btn custom-btn custom-border-btn smoothscroll"
                  href="#section_2"
                  style={{
                    padding: '14px 32px',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '50px',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                    e.currentTarget.style.color = '#BC6C25'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <i className="bi-info-circle-fill"></i>
                  Giới thiệu về quán
                </a>

                <a
                  className="btn custom-btn smoothscroll"
                  href="#section_3"
                  style={{
                    padding: '14px 32px',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #BC6C25, #DDA15E)',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(188, 108, 37, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(188, 108, 37, 0.6)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #DDA15E, #BC6C25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(188, 108, 37, 0.4)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #BC6C25, #DDA15E)'
                  }}
                >
                  <i className="bi-grid-3x3-gap-fill"></i>
                  <strong>Xem dịch vụ</strong>
                </a>
              </div>

              {/* Stats or Features */}
              <div
                style={{
                  marginTop: '60px',
                  display: 'flex',
                  gap: '40px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  opacity: 0.9,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#DDA15E',
                      marginBottom: '5px',
                    }}
                  >
                    <i className="bi-music-note-beamed"></i>
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Bài hát mới
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#DDA15E',
                      marginBottom: '5px',
                    }}
                  >
                    <i className="bi-star-fill"></i>
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Chất lượng cao
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#DDA15E',
                      marginBottom: '5px',
                    }}
                  >
                    <i className="bi-clock-fill"></i>
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    24/7 Phục vụ
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-slides"></div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '100px',
            height: '100px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '150px',
            height: '150px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        ></div>
      </section>
    </>
  )
}
