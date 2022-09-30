export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload:{
      id:new Date().getTime().toString(),
      data:data,
    }
  };
};

export const delTodo = (id) => {
  return {
    type: "DEL_TODO",
    id
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
