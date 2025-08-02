// src/components/InstructionFull.tsx
import './css/Instruction.css';
import Gallery from './Gallery';
const galleryImages = [
    {
        original: '/images/app1.PNG',
        thumbnail: '/images/app1.PNG',
    },
    {
        original: '/images/app2.PNG',
        thumbnail: '/images/app2.PNG',
    },
    {
        original: '/images/app4.jpg',
        thumbnail: '/images/app4.jpg',
    },
    {
        original: '/images/app3.jpg',
        thumbnail: '/images/app3.jpg',
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
                    - Nối <strong>dây đỏ</strong> vào cực <strong>dương (+) của ắc quy</strong> <br />
                    - Nối <strong>dây đen</strong> vào cực <strong>âm (-)</strong> của ắc quy
                </p>
                <img src="/images/install.png" alt="Sơ đồ lắp đặt thiết bị GPS" />
            </div>

            {/* 2. TẢI ỨNG DỤNG */}
            <div className="section">
                <h3>2. 📲 Tải ứng dụng AKSH GPS</h3>
                <p>Quét mã QR hoặc nhấn vào nút bên dưới để tải app:</p>
                <div className="qr-grid">
                    <div className="qr-item">
                        <h4>Android</h4>
                        <img src="/images/qr_android.png" alt="QR Google Play" />
                        <a
                            className="download-btn"
                            href="https://play.google.com/store/apps/details?id=com.fw.gps.aikashenghuogoogle&hl=vi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tải từ Google Play
                        </a>
                    </div>

                    <div className="qr-item">
                        <h4>iPhone</h4>
                        <img src="/images/qr_ios.png" alt="QR App Store" />
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
            </div>

            {/* 3. SỬ DỤNG */}
            <div className="section">
                <h3>3. 📡 Hướng dẫn sử dụng</h3>
                <ol>
                    <li>Mở ứng dụng <strong>AKSH GPS</strong> trên điện thoại</li>
                    <li>Đăng nhập:
                        <ul>
                            <li><strong>ID Number:</strong> Là số in trên thiết bị</li>
                            <li><strong>Mật khẩu mặc định:</strong> <code>123456</code></li>
                        </ul>
                    </li>
                    <li>Giao diện chính gồm các chức năng:
                        <ul>
                            <li>📍 <strong>Theo dõi vị trí thời gian thực</strong></li>
                            <li>🗺️ <strong>Xem lại quỹ đạo hành trình</strong></li>
                        </ul>
                    </li>
                </ol>
                <Gallery images={galleryImages} title='Hình ảnh ứng dụng' />
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
