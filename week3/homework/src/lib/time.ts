export function roundToTenth(value: number) {
  return Math.round(value * 10) / 10;
}

export function formatRecordDate(value: string) {
  const date = new Date(value);
  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(date);
}
