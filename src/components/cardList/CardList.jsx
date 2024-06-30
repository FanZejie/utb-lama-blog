import Card from "../card/Card";
import styles from "./cardList.module.css"
//import
export default function CardList(){

 return(
    <div className={styles.container}>
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    
  </div>
)
}