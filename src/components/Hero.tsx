import './css/Hero.css';
export default function Hero() {
    return (
        <section id="hero" className="hero">
            <h1>Smart GPS Tracker - SGT Pro</h1>
            <p>Thiết bị định vị thông minh, nhỏ gọn – bảo vệ tài sản của bạn.</p>
            <img src="/images/gps5.png" alt="Smart GPS Tracker" />
            <a href="#pricing" className="cta-btn">Mua Ngay</a>
        </section>
    );
}
