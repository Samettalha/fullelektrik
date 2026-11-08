"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircleIcon, WhatsAppIcon } from "@/components/Icons";
import { serviceOptions } from "@/lib/services";
import { getWhatsAppUrl } from "@/lib/site";

const initialValues = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-500 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const successRef = useRef(null);

  useEffect(() => {
    if (status !== "success" || !successRef.current) {
      return;
    }

    successRef.current.focus({ preventScroll: true });
    successRef.current.scrollIntoView({
      block: "center",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [status]);

  const updateField = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === "success") {
      setStatus("idle");
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Lütfen adınızı ve soyadınızı yazın.";
    }

    const digitCount = values.phone.replace(/\D/g, "").length;
    if (digitCount < 10) {
      nextErrors.phone = "Geçerli bir telefon numarası yazın.";
    }

    if (!values.service) {
      nextErrors.service = "Lütfen bir hizmet seçin.";
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = "Lütfen ihtiyacınızı kısaca açıklayın.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const selectedService = serviceOptions.find(
      (option) => option.value === values.service,
    );

    const text = [
      "Merhaba, FullElektrik ile iletişime geçmek istiyorum.",
      "",
      `Ad Soyad: ${values.name.trim()}`,
      `Telefon: ${values.phone.trim()}`,
      `Hizmet: ${selectedService?.label || values.service}`,
      "",
      "Mesaj:",
      values.message.trim(),
    ].join("\n");

    const url = getWhatsAppUrl(text);
    setWhatsappUrl(url);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="flex h-full min-h-[28rem] flex-col items-start justify-center rounded-3xl border border-brand-green/30 bg-white p-8 shadow-soft outline-none"
      >
        <span className="grid size-14 place-items-center rounded-2xl bg-brand-green/10 text-brand-green-ink">
          <CheckCircleIcon className="size-8" />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-brand-navy">
          Mesajınız hazırlandı
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          WhatsApp penceresi yeni sekmede açıldı. Açılmadıysa aşağıdaki
          bağlantıyı kullanarak mesajınızı iletebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-brand-navy-dark transition hover:bg-brand-green-dark"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp&apos;ı aç
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-cream"
          >
            Bilgileri düzenle
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-extrabold text-brand-navy">
          İhtiyacınızı yazın
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Formu doldurun; bilgilerinizle hazırlanan mesajı WhatsApp üzerinden
          iletebilirsiniz.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-bold text-brand-navy"
          >
            Ad Soyad <span className="text-brand-green-ink">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${inputClasses} ${
              errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
            }`}
            placeholder="Adınız ve soyadınız"
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2 text-xs font-semibold text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-sm font-bold text-brand-navy"
          >
            Telefon <span className="text-brand-green-ink">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={`${inputClasses} ${
              errors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
            }`}
            placeholder="05XX XXX XX XX"
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="mt-2 text-xs font-semibold text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-service"
            className="mb-2 block text-sm font-bold text-brand-navy"
          >
            Hizmet Türü <span className="text-brand-green-ink">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
            className={`${inputClasses} ${
              errors.service ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
            }`}
          >
            <option value="">Hizmet seçin</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="contact-service-error" className="mt-2 text-xs font-semibold text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-bold text-brand-navy"
          >
            Mesajınız <span className="text-brand-green-ink">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${inputClasses} resize-y ${
              errors.message ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
            }`}
            placeholder="İhtiyacınızı, arızayı veya talebinizi kısaca anlatın."
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-2 text-xs font-semibold text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-extrabold text-brand-navy-dark shadow-sm transition hover:bg-brand-green-dark hover:shadow-md"
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp ile Gönder
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-muted">
        Form bilgileri, talebinizi WhatsApp mesajı olarak hazırlamak için
        kullanılır.
      </p>
    </form>
  );
}
