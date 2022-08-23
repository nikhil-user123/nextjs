import Link from"next/link";
import styles from '../styles/index.module.css';
 const Navbar=()=>{ 
        return( 
                <> 
                <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}> 
                    <Link href="/"><a className={styles.text}>Astract</a></Link>
                </li>
                <li className={styles.li}> 
                    <p>|</p>
                </li>
                <li className={styles.li}> 
                    <Link href="/"><a className={styles.text}>HelpCenter</a></Link>
                </li>    
                </ul>

                <div className={styles.button}>
                <button  className={styles.button_Sub}>Submit a Request</button>
                <button  className={styles.button_sign}>Sign in</button>
                </div>
           </nav>
    </> 
 ); 
 }; 
  
 export default Navbar;