/* Legal Notice (Act on Specified Commercial Transactions) Page */

function LegalPage() {
  const blocks = [
  { h: "Business Name", p: ["Beyond Japanese"] },
  { h: "Service Provider", p: ["Ayumi Iwamoto"] },
  { h: "Representative", p: ["Ayumi Iwamoto"] },
  {
    h: "Business Address",
    p: [
    "Available upon request.",
    "In accordance with the Act on Specified Commercial Transactions of Japan, the business address will be provided without delay upon request."]

  },
  { h: "Contact Email", p: ["beyondjp.lesson@gmail.com"] },
  {
    h: "Contact Phone Number",
    p: [
    "Available upon request.",
    "In accordance with the Act on Specified Commercial Transactions of Japan, the phone number will be provided without delay upon request."]

  },
  { h: "Website", p: ["[Your Website URL]"] },
  {
    h: "Service Description",
    p: ["Online Japanese language lessons, trial lessons, educational materials, and related learning support services."]
  },
  {
    h: "Pricing",
    p: ["Prices are displayed on the website and booking pages in U.S. Dollars (USD)."]
  },
  {
    h: "Additional Fees",
    p: ["Students are responsible for any internet connection fees, communication charges, or other costs required to access online lessons."]
  },
  {
    h: "Payment Methods",
    p: [
    "Payments are processed through secure third-party payment providers, including Stripe.",
    "Accepted payment methods are displayed during checkout."]

  },
  {
    h: "Payment Timing",
    p: ["Payment is required at the time of booking unless otherwise specified."]
  },
  {
    h: "Service Delivery",
    p: ["Lessons are provided online at the scheduled date and time agreed upon during booking."]
  },
  {
    h: "Cancellation and Rescheduling",
    p: ["Please refer to the Cancellation Policy for details regarding lesson cancellations, rescheduling, refunds, and no-show policies."]
  },
  {
    h: "Refund Policy",
    p: ["Except where otherwise stated in the Cancellation Policy, payments are generally non-refundable."]
  },
  {
    h: "System Requirements",
    p: ["Students are responsible for preparing a suitable device, internet connection, microphone, camera, and any necessary software required to participate in online lessons."]
  },
  {
    h: "Governing Law",
    p: ["These services shall be governed by and interpreted in accordance with the laws of Japan."]
  }];


  return (
    <div className="terms-page">
      <Header />
      <main>
        <section className="terms-hero" data-screen-label="01 Legal Hero">
          <div className="container">
            <span className="eyebrow">Legal Notice</span>
            <h1 className="terms-h1-long">Legal Notice Based on the Act on Specified Commercial Transactions</h1>
            <p className="terms-lead terms-subtitle-jp">特定商取引法に基づく表記</p>
            <p className="terms-updated">Last updated: June 1, 2026</p>
          </div>
        </section>

        <section className="terms-body" data-screen-label="02 Legal Body">
          <div className="container">
            <div className="terms-wrap">
              {blocks.map((b) =>
              <div className="terms-block" key={b.h}>
                  <h2>{b.h}</h2>
                  <div>
                    {b.p.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              )}
              <p className="terms-note">Questions? Reach out any time via the contact page.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LegalPage />);
