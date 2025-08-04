"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/contexts/ProductContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
  const { toast } = useToast()
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const handleFavoriteToggle = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
      toast({
        title: "Removed from favorites",
        description: `${product.title} has been removed from your favorites.`,
      })
    } else {
      addToFavorites(product.id)
      toast({
        title: "Added to favorites",
        description: `${product.title} has been added to your favorites.`,
      })
    }
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  return (
    <>
      {/* Theme 1: Minimalist Card */}
      <div className="theme1:block theme2:hidden theme3:hidden bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
        <div className="relative overflow-hidden rounded-t-lg">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          )}
          {!imageError ? (
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className={`w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{product.rating.rate}</span>
            </div>
          </div>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>

      {/* Theme 2: Professional Dark Card */}
      <div className="theme1:hidden theme2:block theme3:hidden bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group">
        <div className="relative overflow-hidden rounded-t-lg">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-600 border-t-amber-400 rounded-full animate-spin"></div>
            </div>
          )}
          {!imageError ? (
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className={`w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-2 right-2 p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-900 transition-colors"
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-300"}`} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-amber-400 bg-amber-400/20 px-2 py-1 rounded">
              {product.category.toUpperCase()}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-300">{product.rating.rate}</span>
            </div>
          </div>
          <h3 className="font-bold text-white mb-2 line-clamp-2 serif">{product.title}</h3>
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-amber-400">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 px-4 py-2 bg-amber-500 text-gray-900 rounded-lg hover:bg-amber-400 transition-colors font-semibold"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>ADD</span>
            </button>
          </div>
        </div>
      </div>

      {/* Theme 3: Playful Card */}
      <div className="theme1:hidden theme2:hidden theme3:block bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden">
        <div className="relative overflow-hidden rounded-t-2xl">
          {imageLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-pink-300 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
          )}
          {!imageError ? (
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className={`w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <span className="text-gray-500" style={{ fontFamily: "Pacifico, cursive" }}>
                Oops! No image
              </span>
            </div>
          )}
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-lg"
          >
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full shadow-sm"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              {product.category}
            </span>
            <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-gray-700">{product.rating.rate}</span>
            </div>
          </div>
          <h3 className="font-bold text-gray-800 mb-2 line-clamp-2" style={{ fontFamily: "Pacifico, cursive" }}>
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg font-bold"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add!</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
