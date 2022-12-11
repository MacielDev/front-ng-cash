import { type } from 'os';
import { InputType } from 'zlib';

interface IFilterDataInput{
  inputDate: string,
}

export const FilterDataInput = ({inputDate}:IFilterDataInput) => {
  return (
    <input type="search" placeholder='put a date here' value={inputDate}/>
  )
}