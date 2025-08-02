// src/components/DownloadAppStatic.tsx
import './css/DownloadApp.css';

export default function DownloadApp() {
    return (
        <section className="download-static">
            <h2>Tải Ứng Dụng AKSH GPS</h2>
            <p>Quét mã QR hoặc nhấn vào nút bên dưới để cài đặt ứng dụng.</p>

            <div className="qr-grid">
                <div className="qr-item">
                    <h3>Android</h3>
                    <img src="/images/qr_android.png" alt="QR Android" />
                    <a
                        href="https://play.google.com/store/apps/details?id=com.fw.gps.aikashenghuogoogle&hl=vi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        Tải từ Google Play
                    </a>
                </div>

                <div className="qr-item">
                    <h3>iPhone</h3>
                    <img src="/images/qr_ios.png" alt="QR iOS" />
                    <a
                        href="https://apps.apple.com/us/app/aksh-gps/id1057139214"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        Tải từ App Store
                    </a>
                </div>
            </div>
        </section>
    );
}
