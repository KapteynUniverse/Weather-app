export const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getDayName = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};
