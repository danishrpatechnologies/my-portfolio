'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Moneyspot: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="case-study-banner">
        <motion.div
          initial="hidden"
          animate="visible"
        //   variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
            Moneyspot Loan Platform
          </h1>
          <motion.h2
            // variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Designing a Trusted Online Loan Experience
          </motion.h2>
          <motion.p
            // variants={fadeUp}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            MoneyPot is a fast, fully online loan provider that offers users
            quick access to cash while ensuring responsible lending.
            Applications take less than five minutes, and approved loans are
            usually deposited within an hour.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Case Study Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Role & Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Role</h3>
            <p>
              Product Designer – Interaction Design, Visual Design, User Flows, Prototyping, Usability Testing.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>March to May 2025</p>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          <div className="contnt-study">
             {/* Problem Space */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Users needed a <b>fast, reliable, and fully online loan experience</b>. The challenge was to simplify the application process, communicate eligibility criteria clearly, ensure secure data handling, and provide transparency in repayment obligations. Additionally, the platform had to accommodate users with imperfect credit histories while maintaining trust and responsible lending practices.
          </p>
        </div>

        {/* Design Principles */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Speed:</strong> Enable users to complete the application in under 5 minutes.
            </li>
            <li>
              <strong>Clarity:</strong> Clearly communicate eligibility, repayment, and loan terms.
            </li>
            <li>
              <strong>Trust:</strong> Highlight value and benefits.
            </li>
            <li>
              <strong>Accessibility:</strong> Fully online and easy to use for all eligible users.
            </li>
          </ul>
        </div>

          </div>
          <div className="links-study">
            <a target='blank' href="https://www.figma.com/proto/QXHCQ0Tn8LKB4xLtGxFgBI/MoneySpot-App-Design--2-?node-id=770-6076&p=f&t=mHATMbPvZSZyDlrc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=770%3A6076">Checkout Mobile figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <img src="/images/moneyspot-product-img.png" alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Features & Flow</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Fast Loan Application:</strong> Complete in under 5 minutes with automated approval.
            </li>
            <li>
              <strong>Eligibility Guidance:</strong> Clear criteria for age, residency, employment, and income.
            </li>
            <li>
              <strong>Secure Client Area:</strong> Access loan status, balances, repayment dates, and apply for new loans.

            </li>
            <li>
              <strong>Responsible Lending:</strong> Ensures affordability checks and fair evaluation for users with imperfect credit histories.
            </li>
            <li>
              <strong>Customer Support:</strong> Assistance via chat, phone, or online client area.
            </li>
          </ul>
        </div>

        {/* User Testing Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">User Testing Insights</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Users appreciated the <b>speed and simplicity</b> of the application process.</li>
            <li>Clear eligibility criteria reduced confusion and improved trust.</li>
            <li>Secure client area and transparent repayment info enhanced confidence and usability.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-600 dark:text-gray-400">
            The MoneyPot platform delivers a <b>fast, trustworthy, and fully online loan experience</b> Users can quickly access loans, monitor repayments, and manage their finances responsibly. The design is scalable for future product features while maintaining clarity, trust, and ease of use.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Moneyspot;
