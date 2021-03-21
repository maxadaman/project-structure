import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootStateType } from 'types/general';

const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default useAppSelector;
