import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) {
      set({ currentUser: null, isLoading: false }); // 👈 reset khi đăng xuất
      return;
    }

    // fetch user info từ Firestore...
    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
      set({ currentUser: docSnap.data(), isLoading: false });
    } else {
      set({ currentUser: null, isLoading: false });
    }
  } 
}));
