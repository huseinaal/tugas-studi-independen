function App() {

  return (
    <>
    {/*Headers*/}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{color: "#74C0FC"}}></i>
              <span className="ms-2 fs-4">Bookstore</span> 
            </a> 
          </div> 
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2">Home</a></li> 
              <li><a href="#book" className="nav-link px-2">Book</a></li> 
              <li><a href="#team" className="nav-link px-2">Team</a></li> 
              <li><a href="#contact" className="nav-link px-2">Contact</a></li> 
            </ul> 
            <div className="col-md-3 text-end"> 
              <button type="button" className="btn btn-outline-primary me-2">Login</button> 
              <button type="button" className="btn btn-primary">Registrasi</button> 
            </div> 
        </header> 
      </div>

    {/* Heroes */}
      <div className="container my-5"> 
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa.</h1> 
            <p className="lead mt-5">Cara mudah dan terbukti untuk untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p> 
            <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-5"> 
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button> 
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button> 
            </div> 
          </div> 
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
              <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720"/> 
            </div> 
        </div> 
      </div>

    {/* List Produk */}
      <section id ="book" className="py-5 text-center container"> 
        <div className="row py-lg-5"> 
          <div className="col-lg-6 col-md-8 mx-auto"> 
            <h1 className="display-4 fw-bold">Best Seller</h1> 
            <p className="lead text-body-secondary">"Inilah buku yang sedang hangat dibicarakan! Dengan ribuan eksemplar terjual, temukan mengapa buku ini menjadi favorit para pembaca dan jangan sampai kehabisan."</p> 
            <p> 
              <a href="#" className="btn btn-primary my-2 m-2 mt-4">Views</a> 
              <a href="#" className="btn btn-secondary my-2 mt-4">Order Book</a> 
            </p> 
          </div> 
        </div> 
      </section> 
        <div className="album py-5 bg-body-tertiary"> 
          <div className="container"> 
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/UVan5tV.jpg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Buku karya James Clear ini adalah panduan praktis tentang bagaimana kebiasaan kecil dapat membawa perubahan besar. Buku ini mengajarkan cara-cara sederhana untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk dengan memanfaatkan ilmu psikologi dan neurologi.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div>
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/W2GSxY9.jpg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Ditulis oleh Pramoedya Ananta Toer, buku ini merupakan novel epik yang menceritakan kisah Minke, seorang pribumi cerdas di era kolonial Belanda. Novel ini menyoroti perjuangan identitas, ketidakadilan, dan cinta di tengah diskriminasi rasial yang kental pada masanya.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/u93M9eA.jpeg" className="card-img-top" />
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Karya Mark Manson ini menawarkan perspektif yang berbeda tentang kebahagiaan. Alih-alih mengejar hal-hal positif, buku ini mengajarkan pentingnya menerima batasan dan belajar untuk tidak peduli pada hal-hal yang tidak penting agar dapat fokus pada nilai-nilai yang benar-benar bermakna dalam hidup.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/gImW4eS.jpeg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Yuval Noah Harari membawa pembaca dalam perjalanan sejarah umat manusia, mulai dari zaman batu hingga era modern. Buku ini membahas bagaimana Homo Sapiens berhasil mendominasi planet ini, mengeksplorasi peran Revolusi Kognitif, Revolusi Pertanian, dan Revolusi Ilmiah dalam membentuk peradaban.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="col"> 
              <div className="card shadow-sm h-100"> 
                <img  src="https://i.imgur.com/RySxrhC.jpeg" className="card-img-top" />  
                <div className="card-body"> 
                  <p className="card-text line-clamp">Buku oleh Henry Manampiring ini mengadaptasi filsafat Stoik Yunani-Romawi kuno ke dalam konteks kehidupan modern. Tujuannya adalah untuk membantu pembaca mengatasi emosi negatif seperti kecemasan dan kemarahan, serta mencapai ketenangan batin.</p> 
                  <div className="d-flex justify-content-between align-items-center mt-4"> 
                    <div className="btn-group"> 
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                      <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                    </div> 
                    <small className="text-body-secondary">9 mins</small> 
                  </div> 
                </div> 
              </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/pJtyv7y.jpeg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Novel fantasi karya Dee Lestari ini berkisah tentang Jati Wesi, seorang pemuda dengan kemampuan unik untuk mencium dan mengenali aroma langka. Ia terlibat dalam pencarian Puspa Karsa, bunga mistis yang dapat membawa kekuatan besar, yang membawanya ke dalam petualangan seru dan penuh misteri.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/PsLUZWu.jpeg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Ditulis oleh Eka Kurniawan, novel ini adalah perpaduan antara realisme magis, sejarah, dan tragedi. Ceritanya berpusat pada Dewi Ayu, seorang pelacur yang bangkit dari kubur setelah 21 tahun mati, dan mengisahkan kembali kehidupan keluarganya yang penuh dengan kisah-kisah tragis selama masa penjajahan dan pascakemerdekaan Indonesia.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div>
                </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/BeSujL9.jpeg" className="card-img-top" /> 
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Novel inspiratif karya Andrea Hirata ini mengisahkan perjuangan sekelompok anak miskin di Belitong, Sumatera Selatan, yang bersekolah di sebuah SD Muhammadiyah yang nyaris roboh. Kisah ini menyoroti semangat juang, persahabatan, dan impian mereka di tengah keterbatasan.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="col"> 
                <div className="card shadow-sm h-100"> 
                  <img  src="https://i.imgur.com/xxz6Fyj.jpeg " className="card-img-top" />
                  <div className="card-body"> 
                    <p className="card-text line-clamp">Serial Netflix ini diadaptasi dari novel karya Ratih Kumala. Ceritanya berlatar belakang industri rokok kretek di tahun 1960-an dan mengikuti kisah Dasiyah, seorang perempuan visioner yang berjuang untuk memajukan pabrik kretek milik keluarganya. Serial ini menggabungkan drama, sejarah, dan romansa yang kompleks.</p> 
                    <div className="d-flex justify-content-between align-items-center mt-4"> 
                      <div className="btn-group"> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button> 
                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button> 
                      </div> 
                      <small className="text-body-secondary">9 mins</small> 
                    </div>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div>

    {/* Team */}  
      <section id="team" className="py-5">
      <div className="container">
        <div className="row text-center">
            <h1 className="fw-light">Tim Kami</h1>
            <p className="lead text-body-secondary mb-5">Orang-orang hebat di balik Bookstore.</p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://i.imgur.com/jL0FUQp.jpeg" className="card-img-top team-img team-img-jane" alt="Team Member"/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Husein Al</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://i.imgur.com/rFTCiKP.jpeg" className="card-img-top team-img" alt="Team Member"/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Jane Doe</h5>
                <div className="card-text text-black-50">Marketing</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://i.imgur.com/f2afeWf.jpeg" className="card-img-top team-img" alt="Team Member"/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">John Smith</h5>
                <div className="card-text text-black-50">UI/UX Designer</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://i.imgur.com/LBGO6C7.jpeg" className="card-img-top team-img team-img-jane" alt="Team Member"/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Budi Santoso</h5>
                <div className="card-text text-black-50">Content Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
            <h1 className="fw-light">Hubungi Kami</h1>
            <p className="lead text-body-secondary mb-5">Ada pertanyaan? Kirimkan pesan kepada kami!</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Nama Anda"/>
                <label htmlFor="name">Nama Anda</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                <label htmlFor="email">Alamat Email</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Tulis pesan Anda di sini" style={{height: "10rem"}}></textarea>
                <label htmlFor="message">Pesan</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" type="submit">Kirim Pesan</button>
              </div>
            </form>
            <div className="text-center mt-5">
              <p className="lead text-body-secondary">Atau temukan kami di:</p>
              <div className="social-icons">
                <a href="huseinaal03@gmail.com" className="social-icon" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com/husein_aal" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/cakecorrrrr" className="social-icon" aria-label="X">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-husein-al-jabbar-955380372" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section> 

    {/* Footer */}
      <div className="container"> 
        <footer className="py-3 my-4"> 
          <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li> 
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Features</a>
            </li> 
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
            </li> 
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">FAQs</a>
            </li> 
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">About</a>
            </li> 
          </ul> 
          <p className="text-center text-body-secondary">&copy; 2025 Huseinaal, Inc</p> 
        </footer> 
      </div>    
    </>
  ) 
}

export default App
