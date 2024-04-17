
import { store } from "@/redux/store";

import { Provider, ProviderProps } from "react-redux";

interface Provider{
    children:any;

}
export function Providers({children}:ProviderProps){
    return <Provider store={store}>{children}</Provider>
}