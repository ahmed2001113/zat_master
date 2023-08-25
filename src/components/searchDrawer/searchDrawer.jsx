import Link from 'next/link'
import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import CustomButton from '../customsComponents/buttons/button'
import styles from './search.module.css'
import { useRouter } from 'next/router'
function SearchDrrawer({show,setShow,categories,}) {
const [inputValue,setInputValue] = useState('');
const [error,setErro]=useState('')
const router = useRouter()
const onchange=(e)=>{
setInputValue(e.target.value)
}
const onSubmit = (e)=>{
e.preventDefault();
if(inputValue.trim()==="") {
    setErro('Enter something To Search');
    return
};
router.push( `/search/${inputValue.trim()}` )
setShow(false)

}
  return (
 
 <>
 
 <Offcanvas backdrop={false} style={{top:'120px'}} className={`${styles.off}`}  show={show} placement='top' onHide={()=>setShow(false)}>
     
        <Offcanvas.Body>
        <Offcanvas.Header closeButton>
            Search
         </Offcanvas.Header>
       <div className={`${styles.search_container}`}>
       <form onSubmit={onSubmit}>
       <input  required onChange={onchange} placeholder='What Are You Looking For'  className={`${styles.search}`}/>

<CustomButton type={'submit'} disapled={!inputValue} bk={'#fff'} color={'#000'} >

search
    </CustomButton>
       </form>

       {error&&<p className={`${styles.er}`}>
        {error}
        </p>}
       </div>
    <div className={`${styles.categ}`}>
    <h6>

POPULAR  CATEGORIES 
</h6>
{
categories&&categories.map(cate=>{
    return <li key={cate.id}>
        <Link  href={`/shop/${cate.slug}`}>
{
cate.name
}
        </Link>
    </li>
})
}
    </div>
        </Offcanvas.Body>
      </Offcanvas></>
  )
}

export default SearchDrrawer
