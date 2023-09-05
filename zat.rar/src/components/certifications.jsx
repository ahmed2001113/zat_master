import React from 'react'
import c_1 from '../../public/svgs/certifications/gurante.svg'
import c_2 from '../../public/svgs/certifications/qualitiy.svg'
import c_3 from '../../public/svgs/certifications/sslCertification.svg'
import c_4 from '../../public/svgs/cart/mastercart.svg'
import c_5 from '../../public/svgs/cart/visa.svg'
import Image from 'next/image'
export default function Certifications() {
  return (
<>
<div className='cert'>

<Image src={c_4} width={90}  alt={'cert'} height={90}/>
      <Image src={c_5} alt={'cert'}  width={90} height={90}/>
</div>
    <div className='cert'>
      <Image src={c_1}  alt={'cert'} width={90} height={90}/>
      <Image src={c_2}  alt={'cert'} width={90} height={90}/>
      <Image src={c_3} alt={'cert'}  width={90} height={90}/>
    </div>  

</>

  )
}
