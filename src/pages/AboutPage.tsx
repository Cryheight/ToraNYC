import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';

export function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Page entrance animation
    gsap.fromTo(
      '.about-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C0E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#F4F6FA]/5">
        <div className="flex items-center justify-between px-6 lg:px-10 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#A9B0BC] hover:text-[#F4F6FA] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <span className="text-[#F4F6FA] font-bold text-xl">TORA</span>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="about-content pt-24 pb-20 px-6 lg:px-[7vw]">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative h-[40vh] lg:h-[50vh] rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
              alt="Tora NYC interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-xs tracking-[0.12em] text-[#E1062C] mb-2">
                OUR STORY
              </p>
              <h1 className="text-[#F4F6FA] text-4xl lg:text-5xl font-black uppercase tracking-tight">
                About Us
              </h1>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-[#F4F6FA] text-2xl font-bold mb-4">
                Our Philosophy
              </h2>
              <p className="text-[#A9B0BC] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <p className="text-[#A9B0BC] leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam.
              </p>
            </section>

            <section>
              <h2 className="text-[#F4F6FA] text-2xl font-bold mb-4">
                The Tora Experience
              </h2>
              <p className="text-[#A9B0BC] leading-relaxed mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
              <p className="text-[#A9B0BC] leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                nihil molestiae consequatur.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#14171B] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#E1062C]/20 flex items-center justify-center mb-4">
                  <span className="text-[#E1062C] font-bold text-xl">01</span>
                </div>
                <h3 className="text-[#F4F6FA] font-bold mb-2">Fresh Ingredients</h3>
                <p className="text-[#A9B0BC] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt.
                </p>
              </div>

              <div className="bg-[#14171B] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#E1062C]/20 flex items-center justify-center mb-4">
                  <span className="text-[#E1062C] font-bold text-xl">02</span>
                </div>
                <h3 className="text-[#F4F6FA] font-bold mb-2">Expert Craft</h3>
                <p className="text-[#A9B0BC] text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip.
                </p>
              </div>

              <div className="bg-[#14171B] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#E1062C]/20 flex items-center justify-center mb-4">
                  <span className="text-[#E1062C] font-bold text-xl">03</span>
                </div>
                <h3 className="text-[#F4F6FA] font-bold mb-2">Warm Atmosphere</h3>
                <p className="text-[#A9B0BC] text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[#F4F6FA] text-2xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-[#A9B0BC] leading-relaxed mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
              <p className="text-[#A9B0BC] leading-relaxed">
                Similique sunt in culpa qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio.
              </p>
            </section>

            <section className="bg-[#14171B] rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-[#F4F6FA] text-3xl font-bold mb-4">
                  Visit Us Tonight
                </h2>
                <p className="text-[#A9B0BC] max-w-lg mx-auto mb-8">
                  Experience the best of Japanese cuisine in the heart of Brooklyn.
                  We look forward to serving you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="tora-btn-primary"
                  >
                    View Menu
                  </button>
                  <a href="tel:+19295544996" className="tora-btn-secondary">
                    Call to Reserve
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
