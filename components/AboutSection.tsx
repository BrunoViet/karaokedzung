import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-1x1" style={{ position: 'relative' }}>
              <Image
                src="/images/banner.jpg"
                alt="Karaoke ở Huế - Quán Karaoke Dzũng tại Huế với phòng ốc sang trọng"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
              <div className="about-video-info d-flex flex-column text-center">
                <h4 className="mt-auto">Karaoke Dzũng</h4>
                <h4>Kính chào Quý Khách</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            <em className="text-white">Chào mừng Quý Khách đến với</em>

            <h2 className="text-white mb-3">Karaoke Dzũng - Quán Karaoke ở Huế Chất Lượng</h2>

            <p className="text-white">
              Đến với quán <strong>Karaoke Dzũng</strong> - một trong những <strong>quán karaoke ở Huế</strong> hàng đầu, bạn sẽ cảm nhận được phòng ốc đẹp, sang trọng
              cùng hệ thống âm thanh, ánh sáng hiện đại. Mỗi phòng sẽ có không gian phong cách kiến trúc
              khác nhau và đẹp mắt. <strong>Karaoke Dzũng</strong> cũng thường xuyên cập nhật bài hát mới hay trên thị
              trường để đem lại giây phút thoải mái, thích thú cho khách hàng. Với mức <strong>giá rẻ</strong> và phong cách <strong>bình dân</strong>, quán là lựa chọn lý tưởng cho mọi người. Nếu bạn đang có nhu cầu tìm
              <strong> quán karaoke ở Huế</strong> để vui chơi, giải trí cuối tuần thì <strong>Karaoke Dzũng</strong> sẽ là địa điểm hoàn hảo dành cho bạn.
            </p>
            <h5 className="text-white" style={{ fontWeight: 'bold' }}>
              Địa chỉ: 2/29 Lê Hồng Phong, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế, Vietnam
            </h5>
            <p className="text-white" style={{ fontSize: 'small' }}>
              #karaoke #karaoke huế #karaoke hue #Karaoke Dzung
              #karaoke o hue #Karaoke o hue #karaoke o hue #hue #huế #Karaoke Dung #karaoke dzung #karaoke ở huế
            </p>

            <a href="#barista-team" className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4">
              Nhấn để xem ảnh các phòng
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

