import styles from "./homepage.module.css";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
   <>
    <main>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </main>
    
   </>
  );
}
