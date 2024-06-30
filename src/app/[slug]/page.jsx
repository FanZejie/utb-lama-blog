import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";



const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = {
    container:''
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt="" width={50} height={50} className="styles.image"></Image>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>jhon</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            
          />
          <p>
            occur read accurate tonight continent carefully locate east additional either coat audience image throughout neck share naturally call vast grain refer flies cast sell
          </p>

          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
