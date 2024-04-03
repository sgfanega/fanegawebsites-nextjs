import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy container py-5">
      <h1 className="display-2 fw-bold">Privacy Policy for Fanega Web Development</h1>
      <h2 className="display-5 fw-medium">1. Introduction</h2>
      <p className="fs-5 fw-light">Fanega Web Development (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the www.fanegawebsites.com (the &quot;Service&quot;). This page 
        informs you of our policies regarding the collection, use, and disclosure of personal data when your use of our Service.
      </p>
      <p className="fs-5 fw-light">We only collect information through the Contact Form, and we use your data to provide and improve the Service. By using the Service, you agree to the collection
        and use of information in accordance with this policy.
      </p>
      <h2 className="display-5 fw-medium">2. Information Collection and Use</h2>
      <p className="fs-5 fw-light">We collect several different types of information for various purposes to provide and imrpove our Service to you.</p>
      <h3>2.1 Personal Data</h3>
      <p className="fs-5 fw-light">While using your Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal data&quot;).
        Personally identifiable information may include, but is not limited to:</p>
      <ul className="fs-5 fw-light">
        <li>Email Address</li>
        <li>First and Last Name</li>
      </ul>
      <h2 className="display-5 fw-medium">3. Use of Data</h2>
      <p className="fs-5 fw-light">Fanega Web Development uses the collected data for various purposes:</p>
      <ul className="fs-5 fw-light">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer care and support</li>
        </ul>
      <h2 className="display-5 fw-medium">4. Legal Requirements</h2>
      <p className="fs-5 fw-light">Fanega Web Development may disclosure your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul className="fs-5 fw-light">
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Fanega Web Development</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
      </ul>
      <h2 className="display-5 fw-medium">5. Changes To This Privacy Policy</h2>
      <p className="fs-5 fw-light">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <h2 className="display-5 fw-medium">6. Contact Us</h2>
      <p className="fs-5 fw-light">If you have any questions about this Privacy Policy, please contact us:</p>
      <ul className="fs-5 fw-light">
        <li>By Email: <a className="text-decoration-none text-accent-secondary" href="emailto:steve@fanegawebsites.com">steve@fanegawebsites.com</a></li>
      </ul>
    </main>
  )
}