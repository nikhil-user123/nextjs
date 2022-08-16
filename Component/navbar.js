import Link from "next/link";
import styles from '../styles/index.module.css';
 const Navbar = () => { 
   return ( 
     <> 
       <nav className={styles.nav}>
           <ul className={styles.ul}>
            <li><a className={styles.text} href="#">Abstract</a></li>
            <li><p className={styles.text} href="#">|</p></li>
            <li><a className={styles.text} href="#">HelpCenter</a></li>
           </ul>
             <button  className={styles.button_sign}>Sign in</button>
       </nav>
     </> 
   ); 
 }; 
  
 export default Navbar;