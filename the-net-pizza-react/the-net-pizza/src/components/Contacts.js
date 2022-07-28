import React from "react";

export default function Contacts() {
  return (
    <section id="#contacts" className="contacts">
      <div className="row">
        <div className="col-12">
          <h2 className="section-title">Contatti</h2>
          <div className="separator"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="my-4">
            Per ordinare le pizze chiama il 333 123456789 o compila il modulo
            qui sotto:
          </p>
        </div>
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Cognome
          </label>
          <input type="text" className="form-control" id="surname" />
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Inserisci qui il tuo ordine..."
            id="order"
            style={{height: '100px'}}
          ></textarea>
          <label htmlFor="order">Inserisci qui il tuo ordine...</label>
        </div>

        <fieldset className="mb-3">
          <legend>Servizi aggiuntivi</legend>
          <input type="checkbox" name="services" /> Posate
          <br />
          <input type="checkbox" name="services" /> Pizza tagliata
          <br />
          <input type="checkbox" name="services" /> Consegna premium
        </fieldset>

        <fieldset className="mb-3">
          <legend>Servizi di pagamento</legend>
          <input type="radio" name="payment" /> Contanti
          <br />
          <input type="radio" name="payment" /> Satispay
          <br />
          <input type="radio" name="payment" /> Carta di Credito
        </fieldset>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
