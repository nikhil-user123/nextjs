import Link from"next/link";
import styles from '../styles/index.module.css';
 const Navbar=()=>{ 
        return( 
                <> 
                <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}> 
                    <Link href="/" className={styles.text} >Astract</Link>
                </li>
                <li className={styles.li}> 
                    <p>|</p>
                </li>
                <li className={styles.li}> 
                    <Link href="/" className={styles.text} >HelpCenter</Link>
                </li>    
                </ul>
                <input type="checkbox" name="click" id="click">

                <label for="" className={styles.search}>
                <i className={fa fa-search} aria-hidden="true"></i>    
                </label>

                

                <div className={styles.button}>
                <button  className={styles.button_Sub}>Submit a Request</button>
                <button  className={styles.button_sign}>Sign in</button>
                </div>
           </nav>
    </> 
 ); 
 }; 
  
 export default Navbar;