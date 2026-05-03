export const shuffleArray = <T>(arr: Array<T>): T[] => {
  return [...arr].sort(() => Math.random() - 0.5);
}
