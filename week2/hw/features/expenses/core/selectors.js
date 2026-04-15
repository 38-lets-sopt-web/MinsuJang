/**
 * 개별 지출이 키워드 검색 조건과 일치하는지 확인한다.
 *
 * @param {object} expense 지출 데이터
 * @param {string} keyword 정규화된 검색어
 * @returns {boolean}
 */
const matchesKeyword = (expense, keyword) => {
  if (keyword === "") {
    return true;
  }

  return [
    expense.title,
    String(expense.amount),
    expense.date,
    expense.type,
    expense.category,
    expense.paymentMethod,
  ].some((value) => String(value).toLowerCase().includes(keyword));
};

/**
 * 개별 지출이 전체 필터 조건을 만족하는지 확인한다.
 *
 * @param {object} expense 지출 데이터
 * @param {{keyword: string, type: string, category: string, paymentMethod: string}} filters 필터 상태
 * @param {string} normalizedKeyword 소문자로 정규화된 검색어
 * @returns {boolean}
 */
const matchesFilters = (expense, filters, normalizedKeyword) => {
  const isKeywordMatched = matchesKeyword(expense, normalizedKeyword);
  const isTypeMatched = filters.type === "" || expense.type === filters.type;
  const isCategoryMatched = filters.category === "" || expense.category === filters.category;
  const isPaymentMethodMatched =
    filters.paymentMethod === "" || expense.paymentMethod === filters.paymentMethod;

  return isKeywordMatched && isTypeMatched && isCategoryMatched && isPaymentMethodMatched;
};

/**
 * 지출 목록을 날짜 기준으로 정렬한다.
 *
 * @param {Array<object>} expenses 지출 목록
 * @param {"asc"|"desc"} sortOrder 날짜 정렬 순서
 * @returns {Array<object>}
 */
const sortExpenses = (expenses, sortOrder) => {
  return [...expenses].sort((left, right) => {
    if (sortOrder === "asc") {
      return left.date.localeCompare(right.date) || Number(left.id) - Number(right.id);
    }

    return right.date.localeCompare(left.date) || Number(right.id) - Number(left.id);
  });
};

/**
 * 전체 지출 목록에서 현재 필터와 정렬 상태에 맞는 항목만 계산한다.
 *
 * @param {Array<object>} expenses 전체 지출 목록
 * @param {{keyword: string, type: string, category: string, paymentMethod: string}} filters 필터 상태
 * @param {"asc"|"desc"} sortOrder 날짜 정렬 순서
 * @returns {Array<object>}
 */
export const getVisibleExpenses = (expenses, filters, sortOrder) => {
  const normalizedKeyword = filters.keyword.trim().toLowerCase();
  const filteredExpenses = expenses.filter((expense) => {
    return matchesFilters(expense, filters, normalizedKeyword);
  });

  return sortExpenses(filteredExpenses, sortOrder);
};

/**
 * 현재 화면에 보이는 항목 기준으로 유효한 선택 상태만 남긴다.
 *
 * @param {Set<number>} selectedIds 선택된 지출 id 집합
 * @param {Array<object>} visibleExpenses 현재 화면에 보이는 지출 목록
 * @returns {Set<number>}
 */
export const getVisibleSelectedIds = (selectedIds, visibleExpenses) => {
  const visibleIds = new Set(visibleExpenses.map((expense) => Number(expense.id)));

  return new Set([...selectedIds].filter((id) => visibleIds.has(Number(id))));
};
