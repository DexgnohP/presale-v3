export const dataReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_TEMP':
        const { updateStatus } = action.payload;
        return state.map(item =>
          item.table === updateStatus.table ? { ...item, status: updateStatus.status } : item
        );
  
      default:
        return state;
    }
  };