"use client"

import { useProducts } from "@/contexts/ProductContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { useTheme } from "@/contexts/ThemeContext"
import ProductCard from "@/components/ProductCard"
import { RefreshCw, Heart, Filter } from "lucide-react"
import { useState } from "react"

const Home = () => {
  const { currentTheme } = useTheme()
  const { filteredProducts, loading, error, refetchProducts, searchTerm } = useProducts()
  const { favorites } = useFavorites()
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high" | "rating">("default")

  const displayProducts = showFavoritesOnly
    ? filteredProducts.filter((product) => favorites.includes(product.id))
    : filteredProducts

  const sortedProducts = [...displayProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating.rate - a.rating.rate
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 theme2:border-amber-400 theme3:border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 theme2:text-gray-300 theme3:text-gray-700">Loading amazing products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 theme2:text-white theme3:text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 theme2:text-gray-300 theme3:text-gray-600 mb-4">{error}</p>
          <button
            onClick={refetchProducts}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 theme2:bg-amber-500 theme3:bg-gradient-to-r theme3:from-pink-500 theme3:to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity mx-auto"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {currentTheme === "theme1" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of high-quality products from various categories.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                showFavoritesOnly
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Heart className={`h-4 w-4 ${showFavoritesOnly ? "fill-red-500 text-red-500" : ""}`} />
              <span>Favorites Only ({favorites.length})</span>
            </button>

            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="default">Sort by Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}

      {currentTheme === "theme2" && (
        <div className="bg-gray-900 min-h-screen flex">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 bg-gray-800 p-6 border-r border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6">Filters & Options</h2>
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`w-full px-4 py-2 rounded-lg ${
                showFavoritesOnly
                  ? "bg-red-900 text-red-300"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <Heart className={`h-4 w-4 inline ${showFavoritesOnly ? "fill-red-500 text-red-500" : ""}`} /> Show
              Favorites ({favorites.length})
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full mt-4 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Premium Product Collection</h1>
            {sortedProducts.length === 0 ? (
              <p>No products available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {currentTheme === "theme3" && (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen py-8 px-4">
          <div className="text-center mb-8">
            <h1
              className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Fun Shopping Experience!
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover, explore, and fall in love with our fantastic collection! ✨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg ${
                showFavoritesOnly
                  ? "bg-gradient-to-r from-red-400 to-pink-500 text-white"
                  : "bg-white/80 border-2 border-pink-200 text-gray-700 hover:bg-white"
              }`}
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              <Heart className={`h-5 w-5 inline ${showFavoritesOnly ? "fill-white text-white" : ""}`} /> My Favorites (
              {favorites.length})
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/80 border-2 border-purple-200 rounded-full px-4 py-3 text-gray-700"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              <option value="default">Sort by Magic ✨</option>
              <option value="price-low">Cheapest First 💰</option>
              <option value="price-high">Most Expensive 💎</option>
              <option value="rating">Best Rated ⭐</option>
            </select>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-8xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Pacifico, cursive" }}>
                Oops! Nothing here!
              </h3>
              <p className="text-gray-600">No products available right now. Check back soon! 🌟</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Home
