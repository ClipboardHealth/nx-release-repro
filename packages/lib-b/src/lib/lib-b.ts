import { libA } from '@clipboard-health/lib-a';

export function libB(): string {
  return 'lib-b' + libA();
}
