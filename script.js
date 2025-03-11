const links = [
        "https://www.nhathuocankhang.com/ban-tin-suc-khoe/15-thoi-quen-tot-cho-suc-khoe-moi-ngay-khong-the-bo-qua-1469128",
        "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm",
        "https://thegioilamvuon.com/chau-nhua-trong-cay/?srsltid=AfmBOopeDxgKPe1sqAvpPcJPGXg8hMlL_g9H8rOcFFul_AMRDFX7ykW9",
        "https://tinder.com/",
        "https://bet888vn.net/vn?utm_source=seo&utm_medium=auto&utm_campaign=giz-ads-1",
        "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
        "https://www.penguin.co.uk/series/EVLC/everymans-library-classics",
        "https://genius.com/Lola-young-messy-lyrics",
        "https://www.crescentmall.com.vn/tenants/ovs",
        "https://archive.org/details/the-pillow-book/page/n4/mode/1up",
];
function createFallingX() {
  const xElement = document.createElement("div");
  xElement.textContent = "❌";
  xElement.classList.add("x-symbol");

  // Khởi tạo vị trí ngang ngẫu nhiên, bắt đầu từ trên cùng (ẩn bên ngoài khung nhìn)
  let xPos = Math.random() * window.innerWidth;
  let yPos = -50; 
  // Tốc độ rơi và di chuyển ngang ngẫu nhiên
  let fallSpeed = 2 + Math.random() * 3; // từ 2 đến 5 pixel mỗi frame
  let horizontalSpeed = (Math.random() - 0.5) * 2; // từ -1 đến 1 pixel mỗi frame

  xElement.style.left = `${xPos}px`;
  xElement.style.top = `${yPos}px`;

  document.body.appendChild(xElement);

  function fall() {
    yPos += fallSpeed;
    xPos += horizontalSpeed;
    
    // Nếu chạm mép, đổi hướng ngang
    if (xPos < 0 || xPos > window.innerWidth - 40) {
      horizontalSpeed *= -1;
    }
    
    xElement.style.left = `${xPos}px`;
    xElement.style.top = `${yPos}px`;
    
    // Khi vượt khỏi khung nhìn, loại bỏ phần tử
    if (yPos > window.innerHeight) {
      xElement.remove();
      return;
    }
    
    requestAnimationFrame(fall);
  }
  fall();

  // Khi click vào dấu ❌, mở 3 link đồng thời và xóa nó khỏi trang
  xElement.addEventListener("click", () => {
    openRandomLinks(3);
    xElement.remove();
  });
}

function openRandomLinks(count) {
  // Xáo trộn danh sách link và mở count link đầu tiên
  const shuffledLinks = [...links].sort(() => Math.random() - 0.5);
  for (let i = 0; i < count; i++) {
    window.open(shuffledLinks[i], "_blank");
  }
}

// Tạo một số dấu ❌ ban đầu (ví dụ 10)
for (let i = 0; i < 10; i++) {
  createFallingX();
}

// Tạo dấu ❌ mới liên tục mỗi 1 giây
setInterval(() => {
  createFallingX();
}, 1000);
