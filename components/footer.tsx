import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Content copy block (from Figma) */}
      
      <br /><br /><br />
      {/* Red action strip */}
      <section className="w-[1920px] max-w-full mx-auto" style={{ backgroundColor: '#D0011B' }}>
        <div className="px-[200px] py-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[14px]">
            <a href="/stores" className="font-medium hover:opacity-80 transition-opacity cursor-pointer">
              Visit Our Stores Near You
            </a>
            <a href="/wholesale" className="font-medium hover:opacity-80 transition-opacity cursor-pointer">
              Group Orders
            </a>
            <a href="/catalog" className="font-medium hover:opacity-80 transition-opacity cursor-pointer">
              Shop Our Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Gray footer content */}
      <section className="w-[1920px] max-w-full mx-auto" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="px-[50px] pt-10 pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Signup */}
            <div>
              <h3 className="text-[16px] font-medium mb-2">Sign Up for Email & Text Messages!</h3>
              <p className="text-[12px] opacity-80 mb-3">Get access to exclusive offers, special deals, plus sneak previews of new products and more.</p>
              <div className="space-y-2">
                <input placeholder="Enter Email Address" className="w-full h-[40px] rounded border border-[#ddd] px-3 text-[14px]" />
                <input placeholder="Enter Phone Number" className="w-full h-[40px] rounded border border-[#ddd] px-3 text-[14px]" />
              </div>
              <p className="text-[10px] opacity-70 mt-3">By subscribing to Dev Egypt text messaging, you consent to receive recurring autodialed marketing messages to the mobile number used...</p>
              <div className="mt-4">
                <div className="text-[14px] font-medium mb-2">Get Social With Us</div>
                <div className="flex items-center gap-4">
                  <a aria-label="Facebook" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    background: "black",
                    borderRadius: "50%",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                    href="#"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.16661 15.3301V8.49884H7.46913L7.81301 5.82478H5.16661V4.12182C5.16661 3.34883 5.38266 2.82105 6.48906 2.82105H7.89225V0.436296C7.2089 0.363815 6.52212 0.328378 5.83494 0.330141C3.79781 0.330141 2.4006 1.57485 2.4006 3.85494V5.81955H0.110046V8.49436H2.40509V15.3301H5.16661Z" fill="white" />
                    </svg>
                  </a>
                  <a aria-label="Instagram" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    background: "black",
                    borderRadius: "50%",
                    textDecoration: "none",
                    cursor: "pointer"
                  }} href="#"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.79491 0.32986C9.71985 0.32986 10.1391 0.337441 10.5387 0.351088L10.6903 0.357154C10.8154 0.361703 10.945 0.367768 11.0929 0.374591C11.7147 0.387065 12.33 0.504989 12.9124 0.72334C13.4108 0.915727 13.8634 1.21025 14.2411 1.58799C14.6188 1.96573 14.9134 2.41831 15.1058 2.91667C15.3241 3.49908 15.4421 4.11434 15.4545 4.73623L15.4719 5.13956L15.4772 5.29119C15.4924 5.74002 15.4985 6.21614 15.5 7.40643V8.2548C15.5 9.4451 15.4924 9.92273 15.4772 10.37L15.4719 10.5217L15.4545 10.925C15.4421 11.5469 15.3242 12.1622 15.1058 12.7446C14.913 13.2427 14.6184 13.6952 14.2407 14.0728C13.863 14.4505 13.4106 14.7452 12.9124 14.9379C12.33 15.1562 11.7147 15.2741 11.0929 15.2866C10.945 15.2942 10.8154 15.2995 10.6903 15.3041L10.5387 15.3102C10.0898 15.3253 9.61371 15.3306 8.42342 15.3314H7.57505C6.38475 15.3314 5.90712 15.3253 5.45981 15.3102L5.30818 15.3041C5.18233 15.2995 5.05268 15.2935 4.90484 15.2866C4.28295 15.2743 3.66768 15.1563 3.08528 14.9379C2.58676 14.7458 2.13402 14.4514 1.75625 14.0736C1.37848 13.6958 1.08405 13.2431 0.891954 12.7446C0.673574 12.1622 0.555649 11.5469 0.543205 10.925L0.52501 10.5217L0.519703 10.37C0.506056 9.97126 0.49999 9.55124 0.498474 8.6263V7.03418C0.498474 6.10924 0.506056 5.68922 0.519703 5.29044L0.52501 5.13881L0.543205 4.73547C0.555576 4.11358 0.673504 3.49831 0.891954 2.91591C1.08434 2.41756 1.37887 1.96497 1.7566 1.58723C2.13434 1.20949 2.58693 0.914968 3.08528 0.722582C3.66768 0.504131 4.28295 0.386204 4.90484 0.373832C5.05268 0.366251 5.18233 0.360944 5.30818 0.356395L5.45981 0.35033C5.85935 0.336684 6.27861 0.330618 7.20355 0.329102L8.79491 0.32986ZM8.60537 1.68088H7.39233C5.93593 1.68088 5.66982 1.69226 4.96625 1.7241C4.49065 1.73005 4.01959 1.81749 3.57353 1.98263C3.2501 2.10749 2.95638 2.29868 2.71129 2.5439C2.46621 2.78912 2.27517 3.08293 2.15048 3.40643C1.98485 3.85206 1.89763 4.32301 1.89271 4.7984C1.86011 5.50196 1.85026 5.76731 1.84874 7.22448V8.43752C1.84874 9.89468 1.86011 10.16 1.89195 10.8636C1.89766 11.3389 1.98485 11.8097 2.14973 12.2556C2.27441 12.5792 2.46554 12.8731 2.71077 13.1183C2.956 13.3636 3.24991 13.5547 3.57353 13.6794C4.01956 13.8445 4.49067 13.9317 4.96625 13.9371C5.11258 13.9447 5.23995 13.95 5.36352 13.9546L5.51061 13.9599C5.90105 13.9735 6.30894 13.9788 7.21568 13.9804H8.77823C9.68801 13.9804 10.0929 13.9735 10.4841 13.9599L10.6304 13.9546L11.0277 13.9379C11.5033 13.9321 11.9744 13.8447 12.4204 13.6794C12.744 13.5547 13.0379 13.3636 13.2831 13.1183C13.5284 12.8731 13.7195 12.5792 13.8442 12.2556C14.0091 11.8095 14.0963 11.3384 14.102 10.8628C14.1095 10.7165 14.1149 10.5899 14.1194 10.4663L14.1247 10.3192C14.1384 9.92804 14.1437 9.52092 14.1452 8.61341V7.05162C14.1452 6.14184 14.1384 5.73623 14.1247 5.34578L14.1194 5.1987C14.1149 5.07588 14.1088 4.94851 14.102 4.80143C14.0963 4.32612 14.0091 3.8553 13.8442 3.40947C13.7195 3.08584 13.5284 2.79194 13.2831 2.5467C13.0379 2.30147 12.744 2.11035 12.4204 1.98566C11.9744 1.82035 11.5033 1.73315 11.0277 1.72789C10.3249 1.69529 10.0595 1.68543 8.60158 1.68392L8.60537 1.68088ZM7.99885 3.97808C8.76059 3.97808 9.50522 4.20396 10.1386 4.62716C10.7719 5.05035 11.2656 5.65186 11.5571 6.35561C11.8486 7.05936 11.9249 7.83375 11.7763 8.58085C11.6276 9.32795 11.2608 10.0142 10.7222 10.5528C10.1836 11.0915 9.49732 11.4583 8.75022 11.6069C8.00313 11.7555 7.22874 11.6792 6.52498 11.3877C5.82123 11.0962 5.21973 10.6026 4.79653 9.96921C4.37333 9.33585 4.14745 8.59122 4.14745 7.82948C4.14735 7.32368 4.2469 6.82281 4.44042 6.3555C4.63393 5.88818 4.91762 5.46356 5.27528 5.10591C5.63293 4.74825 6.05755 4.46456 6.52487 4.27105C6.99219 4.07753 7.49305 3.97798 7.99885 3.97808ZM7.99885 5.3291C7.50403 5.3291 7.02031 5.47584 6.60888 5.75075C6.19744 6.02566 5.87677 6.4164 5.6874 6.87356C5.49804 7.33073 5.4485 7.83377 5.54503 8.31909C5.64157 8.80441 5.87985 9.25021 6.22975 9.60011C6.57964 9.95 7.02544 10.1883 7.51076 10.2848C7.99608 10.3814 8.49913 10.3318 8.95629 10.1424C9.41345 9.95308 9.80419 9.63241 10.0791 9.22098C10.354 8.80954 10.5007 8.32583 10.5007 7.831C10.5007 7.50244 10.436 7.17711 10.3103 6.87356C10.1846 6.57002 10.0003 6.29421 9.76796 6.06189C9.53564 5.82957 9.25983 5.64528 8.95629 5.51955C8.65274 5.39382 8.32741 5.3291 7.99885 5.3291ZM12.0026 2.92577C12.1806 2.92577 12.3546 2.97855 12.5026 3.07743C12.6506 3.17632 12.766 3.31686 12.8341 3.4813C12.9022 3.64574 12.92 3.82669 12.8853 4.00126C12.8506 4.17583 12.7648 4.33618 12.639 4.46203C12.5131 4.58789 12.3528 4.6736 12.1782 4.70832C12.0036 4.74305 11.8227 4.72523 11.6583 4.65711C11.4938 4.589 11.3533 4.47365 11.2544 4.32566C11.1555 4.17767 11.1027 4.00368 11.1027 3.82569C11.1029 3.58708 11.1978 3.35829 11.3665 3.18957C11.5352 3.02084 11.764 2.92597 12.0026 2.92577Z" fill="white" />
                  </svg>
                  </a>
                  <a aria-label="Pinterest" href="#"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30.8301C12.0334 30.8299 9.13359 29.95 6.66707 28.3018C4.20055 26.6536 2.27815 24.311 1.14294 21.5702C0.00772107 18.8295 -0.289327 15.8137 0.289352 12.9041C0.868031 9.99455 2.29645 7.32191 4.39399 5.22413C5.78465 3.82124 7.43871 2.70684 9.26121 1.94492C11.0837 1.18299 13.0387 0.788541 15.0141 0.784216C16.9894 0.77989 18.9462 1.16577 20.772 1.91971C22.5978 2.67365 24.2568 3.78079 25.6535 5.17758C27.0503 6.57437 28.1575 8.23329 28.9114 10.0591C29.6654 11.8849 30.0512 13.8417 30.0469 15.817C30.0426 17.7924 29.6481 19.7474 28.8862 21.5699C28.1243 23.3924 27.0099 25.0465 25.607 26.4371C24.2173 27.8344 22.5643 28.9422 20.7436 29.6963C18.9229 30.4503 16.9707 30.8357 15 30.8301ZM14.085 11.8851C13.185 11.8851 12.485 12.8251 12.485 14.0261C12.48 14.4762 12.5699 14.9222 12.749 15.3351C12.749 15.3441 11.833 19.2021 11.681 19.8441C11.4836 20.8671 11.4728 21.9173 11.649 22.9441L11.655 22.9841C11.6584 23.0101 11.6714 23.0339 11.6913 23.0509C11.7113 23.0679 11.7368 23.0769 11.763 23.0761C11.7804 23.0761 11.7975 23.0722 11.8131 23.0645C11.8287 23.0569 11.8423 23.0458 11.853 23.0321L11.877 23.0011C12.5256 22.207 13.0253 21.3021 13.352 20.3301C13.452 19.9681 13.932 18.0741 13.937 18.0551C14.1623 18.3829 14.4662 18.6491 14.8207 18.8293C15.1753 19.0096 15.5694 19.0982 15.967 19.0871C16.5963 19.0882 17.2172 18.9425 17.7803 18.6617C18.3434 18.3808 18.8333 17.9725 19.211 17.4691C20.0579 16.2912 20.4936 14.8673 20.451 13.4171C20.4231 12.7582 20.2641 12.1114 19.9833 11.5147C19.7025 10.9179 19.3055 10.3832 18.8155 9.94173C18.3255 9.50027 17.7524 9.16095 17.1297 8.94364C16.507 8.72633 15.8473 8.63539 15.189 8.67613C14.3708 8.64326 13.5544 8.777 12.7894 9.06923C12.0245 9.36146 11.3269 9.80609 10.739 10.3761C9.80796 11.2927 9.27338 12.5378 9.24999 13.8441C9.18268 14.4809 9.30889 15.1231 9.61216 15.687C9.91543 16.2509 10.3817 16.7103 10.95 17.0051C10.9952 17.0234 11.0433 17.0332 11.092 17.0341C11.1582 17.0333 11.2219 17.009 11.2719 16.9656C11.3218 16.9222 11.3548 16.8625 11.365 16.7971L11.481 16.3451L11.535 16.1331C11.5672 16.0537 11.573 15.966 11.5516 15.883C11.5301 15.8 11.4826 15.7261 11.416 15.6721C11.0393 15.2177 10.8441 14.6399 10.868 14.0501C10.8591 13.0198 11.2539 12.0269 11.968 11.2841C12.3579 10.8903 12.8244 10.5807 13.3386 10.3743C13.8529 10.1679 14.404 10.0691 14.958 10.0841C17.058 10.0841 18.416 11.3291 18.416 13.2551C18.416 15.7631 17.283 17.6551 15.781 17.6551C15.5736 17.6597 15.3679 17.6171 15.1794 17.5305C14.9909 17.4439 14.8246 17.3155 14.693 17.1551C14.5741 17.0026 14.4921 16.8248 14.4532 16.6353C14.4144 16.4459 14.4198 16.2501 14.469 16.0631C14.559 15.6851 14.68 15.2961 14.797 14.9191C15.0115 14.3418 15.148 13.7385 15.203 13.1251C15.2214 12.9682 15.206 12.8091 15.158 12.6586C15.11 12.508 15.0305 12.3694 14.9247 12.2521C14.8188 12.1347 14.6892 12.0413 14.5444 11.978C14.3996 11.9147 14.243 11.8831 14.085 11.8851Z" fill="black" />
                  </svg>
                  </a>
                  <a aria-label="TikTok" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    background: "black",
                    borderRadius: "50%",
                    textDecoration: "none",
                    cursor: "pointer"
                  }} href="#"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5485 6.48082C12.2148 6.48082 10.9744 6.05245 9.96528 5.33065V10.5682C9.96377 13.1969 7.83022 15.3312 5.20083 15.3312C2.57143 15.3312 0.436371 13.1961 0.436371 10.5667C0.436371 7.9373 2.57143 5.80225 5.20083 5.80225C5.42449 5.80225 5.63906 5.81741 5.85514 5.84774V8.48244C5.64816 8.41724 5.42753 8.3816 5.19855 8.3816C3.99227 8.3816 3.01194 9.36194 3.01194 10.569C3.01194 11.776 3.99227 12.7564 5.19855 12.7564C6.40559 12.7564 7.38593 11.776 7.38593 10.5682V0.328125H9.96528C9.96528 0.337981 9.96528 0.347838 9.96528 0.357694C9.96528 0.569987 9.98424 0.774698 10.0199 0.977134C10.2041 1.96126 10.7879 2.80513 11.5999 3.32828C12.1625 3.69979 12.8358 3.91663 13.5591 3.91663L13.5636 3.91815V6.48007L13.5485 6.48082Z" fill="white" />
                  </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Company / Customer Service / Retail */}
            <div className="grid grid-cols-3 gap-8 text-[13px]">
              <div>
                <div className="text-[14px] font-medium mb-2">Company</div>
                <ul className="space-y-1 opacity-80">
                  <li><a href="/about" className="hover:opacity-60 transition-opacity cursor-pointer">About Us</a></li>
                  <li><a href="/privacy" className="hover:opacity-60 transition-opacity cursor-pointer">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:opacity-60 transition-opacity cursor-pointer">Terms & Conditions</a></li>
                  <li><a href="/stores" className="hover:opacity-60 transition-opacity cursor-pointer">Store Locator</a></li>
                  <li><a href="/careers" className="hover:opacity-60 transition-opacity cursor-pointer">Careers</a></li>
                </ul>
              </div>
              <div>
                <div className="text-[14px] font-medium mb-2">Customer Service</div>
                <ul className="space-y-1 opacity-80">
                  <li><a href="/help" className="hover:opacity-60 transition-opacity cursor-pointer">Help</a></li>
                  <li><a href="/returns" className="hover:opacity-60 transition-opacity cursor-pointer">Returns & Exchanges</a></li>
                  <li><a href="/orders" className="hover:opacity-60 transition-opacity cursor-pointer">Order Status</a></li>
                  <li><a href="/faq" className="hover:opacity-60 transition-opacity cursor-pointer">FAQs</a></li>
                  <li><a href="/sizing" className="hover:opacity-60 transition-opacity cursor-pointer">Sizing Information</a></li>
                  <li><a href="/accessibility" className="hover:opacity-60 transition-opacity cursor-pointer">Accessibility</a></li>
                </ul>
              </div>
              <div>
                <div className="text-[14px] font-medium mb-2">Retail</div>
                <ul className="space-y-1 opacity-80">
                  <li><a href="/stores" className="hover:opacity-60 transition-opacity cursor-pointer">Find a Store</a></li>
                  <li><a href="/deals" className="hover:opacity-60 transition-opacity cursor-pointer">In-Store Savings</a></li>
                </ul>
              </div>
            </div>

            {/* Featured Categories */}
            <div className="text-[13px]">
              <div className="text-[14px] font-medium mb-2">Featured Categories</div>
              <ul className="columns-2 gap-8 opacity-80 [column-fill:_balance]">
                <li><a href="/catalog?category=women" className="hover:opacity-60 transition-opacity cursor-pointer">Women's Collection</a></li>
                <li><a href="/catalog?category=men" className="hover:opacity-60 transition-opacity cursor-pointer">Men's Collection</a></li>
                <li><a href="/catalog?sale=true" className="hover:opacity-60 transition-opacity cursor-pointer">Sale Items</a></li>
                <li><a href="/catalog?new=true" className="hover:opacity-60 transition-opacity cursor-pointer">New Arrivals</a></li>
                <li><a href="/catalog?featured=true" className="hover:opacity-60 transition-opacity cursor-pointer">Featured Products</a></li>
                <li><a href="/brands" className="hover:opacity-60 transition-opacity cursor-pointer">Our Brands</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-[12px] opacity-70">© {new Date().getFullYear()} Dev Egypt. All rights reserved.</div>
          {/* Removed logos section - replaced with Dev Egypt branding only */}
        </div>
      </section>
    </footer>
  )
}


