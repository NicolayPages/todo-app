import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, []);

  return [value, onChange, reset, setValue] as const;
};
