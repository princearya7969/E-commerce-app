import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Products = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];

  const products = [
    { id: 1, name: 'Wireless Headphones Pro', price: 299, originalPrice: 399, category: 'Electronics', rating: 4.8, reviews: 1247, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', badge: 'Best Seller' },
    { id: 2, name: 'Minimalist Watch', price: 189, originalPrice: 249, category: 'Fashion', rating: 4.9, reviews: 892, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', badge: 'New' },
    { id: 3, name: 'Premium Sneakers', price: 159, originalPrice: 199, category: 'Fashion', rating: 4.7, reviews: 2103, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge: null },
    { id: 4, name: 'Smart Speaker Mini', price: 79, originalPrice: 99, category: 'Electronics', rating: 4.6, reviews: 3421, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: 5, name: 'Ceramic Vase Set', price: 45, originalPrice: 65, category: 'Home', rating: 4.5, reviews: 567, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop', badge: null },
    { id: 6, name: 'Yoga Mat Premium', price: 68, originalPrice: 89, category: 'Sports', rating: 4.8, reviews: 1893, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', badge: 'Popular' },
    { id: 7, name: 'Mechanical Keyboard', price: 149, originalPrice: 179, category: 'Electronics', rating: 4.9, reviews: 4521, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop', badge: null },
    { id: 8, name: 'Designer Sunglasses', price: 125, originalPrice: 175, category: 'Fashion', rating: 4.7, reviews: 782, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', badge: 'Hot' },
    { id: 9, name: 'Portable Charger', price: 39, originalPrice: 59, category: 'Electronics', rating: 4.6, reviews: 6234, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop', badge: null },
    { id: 10, name: 'Running Shoes Elite', price: 189, originalPrice: 229, category: 'Sports', rating: 4.8, reviews: 3102, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop', badge: null },
    { id: 11, name: 'Scented Candle Set', price: 34, originalPrice: 48, category: 'Home', rating: 4.4, reviews: 1245, image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&h=400&fit=crop', badge: null },
    { id: 12, name: 'Wireless Earbuds', price: 129, originalPrice: 169, category: 'Electronics', rating: 4.7, reviews: 5678, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', badge: 'Trending' },
    { id: 12, name: 'Wireless Earbuds', price: 129, originalPrice: 169, category: 'Electronics', rating: 4.7, reviews: 5678, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', badge: 'Trending' },
    { id: 12, name: 'Wireless Earbuds', price: 129, originalPrice: 169, category: 'Electronics', rating: 4.7, reviews: 5678, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', badge: 'Trending' },
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const loadMore = () => setVisibleProducts(prev => prev + 4);

  const getBadgeColor = (badge) => {
    if (!badge) return '';
    const colors = {
      'Best Seller': isDark ? 'bg-amber-500/90' : 'bg-amber-500',
      'New': isDark ? 'bg-emerald-500/90' : 'bg-emerald-500',
      'Sale': isDark ? 'bg-rose-500/90' : 'bg-rose-500',
      'Popular': isDark ? 'bg-violet-500/90' : 'bg-violet-500',
      'Hot': isDark ? 'bg-orange-500/90' : 'bg-orange-500',
      'Trending': isDark ? 'bg-cyan-500/90' : 'bg-cyan-500',
    };
    return colors[badge] || (isDark ? 'bg-sky-500/90' : 'bg-sky-500');
  };

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-sky-100 text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-96 h-96 ${isDark ? 'bg-sky-500/10' : 'bg-sky-400/30'} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${isDark ? 'bg-cyan-500/10' : 'bg-sky-300/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${isDark ? 'bg-sky-500/20 text-sky-400' : 'bg-sky-200 text-sky-800'}`}>
              Discover Amazing Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              {isDark ? (
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Premium Collection
                </span>
              ) : (
                <span className="bg-gradient-to-r from-sky-900 via-sky-700 to-sky-500 bg-clip-text text-transparent">
                  Premium Collection
                </span>
              )}
            </h1>
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              Curated selection of trending products with unbeatable prices and fast delivery
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? isDark 
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30' 
                      : 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                    : isDark
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <article
              key={product.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-900/50 border border-gray-800 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10' 
                  : 'bg-white border border-sky-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20'
              }`}
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/60 via-transparent' : 'from-sky-900/20 via-transparent'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Quick Actions */}
                <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-sky-600 text-white hover:bg-sky-700'
                  }`}>
                    Add to Cart
                  </button>
                  <button className={`p-2.5 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800/80 text-white hover:bg-gray-700' : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <p className={`text-xs font-medium mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                  {product.category}
                </p>
                <h3 className={`font-bold text-lg mb-2 line-clamp-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : isDark ? 'text-gray-700' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${product.price}
                  </span>
                  <span className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    ${product.originalPrice}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className={`group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-sky-500/30' 
                  : 'bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:shadow-lg hover:shadow-sky-500/30'
              }`}
            >
              <span className="relative z-10">Load More Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Products;