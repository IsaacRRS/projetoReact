import Guia from "@/components/Guia";
import WidthMaximo from "@/components/WidthMaximo";
import { ReactNode } from "react";

const Layout = ({children} : {children: ReactNode}) => {
    return (
        <WidthMaximo className="flex-1 flex flex-col">
            <Guia />
            {children}
        </WidthMaximo>)
}

export default Layout