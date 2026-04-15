/*
 * data
 * - title: string
 * - amount: number ex) 5000, 3000
 * - type: "지출" | "수입"
 * - category: "주거비" | "식비" | "생활" | "문화" | "교통" | "기타"
 * - paymentMethod: "현금" | "신용카드" | "체크카드"
 * - date: string ex) 2026-04-10
 */

export const mockExpenses = [
  {
    id: 1,
    title: "점심 식사",
    amount: 9500,
    type: "지출",
    category: "식비",
    paymentMethod: "체크카드",
    date: "2026-04-10",
  },
  {
    id: 2,
    title: "버스 충전",
    amount: 3000,
    type: "지출",
    category: "교통",
    paymentMethod: "현금",
    date: "2026-04-10",
  },
  {
    id: 3,
    title: "월급",
    amount: 2500000,
    type: "수입",
    category: "기타",
    paymentMethod: "신용카드",
    date: "2026-04-11",
  },
  {
    id: 4,
    title: "생활용품 구매",
    amount: 21800,
    type: "지출",
    category: "생활",
    paymentMethod: "신용카드",
    date: "2026-04-11",
  },
  {
    id: 5,
    title: "월세 이체",
    amount: 300000,
    type: "지출",
    category: "주거비",
    paymentMethod: "체크카드",
    date: "2026-04-12",
  },
  {
    id: 6,
    title: "커피",
    amount: 4800,
    type: "지출",
    category: "식비",
    paymentMethod: "신용카드",
    date: "2026-04-12",
  },
  {
    id: 7,
    title: "영화 관람",
    amount: 15000,
    type: "지출",
    category: "문화",
    paymentMethod: "체크카드",
    date: "2026-04-12",
  },
  {
    id: 8,
    title: "중고 판매",
    amount: 40000,
    type: "수입",
    category: "기타",
    paymentMethod: "현금",
    date: "2026-04-13",
  },
  {
    id: 9,
    title: "택시",
    amount: 13200,
    type: "지출",
    category: "교통",
    paymentMethod: "신용카드",
    date: "2026-04-13",
  },
  {
    id: 10,
    title: "세탁비",
    amount: 7000,
    type: "지출",
    category: "생활",
    paymentMethod: "현금",
    date: "2026-04-14",
  },
  {
    id: 11,
    title: "프리랜서 작업비",
    amount: 180000,
    type: "수입",
    category: "기타",
    paymentMethod: "현금",
    date: "2026-04-14",
  },
  {
    id: 12,
    title: "외식",
    amount: 22000,
    type: "지출",
    category: "식비",
    paymentMethod: "신용카드",
    date: "2026-04-14",
  },
];
