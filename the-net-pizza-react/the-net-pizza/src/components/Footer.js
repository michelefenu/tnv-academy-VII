import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid p-5">
      <div className="row">
        <section className="col-12 col-lg-4 p-2">
          <h2 className="footer-section-title">Orari di Apertura</h2>
          <table>
            <thead>
              <tr>
                <th>Giorno</th>
                <th>Orario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunedì</td>
                <td>Chiuso</td>
              </tr>
              <tr>
                <td>Martedì</td>
                <td>19:00 - 24:00</td>
              </tr>
              <tr>
                <td>Mercoledì</td>
                <td>19:00 - 24:00</td>
              </tr>
              <tr>
                <td>Giovedì</td>
                <td>19:00 - 24:00</td>
              </tr>
              <tr>
                <td>Venerdì</td>
                <td>19:00 - 24:00</td>
              </tr>
              <tr>
                <td>Sabato</td>
                <td>19:00 - 24:00</td>
              </tr>
              <tr>
                <td>Domenica</td>
                <td>19:00 - 24:00</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="col-12 col-lg-4  p-2">
          <h2 className="footer-section-title">Dove Siamo</h2>
          <iframe
            width="80%"
            frameBorder={0}
            scrolling="no"
            title="map"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=8.286395072937013%2C39.97725164260922%2C8.323259353637697%2C40.000563846393405&amp;layer=mapnik&amp;marker=39.988909359691846%2C8.304836049999949"
            style={{border: '1px solid black'}}
          ></iframe>
        </section>
        <section className="col-12 col-lg-4  p-2">
          <h2 className="footer-section-title">Credits</h2>
          Questo sito è realizzato dagli studenti della TNV Academy VII
        </section>
      </div>
    </footer>
  );
}
