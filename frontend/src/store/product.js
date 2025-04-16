/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProduct: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.imagelink) {
      return { success: false, message: "Please fill all the fields" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorText = await res.text(); // try to read error if any
        return {
          success: false,
          message: `Server error: ${errorText || res.statusText}`,
        };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (err) {
      return {
        success: false,
        message: "Failed to connect to server or invalid response",
      };
    }
  },

  fetchProducts: async () => {
    
    try {
      const res = await fetch("/api/products");
           
      if (!res.ok) {
        const errorText = await res.text(); // try to read error if any
        return {
          success: false,
          message: `Server error: ${errorText || res.statusText}`,
        };
      }
      const data = await res.json();
      set({ products: data.data });
      return { success: true, message: "Products fetched successfully" };
    } catch (err) {
      return {
        success: false,
        message: "Failed to connect to server or invalid response",
      };
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorText = await res.text(); // try to read error if any
        return {
          success: false,
          message: `Server error: ${errorText || res.statusText}`,
        };
      }

      const data = await res.json();
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return { success: true, message: "Product deleted successfully" };
    } catch (err) {
      return {
        success: false,
        message: "Failed to connect to server or invalid response",
      };
    }


},  updateProduct: async (id, updatedProduct) => {    
    try {                    
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!res.ok) {
        const errorText = await res.text(); // try to read error if any
        return {
          success: false,
          message: `Server error: ${errorText || res.statusText}`,
        };
      }
      const data = await res.json();        
      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? { ...product, ...data.data } : product
        ),
      }));
      return { success: true, message: "Product updated successfully" };
    } catch (err) {
      return {
        success: false,
        message: "Failed to connect to server or invalid response",
      };
    }
  },
}));
