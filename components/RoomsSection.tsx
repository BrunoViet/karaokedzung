import Image from 'next/image'

const rooms = [
  {
    id: 1,
    name: 'Phòng VIP',
    badge: 'VIP',
    description: 'Sang trọng và đẳng cấp',
    image: '/images/room1.jpg',
  },
  {
    id: 2,
    name: 'Phòng thường',
    badge: 'Normal',
    description: 'Thích hợp cho việc tổ chức tiệc tùng',
    image: '/images/room2.jpg',
  },
  {
    id: 3,
    name: 'Phòng Gia Đình',
    badge: 'Family Room',
    description: 'Ca hát cùng bên người thân',
    image: '/images/room3.jpg',
  },
  {
    id: 4,
    name: 'Phòng Cao Cấp',
    badge: 'Premium',
    description: 'Cung cấp đầy đủ Dịch Vụ từ A đến Z',
    image: '/images/room4.jpg',
  },
]

export default function RoomsSection() {
  return (
    <section className="barista-section section-padding section-bg" id="barista-team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            <em className="text-white">Danh sách các phòng hát</em>
            <h2 
              className="text-white"
              style={{
                fontSize: 'clamp(36px, 6vw, 56px)',
                fontWeight: '800',
                marginTop: '15px',
                background: 'linear-gradient(135deg, #ffffff 0%, #DDA15E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Đầy đủ các loại phòng
            </h2>
          </div>

          {rooms.map((room) => (
            <div key={room.id} className="col-lg-3 col-md-6 col-12 mb-4" data-room-id={room.id}>
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0" style={room.id === 2 ? { width: '100px' } : {}}>
                      {room.name}
                    </h4>
                    <p className="badge ms-4">
                      <em>{room.badge}</em>
                    </p>
                  </div>
                  <p className="text-white mb-0">{room.description}</p>
                </div>

                <div className="team-block-image-wrap" style={{ height: '510px', position: 'relative' }}>
                  <Image
                    src={room.image}
                    className="team-block-image img-fluid"
                    alt={room.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

