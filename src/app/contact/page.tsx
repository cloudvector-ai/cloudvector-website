"use client";

import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
            Contact CloudVector AI
          </h1>
          <p className="text-xl text-gray-600">
            Let’s discuss your Oracle modernization goals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* General Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">General Inquiry</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <input type="text" placeholder="Job Title" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Database Platform</option>
                <option>Oracle</option>
                <option>SQL Server</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Assessment Form */}
          <div id="assessment">
            <h2 className="text-2xl font-bold text-dark mb-6">Book an Assessment</h2>
            <form className="space-y-5 bg-light p-8 rounded-2xl">
              <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
              <input type="text" placeholder="Approximate Database Size (GB/TB)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Oracle Version" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
              
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" /> RAC Enabled
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" /> Data Guard Enabled
                </label>
              </div>

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Desired Migration Timeline</option>
                <option>0-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>12+ months</option>
              </select>

              <textarea rows={3} placeholder="Key business requirements or goals" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>

              <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition">
                Request Assessment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
