"use client";

import { FormEvent, useState } from "react";
import { enquiryServices } from "@/lib/data";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="enquiryForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          Full Name
          <input required name="name" />
        </label>
        <label>
          Company Name
          <input name="company" />
        </label>
        <label>
          Mobile Number
          <input required name="mobile" type="tel" />
        </label>
        <label>
          Email
          <input required name="email" type="email" />
        </label>
        <label>
          City / State
          <input name="city" />
        </label>
        <label>
          Customer Type
          <select name="customer">
            <option>EPC Company</option>
            <option>Developer</option>
            <option>Industry / Business</option>
            <option>Project Owner</option>
            <option>Homeowner</option>
            <option>Vendor / Manufacturer</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Service Required
          <select name="service">
            {enquiryServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Project Type
          <select name="type">
            <option>Ground Mount</option>
            <option>Industrial Rooftop</option>
            <option>Commercial Rooftop</option>
            <option>Residential Rooftop</option>
            <option>PM-KUSUM</option>
            <option>Carport</option>
            <option>Floating Solar</option>
            <option>BESS / Hybrid</option>
          </select>
        </label>
        <label>
          Expected Capacity
          <input name="capacity" placeholder="e.g. 500 kWp / 2 MW" />
        </label>
        <label>
          Project Location
          <input name="location" />
        </label>
        <label className="full">
          Requirement / Message
          <textarea required name="message" rows={6} />
        </label>
      </div>
      <button className="button buttonPrimary" type="submit">
        Submit Project Enquiry
      </button>
      <p className="formNote">
        Your project information will be treated as confidential and used only to evaluate your
        requirement.
      </p>
      {sent && (
        <div className="success">
          Thank you. This demo form is validated locally; connect Web3Forms or your CRM before
          production email delivery.
        </div>
      )}
    </form>
  );
}
