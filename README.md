### How To Run
- clone this repo
- `npm install`
- `npm run dev`

Penjelasan:

Semua yang ada disini adalah based on next js. Oleh karena next js berjalan di server (server rendering) maka perlu ada beberapa penyesuaian cara render.

Script intinya adalah:
- `app/components/Maps.js`
- `app/pages/home.js`

Script di `MapsCaller.js` hanyalah helper untuk mengecek apakah variable global `google` sudah dapat di akses.

Masalah yang dihadapi adalah, kita merender `<Maps>` dari server, sementara component tersebut membutuhkan variable global `google` yang didapat dari pemanggilan script google maps (attach langsung ke head) yang mana berarti hanya berjalan di client side.

Oleh karena itu, untuk mengatasi masalah tsb yg saya lakukan adalah:
- Attach script google maps ketika sudah di client
- Cek apakah script google maps sudah ada, jika sudah maka jangan di attach. (home.js:11 - 18)
- Ketika script sudah di attach, butuh waktu beberapa detik (tergantung kecepatan internet) untuk meload variable global `google`. Makanya perlu dicek secara berkala di `MapsCaller.js` (disini saya beri jeda 100ms) sampai akhirnya bisa terpanggil, barulah di render component `Maps` tadi. Sembari menunggu, bisa dikasih loading text.

NB: Jika tidak menggunakan Server rendering dari Next.js (menggunakan rendering dari client) langkah yang dibutuhkan adalah:
1. Attach script google ke Head
2. Lalu langsung saja panggil `<Maps>` ke halaman (tidak perlu `MapsCaller`)
