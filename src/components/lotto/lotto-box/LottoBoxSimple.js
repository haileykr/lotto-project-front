import React from "react";
import  {LottoBox, LottoBoxNumber} from "./LottoBoxComponentStyles.jsx";

const LottoBoxComponent = ({ lottoNumber }) => {
  const numbers = lottoNumber.slice(0, 6);

  return (
    <>
        {lottoNumber.length > 0 ?
            (
                <LottoBox>
                    {numbers.map((n, i) => (
                        <LottoBoxNumber key={i}>
                            {n}
                        </LottoBoxNumber>
                    ))}
                    
                </LottoBox>
            )
        :
        (<h1>Server Temporarily Not Available</h1>)


        }
    </>
  );
};

export default LottoBoxComponent;
