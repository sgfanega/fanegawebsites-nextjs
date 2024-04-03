import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing'
}

export default function Pricing() {
  return (
    <main className="pricing container" style={{minHeight: "70dvh"}}>
      <h1 className="display-1 fw-medium text-accent-secondary text-center py-5">Pricing</h1>
      <section className="pricing-cards d-flex flex-column flex-md-row
        justify-content-evenly flex-wrap pb-5">
        <div className="card mb-4 border-accent-secondary shadow-lg align-self-center align-self-md-stretch" style={{width: "18rem"}}> 
          <div className="card-header bg-accent-secondary py-3">
            <h4 className="my-0 fw-normal text-secondary text-center">Basic HTML, JS, and CSS</h4>
          </div>
          <div className="card-body text-center">
            <h3 className="card-title fw-bold text-primary pricing-card-title">$500</h3>
            <ul className="list-unstyled mt-3 mb-4 text-gray">
              <li>Single-Page Application</li>
              <li>Free Hosting</li>
              <li>Five Pages</li>
              <li>Design Mock-up</li>
              <li>SEO Implementation</li>
              <li>One Contact Form</li>
            </ul>
            <a href="/#contact" className="btn btn-accent-secondary">Let&apos;s Get Started</a>
          </div>
        </div>
        <div className="card mb-4 border-gray shadow-lg align-self-center align-self-md-stretch" style={{width: "18rem"}}> 
          <div className="card-header bg-gray py-3">
            <h4 className="my-0 fw-normal text-secondary text-center">Page Builder</h4>
          </div>
          <div className="card-body text-center d-flex flex-column justify-content-between align-items-center">
            <h3 className="card-title fw-bold text-primary pricing-card-title">$500</h3>
            <ul className="list-unstyled mt-3 mb-4 text-gray">
              <li>Five Pages</li>
              <li>SEO Implementation</li>
              <li>Editable by Clients</li>
              <li>Quickly Made</li>
            </ul>
            <a href="/#contact" className="btn btn-gray">Let&apos;s Get Started</a>
          </div>
        </div>
        <div className="card mb-4 border-gray shadow-lg align-self-center align-self-md-stretch" style={{width: "18rem"}}> 
          <div className="card-header bg-gray py-3">
            <h4 className="my-0 fw-normal text-secondary text-center">WordPress Theme</h4>
          </div>
          <div className="card-body text-center">
            <h3 className="card-title fw-bold text-primary pricing-card-title">$2,000</h3>
            <ul className="list-unstyled mt-3 mb-4 text-gray">
              <li>Custom Theme Development</li>
              <li>Five Pages</li>
              <li>Design Mock-up</li>
              <li>SEO Implementation</li>
              <li>CMS features</li>
              <li>One Contact Form</li>
            </ul>
            <a href="/#contact" className="btn btn-gray">Let&apos;s Get Started</a>
          </div>
        </div>
        <div className="card mb-4 border-accent-secondary shadow-lg align-self-center align-self-md-stretch" style={{width: "18rem"}}> 
          <div className="card-header bg-accent-secondary py-3">
            <h4 className="my-0 fw-normal text-secondary text-center">Headless CMS</h4>
          </div>
          <div className="card-body text-center">
            <h3 className="card-title fw-bold text-primary pricing-card-title">$3,000</h3>
            <ul className="list-unstyled mt-3 mb-4 text-gray">
              <li>Single-Page Application</li>
              <li>Five Pages</li>
              <li>Design Mock-up</li>
              <li>SEO Implementation</li>
              <li>CMS features</li>
              <li>One Contact Form</li>
            </ul>
            <a href="/#contact" className="btn btn-accent-secondary">Let&apos;s Get Started</a>
          </div>
        </div>
      </section>
      <section className="pricing-table table-responsive py-5">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th className="text-start" scope="col">Service</th>
              <th scope="col">Five Pages</th>
              <th scope="col">Design Mock-up</th>
              <th scope="col">SEO Implementation</th>
              <th scope="col">CMS Features</th>
              <th scope="col">Singe-Page Application</th>
              <th scope="col">One Contact Form</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th className="text-start" scope="row">HTML, JS, and CSS</th>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td></td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <th className="text-start" scope="row">Page Builder</th>
              <td>&#x2714;</td>
              <td></td>
              <td>&#x2714;</td>
              <td></td>
              <td></td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <th className="text-start" scope="row">WordPress</th>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td></td>
              <td>&#x2714;</td>
            </tr>
            <tr>
              <th className="text-start" scope="row">Headless CMS</th>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
              <td>&#x2714;</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )

}