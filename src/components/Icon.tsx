import React from "react";

//引入icons目录下所有的.svg文件。
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
}


const Icon = (props: Props) => {
  return (
        <svg>
          <use xlinkHref={'#' + props.name}/>
        </svg>
  )
};

export default Icon