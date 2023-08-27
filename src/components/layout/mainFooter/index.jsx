import { SelectCategoriesLinks, categoriesSelectorReducer } from "@/src/store/categories/category.selector";
import Link from "next/link";
import { useSelector } from "react-redux";

 
function Mainfooter({footer}) {
  const categories = useSelector(SelectCategoriesLinks)
  console.log(categories);
  return (
 
 <>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
           Lorem ipsum dolor sit amet consectetur, adipisicin
           g elit. Quia at perferendis accusamus sequi consequatur! Dicta, dolorem laudantium quas tempore voluptates facili
           s esse doloribus aliquid accusantium? Sit tempora dolorem aspernatur quas!
           </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
            {
              categories&&categories.map(cat=>{
                return(
                  <li key={cat.name}>

                    <Link href={`/shop/${cat.slug}`}>
                    {cat.slug}

                    </Link>
                  </li>
                )
              })
            }
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/shop">shop</Link></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">Mohab Elbasiry</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons"> 
              <li><a class="dribbble" href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="facebook" href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
 </>
  )
}

export default Mainfooter
