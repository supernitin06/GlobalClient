import React from "react";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pg-whatsapp-float fixed bottom-6 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_30px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <span className="pg-whatsapp-pulse absolute inset-0 rounded-full" aria-hidden="true" />
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.03 0C5.4 0 .02 5.37.02 11.98c0 2.1.55 4.14 1.58 5.94L0 24l6.25-1.64a11.99 11.99 0 0 0 5.78 1.47h.01c6.62 0 11.99-5.38 12-12 0-3.2-1.24-6.2-3.52-8.35Zm-8.49 18.3h-.01a9.98 9.98 0 0 1-5.08-1.39l-.36-.21-3.71.97.99-3.62-.23-.37a9.95 9.95 0 0 1-1.54-5.3c0-5.5 4.48-9.98 9.99-9.98 2.66 0 5.16 1.03 7.05 2.91a9.9 9.9 0 0 1 2.93 7.06c0 5.51-4.48 9.98-9.99 9.98Zm5.47-7.49c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.14-.18.19-.3.29-.5.1-.2.05-.37-.02-.52-.08-.15-.69-1.67-.95-2.3-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.81 1.19 3 .15.2 2.04 3.11 4.94 4.36.69.3 1.24.47 1.66.6.7.22 1.34.19 1.84.12.56-.08 1.78-.73 2.03-1.43.25-.71.25-1.32.18-1.44-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
