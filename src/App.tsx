import React, { useState, useEffect } from 'react';
import { Sun, Moon, Youtube, Mail, Instagram, Menu, X } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const portfolioItems = [
    {
      id: 1,
      title: "Gaming Channel Thumbnail",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60",
      views: "1.2M views"
    },
    {
      id: 2,
      title: "Tech Review Thumbnail",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
      views: "850K views"
    },
    {
      id: 3,
      title: "Food Vlog Thumbnail",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60",
      views: "2M views"
    },
    {
      id: 4,
      title: "Travel Vlog Thumbnail",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60",
      views: "1.5M views"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      channel: "TechReviews",
      text: "Rachit's thumbnails increased my CTR by 40%! Absolutely amazing work!"
    },
    {
      name: "Sarah Williams",
      channel: "CookingWithSarah",
      text: "Professional, creative, and always delivers on time. Best thumbnail designer I've worked with!"
    }
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 py-4 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" className="text-xl font-bold">
              RKK
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Rachit Kumar Kushwaha
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Crafting Click-Worthy Thumbnails that Drive Views!
            </p>
            <div className="flex justify-center gap-4">
              <a href="#portfolio" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                View Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              With over 5 years of experience in YouTube thumbnail design, I've helped countless content creators boost their click-through rates and grow their channels. My design philosophy combines eye-catching visuals with strategic placement of elements to create thumbnails that stand out in the crowded YouTube landscape.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I specialize in creating thumbnails that not only look professional but also drive real results. My work has contributed to videos accumulating over 100 million views across various niches including gaming, tech reviews, lifestyle, and educational content.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800" id="portfolio">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-200">{item.views}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4" id="testimonials">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  <p className="text-lg mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4" id="contact">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@rachitkushwaha.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    contact@rachitkushwaha.com
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                    YouTube Channel
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                    @rachitkushwaha
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;