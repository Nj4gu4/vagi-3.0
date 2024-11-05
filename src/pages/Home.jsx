import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-lg animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-right">
                Discover Your Unique Style
              </h1>
              <p className="text-xl mb-8 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                Elevate your wardrobe with our exclusive designs crafted for the modern individual.
              </p>
              <div className="space-x-4 animate-slide-right" style={{ animationDelay: '0.4s' }}>
                <Link
                  to="/shop"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition transform hover:scale-105"
                >
                  Shop Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-slide-down">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Men',
                image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22'
              },
              {
                name: 'Women',
                image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
              },
              {
                name: 'Unisex',
                image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b'
              },
              {
                name: 'Accessories',
                image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93'
              }
            ].map((category, index) => (
              <Link
                key={category.name}
                to="/shop"
                className="group relative h-96 overflow-hidden rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="text-white mt-2 group-hover:translate-x-2 transition-transform">Shop Now →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the sections with dark mode support */}
      <div className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                VAGI Fashion is more than just a clothing brand - it's a celebration of individuality and style.
              </p>
              <Link
                to="/about"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-left">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Design Studio"
                className="rounded-lg shadow-lg transform hover:scale-105 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
                alt="Fashion Design"
                className="rounded-lg shadow-lg mt-8 transform hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;