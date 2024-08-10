export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-white">
        <h2 className="text-primary text-center">Hubungi Kami</h2>
        <div className="container contact">
          <form>
            <label htmlFor="nama">Nama</label>
            <br />
            <input
              type="text"
              id="nama"
              className="form-control"
              placeholder="Nama"
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
            <br />
            <br />
            <label htmlFor="pesan">Pesan</label>
            <br />
            <textarea
              id="pesan"
              className="form-control"
              placeholder="Pesan"
            ></textarea>
            <br />
            <button type="submit" className="btn-primary">
              Kirim
            </button>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
}
