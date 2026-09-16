"use client";

import { useMemo, useState } from "react";
import { models } from "@/data/models";

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

export default function EmiCalculator({ defaultPrice = 1170000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(9.2);
  const [years, setYears] = useState(5);

  const { emi, loan, totalInterest, totalPayable } = useMemo(() => {
    const down = Math.round((price * downPct) / 100);
    const principal = Math.max(price - down, 0);
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const factor = Math.pow(1 + monthlyRate, months);
    const monthly = monthlyRate === 0 ? principal / months : (principal * monthlyRate * factor) / (factor - 1);
    const payable = monthly * months;
    return {
      emi: Math.round(monthly),
      loan: principal,
      totalInterest: Math.round(payable - principal),
      totalPayable: Math.round(payable),
    };
  }, [price, downPct, rate, years]);

  const label = "mb-2 block text-sm font-semibold text-vw-blue";
  const range = "h-2 w-full cursor-pointer appearance-none rounded-full bg-vw-line accent-vw-cyan";

  return (
    <div className="grid gap-6 rounded-2xl border border-vw-line bg-white p-6 shadow-sm lg:grid-cols-5 lg:p-8">
      <div className="lg:col-span-3">
        <div className="mb-5 flex flex-wrap gap-2">
          {models.map((model) => (
            <button
              key={model.slug}
              type="button"
              onClick={() => setPrice(model.priceFromValue)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                price === model.priceFromValue
                  ? "border-vw-cyan bg-vw-cyan text-vw-blue"
                  : "border-vw-line text-slate-600 hover:border-vw-cyan"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        <div className="grid gap-5">
          <div>
            <label htmlFor="emi-price" className={label}>
              Car price: Rs {inr.format(price)}
            </label>
            <input
              id="emi-price"
              type="range"
              min={800000}
              max={6000000}
              step={10000}
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              className={range}
            />
          </div>

          <div>
            <label htmlFor="emi-down" className={label}>
              Down payment: {downPct} percent (Rs {inr.format(Math.round((price * downPct) / 100))})
            </label>
            <input
              id="emi-down"
              type="range"
              min={5}
              max={60}
              step={1}
              value={downPct}
              onChange={(event) => setDownPct(Number(event.target.value))}
              className={range}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="emi-rate" className={label}>
                Interest rate: {rate.toFixed(1)} percent
              </label>
              <input
                id="emi-rate"
                type="range"
                min={7}
                max={15}
                step={0.1}
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
                className={range}
              />
            </div>
            <div>
              <label htmlFor="emi-years" className={label}>
                Tenure: {years} years
              </label>
              <input
                id="emi-years"
                type="range"
                min={1}
                max={7}
                step={1}
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
                className={range}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-vw-blue p-6 text-white lg:col-span-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-vw-cyan">Your monthly EMI</p>
          <p className="mt-2 text-4xl font-extrabold">Rs {inr.format(emi)}</p>
          <dl className="mt-6 grid gap-3 text-sm">
            <div className="flex justify-between border-b border-white/15 pb-2">
              <dt className="text-slate-300">Loan amount</dt>
              <dd className="font-semibold">Rs {inr.format(loan)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/15 pb-2">
              <dt className="text-slate-300">Total interest</dt>
              <dd className="font-semibold">Rs {inr.format(totalInterest)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-300">Total payable</dt>
              <dd className="font-semibold">Rs {inr.format(totalPayable)}</dd>
            </div>
          </dl>
        </div>
        <p className="mt-6 text-[11px] leading-relaxed text-slate-400">
          Indicative figures on ex showroom price. Your final EMI depends on the on road price, the approved rate and
          the processing charges of your bank.
        </p>
      </div>
    </div>
  );
}
