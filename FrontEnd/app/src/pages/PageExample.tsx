//a ideia é que as pages sejam os arquivos que irão importar e utilizar todos os componentes necessários 
//para seu funcionamento

import { ComponentExample } from "../components/ComponentExample"

export const PageExample = () => {
    return(
        <ComponentExample prop1={0} prop2={""}/>
    )
}