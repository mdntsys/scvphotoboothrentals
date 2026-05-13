"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      email: String(form.get("email") ?? ""),
      eventDate: String(form.get("eventDate") ?? ""),
      eventType: String(form.get("eventType") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        return;
      }
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach our server. Check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
        <div className="text-xs uppercase tracking-[0.25em] text-accent-dark">
          Inquiry sent
        </div>
        <h3 className="mt-3 font-heading text-2xl md:text-3xl text-ink leading-tight -tracking-[0.01em]">
          Thanks &mdash; we&rsquo;re on it.
        </h3>
        <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
          Check your inbox for a confirmation. A member of our team will follow
          up within 24 hours to lock in the details.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage(null);
          }}
          className="mt-6 inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="First name"
          name="firstName"
          autoComplete="given-name"
          required
        />
        <Field
          label="Last name"
          name="lastName"
          autoComplete="family-name"
          required
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Event date" name="eventDate" type="date" />
        <SelectField
          label="Event type"
          name="eventType"
          options={[
            "Wedding",
            "Birthday",
            "Corporate",
            "Graduation",
            "Quinceañera",
            "Other",
          ]}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.2em] text-muted mb-2"
        >
          Tell us about your event
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Venue, guest count, vibe, anything else we should know."
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send inquiry"}
      </button>
      {status === "error" && errorMessage ? (
        <p role="alert" className="text-xs text-red-600">
          {errorMessage}
        </p>
      ) : null}
      <p className="text-xs text-muted">
        We&rsquo;ll get back to you within 24 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-muted mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-full border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-muted mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-full border border-border bg-surface px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink appearance-none"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
