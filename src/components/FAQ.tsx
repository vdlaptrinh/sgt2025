import './css/FAQ.css';
export default function FAQ() {
    return (
        <section id="faq" className="faq">
            <h2>FAQ – Câu hỏi thường gặp</h2>
            <details>
                <summary>App có tiếng Việt không?</summary>
                <p>Có, app hỗ trợ hoàn toàn tiếng Việt.</p>
            </details>
            <details>
                <summary>Bảo hành bao lâu?</summary>
                <p>12 tháng với lỗi nhà sản xuất</p>
            </details>
            <details>
                <summary>Phí gia hạn năm thứ 2?</summary>
                <p>Từ năm thứ 2 bạn chỉ cần mua sim 4G khoảng 200k 12 tháng</p>
            </details>
            <details>
                <summary>Lắp đặt</summary>
                <p>Thiết bị có 4 dây: đỏ, đen, cam, vàng. Nếu chỉ cần định vị chỉ cần dùng dây đỏ, đen theo hình trên. Nếu muốn tắt máy từ xa, vui lòng nối đủ 4 dây với ắc quy và relay.</p>
            </details>
            <details>
                <summary>Có bán online</summary>
                <p>Vui lòng đặt hàng và chuyển khoản</p>
            </details>
            <details>
                <summary>Phí ship, relay</summary>
                <p>Giá trên chưa bao gồm phí ship và relay</p>
            </details>
            <details>
                <summary>Hộp sản phẩm gồm gì?</summary>
                <p>Hộp sản phẩm gồm thiết bị, bộ dây, hướng dẫn sử dụng</p>
            </details>
            <details>
                <summary>Không mua sim?</summary>
                <p>Bạn không mua sim vui lòng trừ 150k vào giá bán</p>
            </details>
        </section>
    );
}
