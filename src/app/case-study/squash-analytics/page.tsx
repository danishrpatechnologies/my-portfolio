'use client';

import { motion } from 'framer-motion';
import React from 'react';

const SquashAnalytics: React.FC = () => {
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
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-green-700 text-sm font-semibold uppercase tracking-wide">
            Squash Analytics – Performance Data Platform
          </h1>

          <motion.h2 className="text-4xl md:text-5xl font-bold mt-2">
            {/* Designing a Data-Driven Performance Analytics Platform for Squash */}
            Data-Driven Performance Analytics Platform
          </motion.h2>

          <motion.p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Squash Analytics is a platform that collects and analyzes player performance data to provide insights into training patterns, match strategies, and performance gaps, enabling data-driven decisions for improved player development and match outcomes.
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
              <strong>UI/UX Designer & Data Analytics Specialist</strong>
              <br />
              Responsible for dashboard UX design, data visualization,
              analytics workflow planning, and designing user-friendly
              performance insights for coaches and players.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>January – March 2026</p>
          </div>
        </div>

        {/* Problem + Principles */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="contnt-study">

            {/* Problem Space */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
              <p className="text-gray-600">
                Coaches and players often rely on manual observation and
                scattered performance data to evaluate match outcomes and
                training effectiveness. This approach makes it difficult to
                track player progress, identify performance gaps, and develop
                data-driven training strategies.

                The challenge was to build a centralized analytics platform
                capable of collecting, processing, and visualizing performance
                data in a clear and actionable format.
              </p>
            </div>

            {/* Design Principles */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Clarity:</strong> Present complex analytics data
                  through intuitive and easy-to-read dashboards.
                </li>

                <li>
                  <strong>Scalability:</strong> Support increasing player and
                  match data over time.
                </li>

                <li>
                  <strong>User-Centric:</strong> Provide insights tailored for
                  coaches, players, and analysts.
                </li>

                <li>
                  <strong>Data-Driven:</strong> Enable evidence-based training
                  and match strategy decisions.
                </li>
              </ul>
            </div>
          </div>

          {/* Figma Links + Image */}
          <div className="links-study">

            {/* <a
              target="_blank"
              className="mobile-btn"
              href="https://www.figma.com/design/mMPmxlRJ6pBFB47ddHeNMV/DESIGN-LIGHT-PREMIUM-PARA-DASHBOARD-NO-POWER-BI---by-Say.Valente--Community-?node-id=0-1"
            >
              Checkout Mobile Figma
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a> */}

            <a
              target="_blank"
              href="https://www.figma.com/design/mMPmxlRJ6pBFB47ddHeNMV/DESIGN-LIGHT-PREMIUM-PARA-DASHBOARD-NO-POWER-BI---by-Say.Valente--Community-?node-id=0-1"
            >
              Checkout Desktop Figma
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <img src="/images/squash-analytics-dashboard.png" alt="Squash Analytics Dashboard" />
            {/* <img src="/images/alsco-product-img.png" alt="" /> */}
          </div>
        </div>
      </section>

      {/* Features + Testing + Outcome */}
      <section className="max-w-5xl mx-auto px-6 space-y-12 pb-16">

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Features & Flow</h3>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Performance Analytics Dashboard:</strong> Real-time
              visualization of player statistics and match metrics.
            </li>

            <li>
              <strong>Automated Data Processing:</strong> ETL workflows built
              using Alteryx for efficient data preparation.
            </li>

            <li>
              <strong>Predictive Insights:</strong> Identify performance gaps
              and training opportunities using analytics models.
            </li>

            <li>
              <strong>Match Strategy Analysis:</strong> Data-driven insights to
              support better match preparation.
            </li>
          </ul>
        </div>

        {/* User Testing */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">User Testing Insights</h3>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Users appreciated the <b>clear categorization</b> of analytics
              data and the ability to navigate dashboards quickly.
            </li>

            <li>
              Highlighting <b>key performance metrics</b> helped coaches and
              players understand insights at a glance.
            </li>

            <li>
              Automated analytics workflows simplified
              <b> match preparation and performance analysis</b>.
            </li>

            <li>
              Interactive dashboards enabled coaches to
              <b> track player performance trends in real-time</b>.
            </li>

            <li>
              Predictive insights helped identify
              <b> training gaps and improvement opportunities</b>.
            </li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>

          <p className="text-gray-600">
            The Squash Analytics platform delivered a scalable and efficient
            analytics solution for tracking and improving player performance.

            Automated data workflows streamlined match preparation and reduced
            manual analysis. Real-time dashboards enabled coaches to make
            informed decisions while predictive insights supported
            data-driven training strategies and long-term performance
            improvement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SquashAnalytics;