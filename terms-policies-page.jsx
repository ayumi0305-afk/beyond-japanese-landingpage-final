/* Terms & Policies — combined Terms of Service, Privacy Policy, Cancellation Policy */

function PolicyBlock({ b }) {
  return (
    <div className="terms-block">
      <h2>{b.h}</h2>
      <div>
        {b.p.map((para, i) => <p key={i}>{para}</p>)}
        {b.list &&
        <ul className="terms-list">
            {b.list.map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        }
        {b.after && b.after.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>);

}

const termsBlocks = [
{ h: "1. Acceptance of Terms", p: ["By booking or participating in lessons provided by Beyond Japanese (\u201Cthe Service\u201D), you agree to these Terms of Service."] },
{ h: "2. Services", p: ["The Service provides online Japanese language lessons, trial lessons, learning support, educational materials, and related services."] },
{ h: "3. Booking and Payment", p: ["All lessons must be booked through the designated booking system.", "Payment must be completed before the lesson takes place.", "Lesson prices are listed on the website and may be updated from time to time."] },
{ h: "4. Trial Lesson", p: ["A trial lesson is available for first-time students at a rate of USD 15 for a 30-minute session.", "The trial lesson fee is non-refundable except where required by law or otherwise stated in the Cancellation Policy."] },
{ h: "5. Student Responsibilities", p: ["Students are responsible for:"], list: ["Arriving on time for scheduled lessons", "Maintaining a stable internet connection", "Preparing any necessary equipment for online lessons", "Participating respectfully during lessons"] },
{ h: "6. Intellectual Property", p: ["All lesson materials, worksheets, documents, recordings, and other content provided by the Service remain the intellectual property of Beyond Japanese unless otherwise stated.", "Materials may not be reproduced, distributed, sold, or shared without prior written permission."] },
{ h: "7. Prohibited Conduct", p: ["Students may not:"], list: ["Engage in abusive, harassing, or inappropriate behavior", "Disrupt lessons or interfere with the learning experience", "Share lesson materials without permission", "Use the Service for unlawful purposes"], after: ["The Service reserves the right to refuse or terminate service in cases of inappropriate conduct."] },
{ h: "8. Limitation of Liability", p: ["The Service is not responsible for interruptions caused by internet outages, technical failures, or circumstances beyond reasonable control.", "To the maximum extent permitted by law, liability shall be limited to the amount paid for the affected lesson."] },
{ h: "9. Changes to the Service", p: ["The Service reserves the right to modify, suspend, or discontinue any part of the Service at any time."] },
{ h: "10. Changes to These Terms", p: ["These Terms may be updated from time to time. Continued use of the Service after updates constitutes acceptance of the revised Terms."] }];


const privacyBlocks = [
{ h: "1. Information We Collect", p: ["We may collect the following information:"], list: ["Name or preferred name", "Email address", "Lesson booking information", "Learning progress and lesson history", "Messages and inquiries", "Payment-related information"], after: ["Please note that credit card information is processed and stored by third-party payment providers and is not stored by Beyond Japanese."] },
{ h: "2. How We Use Your Information", p: ["We use collected information to:"], list: ["Provide and manage lessons", "Process bookings and payments", "Communicate with students", "Improve our services", "Respond to inquiries and support requests", "Prevent fraud and misuse"] },
{ h: "3. Sharing of Information", p: ["We do not sell, rent, or share personal information with third parties except:"], list: ["When required by law", "When necessary to provide the Service", "With trusted service providers that assist in operating the Service"] },
{ h: "4. Third-Party Services", p: ["We may use third-party services, including:"], list: ["Stripe (payment processing)", "Google Meet (online lessons)", "Google Workspace", "Scheduling and booking platforms"], after: ["These providers may process information according to their own privacy policies."] },
{ h: "5. Data Security", p: ["Reasonable measures are taken to protect personal information from unauthorized access, disclosure, alteration, or destruction.", "However, no online transmission or storage system can be guaranteed to be completely secure."] },
{ h: "6. Your Rights", p: ["You may request access to, correction of, or deletion of your personal information by contacting us."] },
{ h: "7. Contact", p: ["If you have any questions regarding this Privacy Policy, please contact us through the contact information provided on the website."] }];


const cancellationBlocks = [
{ h: "Rescheduling Lessons", p: ["You may reschedule your lesson free of charge by contacting us at least 6 hours before the scheduled lesson time."] },
{ h: "Late Cancellations", p: ["Changes or cancellations made less than 6 hours before the lesson will generally be treated as a completed lesson and are not eligible for a refund or rescheduling."] },
{ h: "Emergencies and Unavoidable Circumstances", p: ["If you are unable to attend due to illness, an emergency, or other unavoidable circumstances, please contact us as soon as possible.", "Requests will be considered on a case-by-case basis."] },
{ h: "No-Shows", p: ["If you fail to attend a lesson without prior notice, the lesson will be treated as completed and will not be eligible for a refund or rescheduling."] },
{ h: "Instructor Cancellations", p: ["If a lesson must be cancelled by the instructor, students will be offered either:"], list: ["A rescheduled lesson, or", "A refund for the affected lesson"] },
{ h: "Technical Issues", p: ["If significant technical problems prevent the lesson from being completed, an alternative arrangement, including rescheduling, may be offered at the instructor's discretion."] },
{ h: "Refunds", p: ["Except as stated above, lesson fees are generally non-refundable."] }];


function TermsPoliciesPage() {
  const sections = [
  { id: "terms", label: "Terms of Service", blocks: termsBlocks },
  { id: "privacy", label: "Privacy Policy", blocks: privacyBlocks },
  { id: "cancellation", label: "Cancellation Policy", blocks: cancellationBlocks }];


  return (
    <div className="terms-page">
      <Header />
      <main>
        <section className="terms-hero" data-screen-label="01 Terms & Policies Hero">
          <div className="container">
            <span className="eyebrow">Terms &amp; Policies</span>
            <h1>Terms &amp; Policies</h1>
            <p className="terms-lead">
              Everything in one place — the terms, privacy practices, and cancellation guidelines
              for learning with Beyond Japanese. Written to keep expectations clear while keeping
              the experience human and respectful.
            </p>
            <p className="terms-updated">Last updated: June 1, 2026</p>
            <nav className="terms-jump" aria-label="Jump to section">
              {sections.map((s) =>
              <a key={s.id} href={"#" + s.id}>{s.label}</a>
              )}
            </nav>
          </div>
        </section>

        <section className="terms-body" data-screen-label="02 Terms & Policies Body">
          <div className="container">
            <div className="terms-wrap">
              {sections.map((s) =>
              <div className="terms-group" id={s.id} key={s.id}>
                  <h2 className="terms-group-title">{s.label}</h2>
                  {s.blocks.map((b) => <PolicyBlock b={b} key={b.h} />)}
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
root.render(<TermsPoliciesPage />);
