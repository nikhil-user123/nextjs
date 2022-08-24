import Link from"next/link";

import styles from '../styles/index.module.css';
{/*
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'*/}
 const Navbar=()=>{ 
        return( 
                <> 
                <nav className={styles.nav}>
                <ul className={styles.ul}>                 
                    <Link href="/abstract"  >
                    <li className={styles.li}>    
                        <a className={styles.text}>Abstract</a>
                    </li>
                    </Link>
                <li className={styles.li}> 
                    <p>|</p>
                </li>
                <Link href="/"  >
                    <li className={styles.li}>    
                        <a className={styles.text}>HelpCenter</a>
                    </li>
                </Link>
   
                </ul>                

                {/*<FontAwesomeIcon icon={faFaceRelieved} />*/}
                

                <div className={styles.button}>
                <button  className={styles.button_Sub}>Submit a Request</button>
                <button  className={styles.button_sign}>Sign in</button>
                </div>
           </nav>
    </> 
 ); 
 }; 
  
 export default Navbar;