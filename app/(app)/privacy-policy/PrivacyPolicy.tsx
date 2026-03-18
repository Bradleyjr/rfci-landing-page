'use client'

import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'

export function PrivacyPolicy() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        heading={<>Privacy <span className="font-semibold text-rfci-blue">Policy</span></>}
        subheading="How we collect, use, and protect your information."
        theme="light"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal direction="up">
            <div className="prose prose-lg max-w-none text-rfci-black/70 leading-relaxed space-y-10">

              <p className="text-sm text-rfci-black/40">Effective Date: November 10, 2020</p>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Introduction</h2>
                <p>
                  The Resilient Floor Covering Institute (&ldquo;RFCI,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides this Privacy Policy to describe how we collect, use, and share the information of individuals who visit our websites at rfci.com or beautifullyresponsible.com and/or any other affiliated websites that link to this Privacy Policy (collectively the &ldquo;Sites&rdquo;).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Information We Collect</h2>
                <p>
                  When using our Sites, you may voluntarily provide information about yourself, including your name, contact information, company, job title, and any other information you choose to provide. For example, we may collect this information when you submit an inquiry through our Sites, send us an email, or otherwise interact with us.
                </p>
                <p className="mt-4">
                  Our Sites also offer extra features for RFCI members, and we may collect additional information from RFCI members including username, password, and other information provided when logged into the Sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Automatic Data Collection</h2>
                <p>
                  We also automatically collect information relating to your interactions with the Sites, including browser type, IP address, pages visited and other activities on the Sites, device type, time and date of visit, and other information collected through the use of cookies and similar technology.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Use of Information</h2>
                <p>We may use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Send you information about RFCI, our member companies, and the resilient flooring industry</li>
                  <li>Operate, maintain, and improve the Sites and our services</li>
                  <li>Analyze usage patterns and trends to enhance user experience</li>
                  <li>Protect the security and integrity of our Sites</li>
                  <li>Comply with applicable legal requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Data Sharing</h2>
                <p>
                  We may share information pursuant to a subpoena, court order, governmental inquiry, or other legal process or as otherwise required by law, or to protect our rights or the rights of third parties. We may also share information that has been de-identified or aggregated without limitation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Analytics</h2>
                <p>
                  We may work with third parties that collect data about your use of the Sites and other sites or apps over time for non-advertising purposes. RFCI uses Google Analytics to help understand how visitors interact with our Sites. For more information about how Google Analytics collects and uses data, please visit Google&rsquo;s privacy partners page. You can opt out of Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-rfci-blue hover:underline">tools.google.com/dlpage/gaoptout</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Cookies</h2>
                <p>
                  Our website uses cookies to improve your experience. Cookies categorized as necessary are stored on your browser as they are essential for basic website functionalities. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Third-Party Links</h2>
                <p>
                  Our Sites may provide links to third-party websites or apps, including those of RFCI member companies. We do not control the privacy practices of such third-party websites or apps, and they are not covered by this Privacy Policy. You should review the privacy policies of other websites or apps that you use to learn about their data practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Social Media</h2>
                <p>
                  Our Sites include integrated social media tools or &ldquo;plug-ins&rdquo; offered by third parties. If you use these tools to share personal information or otherwise interact with these features, those companies may collect information about you and may use and share such information in accordance with your account settings. Your interactions with third-party companies and their features are governed by their own privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Updates to This Policy</h2>
                <p>
                  If our information practices change, we will post the changes on this page. We encourage you to check this page periodically for updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Contact Us</h2>
                <p>
                  If you have questions, comments, or concerns about this Privacy Policy, please <a href="/contact" className="text-rfci-blue hover:underline">contact us</a>.
                </p>
                <div className="mt-4 text-sm text-rfci-black/60">
                  <p>Resilient Floor Covering Institute</p>
                  <p>115 Greystone Power Blvd</p>
                  <p>LaGrange, GA 30240</p>
                  <p className="mt-2">
                    Phone: <a href="tel:+17068822710" className="text-rfci-blue hover:underline">(706) 882-2710</a>
                  </p>
                  <p>
                    Email: <a href="mailto:info@rfci.com" className="text-rfci-blue hover:underline">info@rfci.com</a>
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
