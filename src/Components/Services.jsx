import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiRefresh } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";

const items = [
  {
    title: "Free Shipping",
    icon: TbTruckDelivery,
    desc: "Orders over ₹500 ship free anywhere in India.",
  },
  {
    title: "Easy Returns",
    icon: BiRefresh,
    desc: "Not happy with your purchase? Hassle-free returns.",
  },
  {
    title: "24/7 Support",
    icon: HiOutlineSupport,
    desc: "We’re here to help, any time of the day.",
  },
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Our Services</h2>
        <p className="mt-2 text-slate-600">
          We make your shopping simple, fast, and delightful.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="card p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon size={20} />
            </div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
