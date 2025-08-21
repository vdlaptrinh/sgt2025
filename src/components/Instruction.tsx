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
        <h3>2. 📲 Tải ứng dụng S-Make</h3>
        <p>Quét mã QR hoặc nhấn vào nút bên dưới để tải app:</p>
        <div className="qr-grid">
          <img src="/images/sgt2025-8.jpg" alt="QR Google Play" />
          <a
            className="download-btn"
            href="https://play.google.com/store/apps/details?id=com.smake.googetest.mygoocar&hl=vi"
            target="_blank"
            rel="noreferrer"
          >
            Tải từ Google Play
          </a>
          <a
            className="download-btn"
            href="https://apps.apple.com/vn/app/s-make/id1214215708?l=vi"
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
            Mở ứng dụng <strong>S-Make</strong> trên điện thoại
          </li>
          <li>Chọn ngôn ngữ tiếng Việt</li>
          <li>Chọn Quốc tế (Đăng nhập bằng tài khoản quốc tế)</li>
          <li>
            Đăng nhập:
            <ul>
              <li>
                <strong>IMEI:</strong> Là số in trên thiết bị
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
                📍{" "}
                <strong>
                  Giám sát: Bấm vào xe để thấy thông tin: Điệp áp bình, Tốc
                  độ...{" "}
                </strong>
              </li>
              <li>
                🗺️{" "}
                <strong>
                  Danh sách: Chọn xe - Định vị, Lịch sử, Chi tiết, Chỉ dẫn{" "}
                </strong>
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
