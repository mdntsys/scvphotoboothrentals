"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First name" name="firstName" autoComplete="given-name" />
        <Field label="Last name" name="lastName" autoComplete="family-name" />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" />
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
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
      >
        Send inquiry
      </button>
      <p className="text-xs text-muted">
        We&rsquo;ll get back to you within 24 hours. Lorem ipsum.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
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
