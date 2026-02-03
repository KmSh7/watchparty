import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DispatcherType, SelectorType } from "../store";


/** create dispatch hook */
export const useAppDispatcher = () => useDispatch<DispatcherType>();
export const useAppSelector : TypedUseSelectorHook<SelectorType> = useSelector;