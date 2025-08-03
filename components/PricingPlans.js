export default function PricingPlans({ plans }) {
  return (
    <section className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-lg shadow p-6 flex flex-col ${
            plan.featured ? 'border-4 border-[#FF7043]' : ''
          }`}
        >
          <h2 className="text-2xl font-semibold text-[#FF7043] mb-4">{plan.title}</h2>
          <p className="text-4xl font-bold mb-6">
            {plan.price} <span className="text-base font-normal">{plan.period}</span>
          </p>
          <ul className="flex-1 mb-6 space-y-3 text-gray-700 list-disc list-inside">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="mt-auto bg-[#FF7043] hover:bg-[#F4511E] text-white py-3 rounded-lg font-semibold transition-colors">
            {plan.featured ? 'Upgrade Now' : 'Get Started'}
          </button>
        </div>
      ))}
    </section>
  );
}
