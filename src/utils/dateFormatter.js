export const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function getDate(isoDateString) {
  const normalDate = new Date(isoDateString);

  const day = normalDate.getDate();
  const month = normalDate.getMonth() + 1;
  const year = normalDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getTime(isoDateString) {
  const normalDate = new Date(isoDateString);
  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  return normalDate.toLocaleTimeString(undefined, options);
}
