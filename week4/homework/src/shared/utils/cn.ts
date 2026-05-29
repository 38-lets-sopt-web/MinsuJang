import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';

export const cn = (...classNames: ClassValue[]) => clsx(...classNames);
