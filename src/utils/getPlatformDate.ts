import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function getPlatformDate(data: Date) {
  if ((Platform.OS = 'ios')) {
    return addDays(data, 1);
  } else {
    return data;
  }
}
