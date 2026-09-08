import { Check } from "lucide-react";

export default function BookingSuccess() {
  return (
    <section className="mx-auto w-full max-w-xl rounded-2xl border border-[#b7e4c7] bg-[#f0fff4] p-4 text-center shadow-[0_12px_32px_rgba(42,105,63,0.08)] sm:p-6">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#e8672e]/30 bg-[#e8672e]/10 text-[#e8672e] sm:h-16 sm:w-16">
        <Check className="h-7 w-7 stroke-3 sm:h-8 sm:w-8" />
      </div>

      <h2 className="mt-4 text-xl font-bold leading-tight text-[#1b1812] sm:mt-5 sm:text-2xl">
        Thanks for booking your seat!
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6e6252] sm:text-base">
        Your application has been received. Our team will call you shortly to
        explain the next steps and confirm your batch.
      </p>

      <div className="mt-5 rounded-xl border border-[#e4d6bb] bg-white p-4 text-left sm:mt-6 sm:p-5">
        <p className="text-sm font-semibold text-[#1b1812] sm:text-base">
          Before you join, here&apos;s what to know:
        </p>

        <ul className="mt-3 grid gap-3 text-sm leading-5 text-[#6e6252] sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
          <li className="flex gap-2">
            <span aria-hidden="true">📚</span>
            <span>This is a paid AI training program.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true">💰</span>
            <span>Program fee: ₹4,999</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true">📅</span>
            <span>Batch details will be shared on the call.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true">📞</span>
            <span>Our team will guide you through the next steps.</span>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-xs leading-5 text-[#8a7d70] sm:text-sm">
        Please keep your phone available for our follow-up call.
      </p>
    </section>
  );
}
