'use client'

const roomTypes = [
  {
    name: 'Phòng VIP',
    badge: 'No.1 Choice',
    description: 'Phòng hiện đại, đẹp, sang trọng, quý tộc, hoàng gia bậc nhất',
    roomId: 1, // Map với room id trong RoomsSection
  },
  {
    name: 'Phòng Cao Cấp',
    badge: 'Đề xuất cho bạn',
    description: 'Brewed coffee and steamed milk',
    roomId: 4,
  },
  {
    name: 'Phòng Gia Đình',
    description: 'Sinh động, nhẹ nhàng, tình cảm',
    roomId: 3,
  },
  {
    name: 'Phòng thường',
    description: 'Âm thanh sống động, phòng được trang trí thiết bị hiện đại',
    roomId: 2,
  },
  {
    name: 'Phòng Sinh Viên',
    description: 'Tổ chức sinh nhật cùng bạn bè',
    roomId: null, // Không có trong danh sách phòng
  },
]

const services = [
  {
    name: 'Trái cây',
    description: 'Sạch sẽ, giá cả phải chăng',
  },
  {
    name: 'Mực nướng',
    badge: 'Đề xuất cho bạn',
    description: 'Cực ngon và đậm vị biển',
  },
  {
    name: 'Beer',
    description: 'Đậm tình miền Trung',
  },
  {
    name: 'Thuốc lá',
    description: '555, Ngựa, Jett, Sài gòn',
  },
  {
    name: 'Nước ngọt',
    description: 'Coca, Pepsi, Sprite, 7UP',
  },
]

export default function ServicesSection() {
  const scrollToRoom = (roomId: number | null) => {
    if (roomId === null) return
    
    // Scroll đến phần RoomsSection
    const roomsSection = document.getElementById('barista-team')
    if (roomsSection) {
      const headerHeight = 100
      const targetPosition = roomsSection.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
      
      // Highlight phòng được chọn sau khi scroll
      setTimeout(() => {
        const roomElement = document.querySelector(`[data-room-id="${roomId}"]`)
        if (roomElement) {
          roomElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // Thêm class highlight tạm thời
          roomElement.classList.add('room-highlight')
          setTimeout(() => {
            roomElement.classList.remove('room-highlight')
          }, 2000)
        }
      }, 500)
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .room-highlight {
          animation: highlightPulse 0.6s ease-in-out;
        }
        
        @keyframes highlightPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 70px rgba(221, 161, 94, 0.5);
          }
        }
      `}} />
      <section 
        className="menu-section section-padding" 
        id="section_3"
        style={{
          backgroundImage: 'url(/images/room3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="menu-block-wrap">
                <div className="text-center mb-4 pb-lg-2">
                  <em className="text-white">Danh sách</em>
                  <h4 className="text-white">Loại Phòng</h4>
                </div>

                {roomTypes.map((room, index) => (
                  <div
                    key={index}
                    className={index === 0 || index === 2 || index === 4 ? 'menu-block' : 'menu-block my-4'}
                    onClick={() => scrollToRoom(room.roomId)}
                    style={{
                      cursor: room.roomId ? 'pointer' : 'default',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (room.roomId) {
                        e.currentTarget.style.transform = 'translateX(5px)'
                        e.currentTarget.style.opacity = '0.9'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (room.roomId) {
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.opacity = '1'
                      }
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <h6>{room.name}</h6>
                      {room.badge && <span className="badge ms-3">{room.badge}</span>}
                      {room.roomId && (
                        <i 
                          className="bi-arrow-right-circle ms-auto"
                          style={{
                            color: '#DDA15E',
                            fontSize: '18px',
                          }}
                        ></i>
                      )}
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>{room.description}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          <div className="col-lg-6 col-12">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Danh sách</em>
                <h4 className="text-white">Dịch vụ</h4>
              </div>

              {services.map((service, index) => (
                <div
                  key={index}
                  className={index === 0 || index === 2 || index === 4 ? 'menu-block' : 'menu-block my-4'}
                >
                  <div className="d-flex">
                    <h6>
                      {service.name}
                      {service.badge && <span className="badge ms-3">{service.badge}</span>}
                    </h6>
                  </div>
                  <div className="border-top mt-2 pt-2">
                    <small>{service.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

