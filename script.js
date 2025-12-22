function filter(kategori) {
    const buttons = document.querySelectorAll('.btn-group button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active'); 

    const items = document.querySelectorAll('.produk-item');
    items.forEach(item => {
        const itemKat = item.getAttribute('data-kat');
        if (kategori === 'all' || itemKat === kategori) {
            item.style.display = 'block'; 
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

function pesanWA(namaProduk) {
    const nomorHP = "+628999254059"; 
    const pesan = `Halo Admin Nexus Store, saya tertarik membeli *${namaProduk}*. Apakah stok masih tersedia dan bisa dikirim hari ini?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

const btnTop = document.getElementById("btn-top");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block"; 
    } else {
        btnTop.style.display = "none";  
    }
};
function keAtas() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDetail(nama, harga, img, desc) {
    document.getElementById('modal-title').innerText = nama;
    document.getElementById('modal-price').innerText = harga;
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-desc').innerText = desc;

    const btnWa = document.getElementById('modal-wa-btn');
    btnWa.setAttribute('onclick', `pesanWA('${nama}')`);

    const myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.5s ease-in-out; }
`;
document.head.appendChild(styleSheet);
