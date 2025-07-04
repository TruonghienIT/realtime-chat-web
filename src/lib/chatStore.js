import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser

    //Check if current user is blocked

    if(user.blocked.includes(currentUser.id)){
      return set ({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    //Check if receiver is blocked

    if(currentUser.blocked.includes(user.id)){
      return set ({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    }
  },

    changeBlock: () => {
      set((state) =>({...state, isReceiverBlocked: !state.isReceiverBlocked}));
    },
}));
