let data = [
    {
        foto: "img/nastar.jpeg",
        namaProduk: "Kueh Nastar",
        desc: "lezat dan bergizi",
        harga: "Rp. 50.000",

    },
    {
        foto: "img/putri-salju.jpg",
        namaProduk: "Putri Salju",
        desc: "Kueh Putri Salju enak",
        harga: "Rp. 56.000",

    },
    {
        foto: "img/biji-ketapang.jpeg",
        namaProduk: "Biji Ketapang",
        desc: "lezat",
        harga: "Rp. 10.000",

    },
    {
        foto: "img/jintan.jpg",
        namaProduk: "Kueh Jinten",
        desc: "enak",
        harga: "Rp. 21.000",

    },
    {
        foto: "img/kueh-cubit.jpeg",
        namaProduk: "Kue Cubit",
        desc: "Nikmat",
        harga: "Rp. 23.000",

    },
    {
        foto: "img/peuyeum.jpg",
        namaProduk: "Peuyeum",
        desc: "Peuyeum khas Kuningan, Jawa Barat",
        harga: "Rp. 63.000",

    },
    {
        foto: "img/rengginang.jpg",
        namaProduk: "rengginang",
        desc: "terbuat dari ketan",
        harga: "Rp. 24.000",

    },
    {
        foto: "img/kiripik-cau.jpg",
        namaProduk: "Keripik Pisang",
        desc: "terbuat dari pisang tanduk",
        harga: "Rp. 24.000",

    },

    // Tambahkan produk lain jika ada
];

let fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }
};

async function postData() {
    try {
        const userCard = document.getElementById('user-card');

        data.forEach(async (produk) => {
            const response = await fetch(`https://reqres.in/api/produkkueh/${produk.id}`, {
                ...fetchOptions,
                body: JSON.stringify(produk)
            });
            const responseData = await response.json();
            console.log(responseData);

            // Tampilkan respons di HTML
            // const productHTML = `
            //     <div class="product">
            //         <h2>PRODUK:</h2>
            //         <p>ID Produk: ${responseData.id}</p>
            //         <p>Nama Produk: ${responseData.nama_produk}</p>
            //         <p>Jumlah: ${responseData.jumlah}</p>
            //         <p>Deskripsi: ${responseData.deskripsi}</p>
            //         <img src="${responseData.foto}" alt="Produk ${responseData.id}" width="500" height="600">
            //     </div>
            // `;

            const productHTML = `
            <div class="card">
            <img src="${responseData.foto}" alt="Profile Picture">
            <div class="info">
                <div class="name">${responseData.namaProduk}</div>
                <div class="email">${responseData.desc}</div>
                <div class="id">${responseData.harga}</div>
            </div>
            </div>`
            userCard.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Gagal melakukan permintaan:', error);
    }
}

postData();
