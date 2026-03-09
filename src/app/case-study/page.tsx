"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudies: React.FC = () => {
  return (
    <section className="case-study flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-950 py-16">
      <div className="container mx-auto px-6 pt-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            All Case Studies
          </h1>
          <div className="mt-3 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Squash Analytics */}
<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
  <Link href="/case-study/squash-analytics">
    <div className="overflow-hidden">
      <Image
        src="/images/case-study/squash-analytics-mockup.png"
        alt="Squash Analytics"
        width={400}
        height={200}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-6 text-center">
      <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Squash Analytics Platform
      </h5>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        A data-driven platform that analyzes squash performance metrics to help
        coaches and players improve training strategies and match outcomes.
      </p>
    </div>
  </Link>
</div>

          {/* Alsco */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/alsco">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/alsco-mockup.png"
                  alt="Alsco"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Alsco Uniforms Portal
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  A B2B platform for managing uniforms, supplies & payments.
                </p>
              </div>
            </Link>
          </div>

          {/* Moneyspot */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/moneyspot">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/moneyspot-mockup.png"
                  alt="Moneyspot"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Moneyspot Loan Platform
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Online loan experience with transparency & simplicity.
                </p>
              </div>
            </Link>
          </div>

          {/* ClassCade */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/classcade">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/classcade-mockup.png"
                  alt="ClassCade"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  ClassCade UX Case Study
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Gamifying classrooms with rewards for better motivation.
                </p>
              </div>
            </Link>
          </div>

          {/* Fintech Spectrum */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/fintech-spectrum">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/fintech-mockup.png"
                  alt="ClassCade"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Fintech Spectrum UX Case Study
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Empowering lenders with a faster, smarter, end-to-end digital lending ecosystem.
                </p>
              </div>
            </Link>
          </div>

          {/* Cloud Chillies */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/cloud-chillies">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/cloudchillies-mockup.png"
                  alt="ClassCade"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  CloudChillies Salesforce Case Study
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Delivering enterprise-grade Salesforce solutions with automation and seamless integrations.
                </p>

              </div>
            </Link>
          </div>

          {/* RMU Tracking */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link href="/case-study/rmu-tracking">
              <div className="overflow-hidden">
                <Image
                  src="/images/case-study/rmu-mockup.png"
                  alt="ClassCade"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  EFSP RMU Tracking - Case Study
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Modernizing United Way’s reporting platform with streamlined workflows, improved data accuracy, and a cleaner user experience.
                </p>
              </div>

            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
