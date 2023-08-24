import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import validateInput from '../utils/validateInput';

export type InputReturnTypes<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean | undefined
];

export type InputTypes = 'email' | 'password' | 'modifiedTodo' | 'todo';

const useInput = <T>(initialValue: T, inputType: InputTypes): InputReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  const isValidated = validateInput(value, inputType);

  return [value, setValue, onChangeHandler, isValidated];
};

export default useInput;
