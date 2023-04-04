export const AddCity = (data) => {
  return {
    type: "addCity",
    payload: data,
  };
};

export const RemoveCity = (index) => ({
  type: "removeCity",
  payload: index,
});
