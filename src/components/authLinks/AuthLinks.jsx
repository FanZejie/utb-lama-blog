import Link from "next/link"
import styles from "./authLinks.module.css";
export default function AuthLinks(){
    const status = "notauthenticated"
    return(
        <>
       
        {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link}>
            Login
          </Link>
        ):(
            <>
            <Link href="/write" className={styles.link}>
              Write
            </Link>
            <span className={styles.link} onClick={signOut}>
              Logout
            </span>
          </>
        )}
        </>
        
    )
}