export const joinClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};