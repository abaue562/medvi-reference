import LegalPage from "../components/LegalPage";

export default function CancellationAndRefundPolicy() {
  return (
    <LegalPage
      title="Cancellation and Refund Policy"
      sections={[
        {
          heading: "Subscription Services",
          level: 2,
          body: [
            "Your membership in the subscription program ("Subscription Service"), including your ability to access the services, begins when you have completed the intake form at which time you will be charged for the first month of the Subscription Services.",
            "The Subscription Services include access to providers, medications where appropriate, and online support.",
            "Please note if you are disqualified by our medical provider for any medical reason you will receive a full refund.",
            "There is no guarantee of results or effectiveness due to your participation in the Subscription Services.",
          ],
        },
        {
          heading: "Cancellation Policy",
          level: 2,
          body: [
            "You may cancel your Subscription Service at any time for any reason. To cancel your Subscription Services, please contact customer service (hello@medvi.org) and request a cancellation, or through the chat feature in your patient portal.",
            "To ensure a smooth process, we require your cancellation request to be received at least 72 hours prior to your billing date. If this notice date is not met, your subscription will be charged on the next billing date, and the cancellation will take effect on the subsequent billing date.",
            "After cancellation, you will continue to receive the Subscription Services through the end of your billing cycle.",
            "Please see our Refund Policy below to determine if you are eligible for a refund of your canceled Subscription Service.",
          ],
        },
        {
          heading: "Refund Policy",
          level: 3,
          body: [
            "If your Subscription Service is cancelled due to disqualification by our medical provider, you will be issued a refund for the remainder of your Subscription Service charges following the disqualification.",
            "Other than cancellation due to medical disqualification, IN NO EVENT SHALL YOU BE ISSUED A REFUND UPON CANCELLATION OF THE SUBSCRIPTION SERVICES.",
            "Federal law generally prohibits the return of prescription medications to pharmacies for refund or reuse once they have been ordered to a patient in order to protect public health and safety. This policy ensures that all medications provided are handled and dispensed with utmost care and compliance. If approved, refunds will only be issued for your most recent billing cycle and will not be issued for past billing cycles.\n\nDamaged or Incorrect items: Please inspect your medication immediately upon receipt. If the medication appears to be damaged or incorrect, please contact customer service immediately at hello@medvi.org.\n\nDamaged items: Damaged items may be replaced by the pharmacy upon receipt of evidence of damage.\n\nIncorrect items: Incorrect medications will be replaced by the pharmacy.",
          ],
        },
        {
          heading: "Subscription Services FAQs",
          level: 3,
          body: [],
        },
        {
          heading: "What is included in my Subscription Services price?",
          level: 3,
          body: [
            "Your Subscription Services represents a single price for the subscription purchased. This may include consultations both live and via electronic form submissions and reviews with a Provider for medications that are fulfilled through a pharmacy or other health care services on which we collect payments, lab services, care support, 24/7 patient support line and other services to support your medical weight loss journey. Services, labs and medications covered with the single Subscription Service price may vary.",
          ],
        },
        {
          heading: "What if my provider determines I am no longer eligible for the Subscription Services?",
          level: 3,
          body: [
            "If your Provider determines you are no longer eligible for the Subscription Services, your subscription will be canceled, and a refund may be issued. If you have questions or concerns about an eligibility-initiated cancellation, please contact our customer service at hello@medvi.org.",
            "Unless otherwise stated herein, Medvi's Terms and Conditions govern the Subscription Services Cancellation and Refund Policy. https://home.medvi.org/terms-and-conditions",
            "In all events you are responsible for all fees from services and healthcare Services rendered, this Subscription Services Cancellation and Refund Policy governs fees for Subscription Services only.",
          ],
        },
      ]}
    />
  );
}
