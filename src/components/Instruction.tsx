// src/components/InstructionFull.tsx
import "./css/Instruction.css";
import Gallery from "./Gallery";
const galleryImages = [
  {
    original: "/images/sgt2025-13.jpg",
    thumbnail: "/images/sgt2025-13.jpg",
  },
  {
    original: "/images/sgt2025-16.jpg",
    thumbnail: "/images/sgt2025-16.jpg",
  },
  {
    original: "/images/sgt2025-14.jpg",
    thumbnail: "/images/sgt2025-14.jpg",
  },
  {
    original: "/images/sgt2025-6.jpg",
    thumbnail: "/images/sgt2025-6.jpg",
  },
];
export default function Instruction() {
  return (
    <section id="instruction" className="instruction-full">
      <h2>📘 Hướng dẫn sử dụng thiết bị</h2>

      {/* 1. LẮP ĐẶT */}
      <div className="section">
        <h3>1. 🔧 Lắp đặt thiết bị</h3>
        <p>
          - Nối <strong>dây đỏ</strong> vào cực{" "}
          <strong>dương (+) của ắc quy</strong> <br />- Nối{" "}
          <strong>dây đen</strong> vào cực <strong>âm (-)</strong> của ắc quy
        </p>
        <img src="/images/install.png" alt="Sơ đồ lắp đặt thiết bị GPS" />
      </div>

      {/* 2. TẢI ỨNG DỤNG */}
      <div className="section">
        <h3>2. 📲 Tải ứng dụng S-make</h3>
        <p>Quét mã QR hoặc nhấn vào nút bên dưới để tải app:</p>
        <div className="qr-grid">
          <img src="/images/sgt2025-8.jpg" alt="QR Google Play" />
          <a
            className="download-btn"
            href="https://play.google.com/store/apps/details?id=com.fw.gps.aikashenghuogoogle&hl=vi"
            target="_blank"
            rel="noreferrer"
          >
            Tải từ Google Play
          </a>
          <a
            className="download-btn"
            href="https://apps.apple.com/us/app/aksh-gps/id1057139214"
            target="_blank"
            rel="noreferrer"
          >
            Tải từ App Store
          </a>
        </div>
      </div>

      {/* 3. SỬ DỤNG */}
      <div className="section">
        <h3>3. 📡 Hướng dẫn sử dụng</h3>
        <ol>
          <li>
            Mở ứng dụng <strong>AKSH GPS</strong> trên điện thoại
          </li>
          <li>
            Đăng nhập:
            <ul>
              <li>
                <strong>ID Number:</strong> Là số in trên thiết bị
              </li>
              <li>
                <strong>Mật khẩu mặc định:</strong> <code>123456</code>
              </li>
            </ul>
          </li>
          <li>
            Giao diện chính gồm các chức năng:
            <ul>
              <li>
                📍 <strong>Theo dõi vị trí thời gian thực</strong>
              </li>
              <li>
                🗺️ <strong>Xem lại quỹ đạo hành trình</strong>
              </li>
            </ul>
          </li>
        </ol>
        <Gallery images={galleryImages} title="Hình ảnh ứng dụng" />
        {/* <div className="image-scroll">
                    <img src="/images/app1.PNG" alt="Giao diện AKSH 1" />
                    <img src="/images/app2.PNG" alt="Giao diện AKSH 2" />
                    <img src="/images/app4.jpg" alt="Giao diện AKSH 3" />
                    <img src="/images/app3.jpg" alt="Giao diện AKSH 4" />
                </div> */}
      </div>
    </section>
  );
}
