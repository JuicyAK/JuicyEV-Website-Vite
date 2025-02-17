import { useEffect, useRef } from 'react';
import { testimonials } from './data/testimonials';
import './index.css';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.step-animation').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="snap-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Future of <span className="gradient-text">EV Charging</span> is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Charge your EV wherever you are, whenever you need it. No stations, no waiting.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
          >
            Join the Revolution
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="snap-section h-screen bg-gradient-to-b from-blue-50 to-white relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-center mb-16">
            Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="step-animation backdrop-blur-lg bg-white/70 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{testimonial.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;