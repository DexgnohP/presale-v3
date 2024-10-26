export const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA_TEMP":
      const { updateStatus } = action.payload;
      return {
        ...state,
        listPresale: state.listPresale.map((item) =>
          item.table === updateStatus
            ? { ...item, status: updateStatus.status }
            : item,
        ),
      };
    case "UPDATE_RPC":
      const { rpc } = action.payload;
      return { ...state, rpc };

    default:
      return state;
  }
};
