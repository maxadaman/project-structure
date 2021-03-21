import { useDispatch } from 'react-redux';
import { DispatchType } from '../types/general';

const useAppDispatch = () => useDispatch<DispatchType>();

export default useAppDispatch;
