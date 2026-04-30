export const formatCurrency = (amount, type) => {
  const sign = type === "수입" ? "+" : "-";
  return `${sign}${Number(amount).toLocaleString("ko-KR")}원`;
};

export const formatNetCurrency = (amount) => {
  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "";
  return `${sign}${Math.abs(amount).toLocaleString("ko-KR")}원`;
};
