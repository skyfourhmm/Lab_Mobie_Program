// src/features/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],  // Danh sách các thẻ
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // Thêm một thẻ mới vào danh sách
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    // Xóa một thẻ khỏi danh sách
    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => card.id !== action.payload.id);
    },
    // Cập nhật thông tin của một thẻ
    updateCard: (state, action) => {
      const index = state.cards.findIndex(card => card.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    // Đặt lại danh sách các thẻ
    setCards: (state, action) => {
      state.cards = action.payload;
    }
  },
});

// Xuất các action và reducer của cardSlice
export const { addCard, removeCard, updateCard, setCards } = cardSlice.actions;
export default cardSlice.reducer;
