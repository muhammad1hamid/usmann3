const ClientsSection = () => {
  const stats = [
    { number: '150+', label: 'Clients' },
    { number: '500+', label: 'Video Ads' },
    { number: '10+', label: 'Average ROAS' }
  ];

  const bullets = [
    'Increased conversion rates',
    'Reduced wasted ad spend',
    'Helped brands scale consistently',
  ];

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          Results Clients have seen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Bullet Points */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 px-4 lg:px-0">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4DC035]/15 border border-[#4DC035]/30 flex items-center justify-center group-hover:bg-[#4DC035]/25 transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#4DC035]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white group-hover:text-[#4DC035] transition-colors duration-300">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right Side - Stats */}
          <div className="flex items-center justify-center lg:pl-12 w-full">
            <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-col lg:space-y-12 w-full lg:w-auto px-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 ${
                    index === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="text-3xl lg:text-6xl font-bold text-white mb-2 group-hover:text-[#4DC035] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-xl text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;