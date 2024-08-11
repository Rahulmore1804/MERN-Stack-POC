export const syncList = (aa) => {
    return {
      type: "SAVE",
      payload: aa,
    };
  };
  export const incc = () => {
    return {
      type: "INC",
    };
  };
  export const incNumber = () => {
    return {
      type: "Increment",
    };
  };
  export const saveData = (x) => {
    console.log("x", x);
    return {
      type: "saveData",
      payload: x,
    };
  };
  
  export const ap = (a) => {
    return {
      type: "syncDataAll1",
      payload: a,
    };
  };
  export const ap1 = (a) => {
    return {
      type: "syncDataAlla1",
      payload: a,
    };
  };
  export const ap2 = (a) => {
    console.log('a', a)
    return {
      type: "addCart",
      payload: a,
    };
  };
  