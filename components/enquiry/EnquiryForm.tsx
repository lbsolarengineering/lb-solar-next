'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Clock3,
  FileUp,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import {
  company,
  enquiryCustomerTypes,
  enquiryProjectStages,
  enquiryProjectTypes,
  enquiryServices,
} from '@/lib/data';

type FormState = {
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  cityState: string;
  customerType: string;
  serviceRequired: string;
  projectType: string;
  expectedCapacity: string;
  projectLocation: string;
  projectStage: string;
  message: string;
};

const initialState: FormState = {
  fullName: '',
  companyName: '',
  mobile: '',
  email: '',
  cityState: '',
  customerType: '',
  serviceRequired: '',
  projectType: '',
  expectedCapacity: '',
  projectLocation: '',
  projectStage: '',
  message: '',
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-text">
        {label}
        {required && <span className="text-emerald"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = useMemo(() => {
    const lines = [
      `Project Enquiry — ${company.short}`,
      `Name: ${form.fullName}`,
      `Company: ${form.companyName || '—'}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email}`,
      `City/State: ${form.cityState}`,
      `Customer Type: ${form.customerType}`,
      `Service: ${form.serviceRequired}`,
      `Project Type: ${form.projectType}`,
      `Capacity: ${form.expectedCapacity || '—'}`,
      `Location: ${form.projectLocation}`,
      `Stage: ${form.projectStage}`,
      `Message: ${form.message}`,
    ];
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [form]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.mobile.trim()) next.mobile = 'Please enter a mobile number.';
    else if (!/^[+\d][\d\s-]{7,15}$/.test(form.mobile.trim())) next.mobile = 'Enter a valid mobile number.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (!form.cityState.trim()) next.cityState = 'Please enter city / state.';
    if (!form.customerType) next.customerType = 'Select a customer type.';
    if (!form.serviceRequired) next.serviceRequired = 'Select a service.';
    if (!form.projectType) next.projectType = 'Select a project type.';
    if (!form.projectLocation.trim()) next.projectLocation = 'Please enter project location.';
    if (!form.projectStage) next.projectStage = 'Select the current project stage.';
    if (!form.message.trim()) next.message = 'Please describe your requirement.';
    return next;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[22px] border border-emerald/20 bg-bg-elevated p-6 shadow-[var(--theme-shadow)] md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
          <div>
            <h3 className="text-xl font-bold text-text">Enquiry details captured</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Thanks, {form.fullName.split(' ')[0]}. Your details have been validated on this page. There is no live
              email backend connected yet — continue on WhatsApp to send the enquiry to our team now.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="h-4 w-4" />
            Send via WhatsApp
          </a>
          <button type="button" className="btn-outline" onClick={() => setSubmitted(false)}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[22px] border border-border bg-bg-elevated p-6 shadow-[var(--theme-shadow)] md:p-8"
    >
      <div className="mb-7 border-b border-border pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">Step 1 of 2</p>
        <h2 className="mt-2 text-xl font-bold text-text">Contact details</h2>
        <p className="mt-1 text-sm text-muted">How should our engineering team reach you?</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.fullName}>
          <input
            className="form-field"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            autoComplete="name"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Company Name" error={errors.companyName}>
          <input
            className="form-field"
            value={form.companyName}
            onChange={(e) => update('companyName', e.target.value)}
            autoComplete="organization"
            placeholder="Company or organisation"
          />
        </Field>
        <Field label="Mobile Number" required error={errors.mobile}>
          <input
            className="form-field"
            value={form.mobile}
            onChange={(e) => update('mobile', e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 XXXXX XXXXX"
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            type="email"
            className="form-field"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            placeholder="name@company.com"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="City / State" required error={errors.cityState}>
            <input
              className="form-field"
              value={form.cityState}
              onChange={(e) => update('cityState', e.target.value)}
              placeholder="e.g. Jaipur, Rajasthan"
            />
          </Field>
        </div>
      </div>

      <div className="mb-7 mt-10 border-b border-border pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">Step 2 of 2</p>
        <h2 className="mt-2 text-xl font-bold text-text">Project details</h2>
        <p className="mt-1 text-sm text-muted">Share enough context for a useful technical review.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Customer Type" required error={errors.customerType}>
          <select
            className="form-field"
            value={form.customerType}
            onChange={(e) => update('customerType', e.target.value)}
          >
            <option value="">Select customer type</option>
            {enquiryCustomerTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service Required" required error={errors.serviceRequired}>
          <select
            className="form-field"
            value={form.serviceRequired}
            onChange={(e) => update('serviceRequired', e.target.value)}
          >
            <option value="">Select service</option>
            {enquiryServices.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Type" required error={errors.projectType}>
          <select
            className="form-field"
            value={form.projectType}
            onChange={(e) => update('projectType', e.target.value)}
          >
            <option value="">Select project type</option>
            {enquiryProjectTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Expected Capacity" error={errors.expectedCapacity}>
          <input
            className="form-field"
            value={form.expectedCapacity}
            onChange={(e) => update('expectedCapacity', e.target.value)}
            placeholder="e.g. 500 kWp / 2 MWp"
          />
        </Field>
        <Field label="Project Location" required error={errors.projectLocation}>
          <input
            className="form-field"
            value={form.projectLocation}
            onChange={(e) => update('projectLocation', e.target.value)}
            placeholder="Site city, district or region"
          />
        </Field>
        <Field label="Current Project Stage" required error={errors.projectStage}>
          <select
            className="form-field"
            value={form.projectStage}
            onChange={(e) => update('projectStage', e.target.value)}
          >
            <option value="">Select stage</option>
            {enquiryProjectStages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Requirement / Message" required error={errors.message}>
          <textarea
            rows={5}
            className="form-field"
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Describe scope, constraints, timelines or documents you already have."
          />
        </Field>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-emerald/30 bg-bg-soft/80 px-4 py-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-elevated text-emerald shadow-sm">
            <FileUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Attach project files (coming soon)</p>
            <p className="mt-1 text-sm text-muted">
              Drawings, electricity bill, site photos, RFQ or project documents
            </p>
            <p className="mt-2 text-xs text-muted/80">
              File upload is a visual placeholder for now — please share documents over WhatsApp after submitting.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald" />
        Your project information will be treated as confidential and used only to evaluate your requirement.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Submit Project Enquiry
        </button>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto">
          <MessageCircle className="h-4 w-4" />
          WhatsApp Us
        </a>
      </div>

      <div className="mt-5 hidden items-center gap-4 text-xs text-muted sm:flex">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald" /> Technical review
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5 text-emerald" /> Practical guidance
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5 text-emerald" /> {company.email}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-emerald" /> {company.phone}
        </span>
      </div>
    </form>
  );
}
