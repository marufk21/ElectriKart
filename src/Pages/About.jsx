function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            alt="About ElectriKart"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Welcome to ElectriKart</h2>
          <p className="mt-4 text-slate-700">
            We curate the best electronics at honest prices. Our experts hand-pick products that offer
            outstanding value, design, and reliability.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-base font-semibold">Our Mission</h3>
              <p className="mt-1 text-sm text-slate-600">
                Make cutting-edge tech accessible to everyone with a seamless shopping experience.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-semibold">Our Promise</h3>
              <p className="mt-1 text-sm text-slate-600">
                We stand behind everything we sell. If you’re not happy, we’ll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
