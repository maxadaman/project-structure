import { useDispatch } from 'react-redux';
import { DispatchType } from '../types/general';

const useAppDispatch = (): DispatchType => useDispatch<DispatchType>();

export default useAppDispatch;
