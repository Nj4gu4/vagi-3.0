import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const products = {
  Men: [
    {
      id: 1,
      name: 'Classic Business Suit',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      description: 'Elegant business suit perfect for formal occasions'
    },
    {
      id: 2,
      name: 'Casual Blazer',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      description: 'Versatile blazer for both casual and semi-formal wear'
    },
    {
      id: 3,
      name: 'Urban Streetwear Set',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
      description: 'Modern streetwear collection for the urban gentleman'
    }
  ],
  Women: [
    {
      id: 4,
      name: 'Floral Summer Dress',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
      description: 'Light and breezy summer dress with floral patterns'
    },
    {
      id: 5,
      name: 'Evening Gown',
      price: 259.99,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
      description: 'Elegant evening gown for special occasions'
    },
    {
      id: 6,
      name: 'Bohemian Maxi Dress',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
      description: 'Flowing maxi dress with bohemian patterns'
    }
  ],
  Unisex: [
    {
      id: 7,
      name: 'Designer Denim Collection',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09',
      description: 'Premium denim wear for all genders'
    },
    {
      id: 8,
      name: 'Summer Collection Set',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
      description: 'Versatile summer collection suitable for everyone'
    }
  ]
};

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <div className="relative h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transform transition hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ title, products, onAddToCart }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <div className="flex gap-4">
          {['All', 'Men', 'Women', 'Unisex'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {activeCategory === 'All' ? (
          <>
            <CategorySection
              title="Men's Collection"
              products={products.Men}
              onAddToCart={handleAddToCart}
            />
            <CategorySection
              title="Women's Collection"
              products={products.Women}
              onAddToCart={handleAddToCart}
            />
            <CategorySection
              title="Unisex Collection"
              products={products.Unisex}
              onAddToCart={handleAddToCart}
            />
          </>
        ) : (
          <CategorySection
            title={`${activeCategory}'s Collection`}
            products={products[activeCategory]}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
}

export default Shop;