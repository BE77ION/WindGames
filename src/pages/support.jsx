import '../css/support.css';
function Support() {
  return (
    <>
      <div className="container">
        <section className="section1">
          <h2>Installation Help</h2>
          <p>Having trouble installing a game? Make sure to read the included README.txt and follow these steps:</p>
          <ul>
            <li>Disable antivirus temporarily before installation.</li>
            <li>Use WinRAR or 7-Zip to extract files.</li>
            <li>Run setup.exe as administrator.</li>
          </ul>
        </section>

        <section className="section2">
          <h2>Common Issues</h2>
          <p>Facing errors like missing DLLs, crashes, or launch problems?</p>
          <ul>
            <li>Install all redistributables: <a href="https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/" target="_blank">VC++ All-in-One</a></li>
            <li>Ensure DirectX is up to date.</li>
            <li>Update your GPU drivers.</li>
          </ul>
        </section>

        <section className="section3">
          <h2>FAQs</h2>
          <ul>
            <li><strong>Is this legal?</strong> – No. This is for educational/demo purposes only.</li>
            <li><strong>Can I request a game?</strong> – Yes, through the contact form below.</li>
          </ul>
        </section>

        <section className="section4">
          <h2>Contact Us</h2>
          <p>Email: support@WindGames.com</p>
          <p>Telegram: @WindGames</p>
        </section>
      </div>
    </>
  );
}

export default Support;
