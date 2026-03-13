'use client'

import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'

export function TermsConditions() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        heading={<>Terms &amp; <span className="font-semibold">Conditions</span></>}
        subheading="Please read these terms carefully before using our website."
        theme="light"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal direction="up">
            <div className="prose prose-lg max-w-none text-rfci-black/70 leading-relaxed space-y-10">

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using the website operated by the Resilient Floor Covering Institute (&ldquo;RFCI,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) at rfci.com, beautifullyresponsible.com, or any affiliated websites (collectively, the &ldquo;Sites&rdquo;), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use the Sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Use of the Sites</h2>
                <p>
                  You may use our Sites for lawful purposes only. You agree not to use the Sites in any way that violates any applicable federal, state, local, or international law or regulation. You are responsible for ensuring that your use of the Sites complies with all applicable laws.
                </p>
                <p className="mt-4">
                  You agree not to attempt to gain unauthorized access to any portion of the Sites, any systems or networks connected to the Sites, or any RFCI server, through hacking, password mining, or any other means.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Intellectual Property</h2>
                <p>
                  The Sites and their entire contents, features, and functionality — including but not limited to all information, text, images, graphics, logos, trademarks, and software — are owned by RFCI, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  RFCI&rsquo;s names, logos, and all related names, logos, product and service names, designs, and slogans — including FloorScore®, ASSURE®, AFFIRM™, and Beautifully Responsible® — are trademarks of RFCI or its affiliates. You may not use such marks without the prior written permission of RFCI.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Disclaimer of Warranties</h2>
                <p>
                  The Sites and all information, content, materials, and services included on or otherwise made available to you through the Sites are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. RFCI disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className="mt-4">
                  RFCI does not warrant that the Sites, their content, or any services or items obtained through the Sites will be accurate, reliable, error-free, or uninterrupted, or that defects will be corrected.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Limitation of Liability</h2>
                <p>
                  In no event shall RFCI, its directors, officers, employees, agents, or member companies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of or inability to use the Sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Third-Party Links and Services</h2>
                <p>
                  The Sites may contain links to third-party websites or services, including those of RFCI member companies, that are not owned or controlled by RFCI. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. RFCI does not warrant or guarantee any services provided by third parties referenced on our Sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">User Submissions</h2>
                <p>
                  Any information or material you submit through the Sites, including inquiries, feedback, or other communications, will be treated as non-confidential and non-proprietary. By submitting any such information, you grant RFCI a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, and distribute that content for any purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless RFCI, its officers, directors, employees, agents, and member companies from any claims, liabilities, damages, losses, or expenses arising from your use of the Sites or your violation of these Terms &amp; Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Governing Law</h2>
                <p>
                  These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to these Terms &amp; Conditions shall be brought exclusively in the courts located in Troup County, Georgia.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Changes to These Terms</h2>
                <p>
                  RFCI reserves the right to revise and update these Terms &amp; Conditions at any time. Your continued use of the Sites following the posting of revised terms means that you accept and agree to the changes. You are expected to check this page periodically so you are aware of any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-rfci-black mb-4">Contact Us</h2>
                <p>
                  If you have questions about these Terms &amp; Conditions, please <a href="/contact" className="text-rfci-blue hover:underline">contact us</a>.
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
