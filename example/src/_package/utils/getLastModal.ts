//
export const getLastModal = (classAppModal: string) => {
  const list = document.getElementsByClassName(classAppModal);

  return list[list.length - 2];
};
