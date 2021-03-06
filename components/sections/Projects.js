import Link from "next/link";
export default function Projects({ loaded, styles }) {
  const projects = [
    {
      companyName: "Shupy E-commerce",
      img: "/attilogo.png",
      url: "https://shupy.herokuapp.com/",
      description: `In charge of developing a E-commerce responsive website, Shupy, using; HTML, CSS, React JS, Node JS, SQL, Tailwind.`,
    },
    {
      companyName: "Platform",
      img: "/anilogo.gif",
      url: "https://nocanpixel.github.io/venturitchall/",
      description: `A fun challange giving by a company to replicate an image of their website.`,
    },
    {
      companyName: "MyPelis",
      img: "/mypelislogo.png",
      url: "http://mypelis.herokuapp.com/",
      description:
        "As an ongoing personal project, I createdMypelis as a site to watch the most current movies, in order, by time of release and the most popular.",
    },
    {
      companyName: "Colnodo",
      img: "/colnodo.png",
      url: "https://nocanpixel.github.io/thirdchallenge/",
      description: `Getting a scholarship from Colnodo, which had a program sponsored by Google. I lead a team creating a functioning website for a restaurant.`,
    },
  ];
  return (
    <div className={styles.projects__container}>
      <div
        style={{ width: "40%", margin: "auto", textAlign: "center" }}
        className={styles.text__projects}
      >
        <h2>My recent work</h2>
        <p>
          Here are a few design projects I{"'"}ve worked on recently.{" "}
          <span style={{ color: "#0EC786" }}>
            <Link href="mailto:juancamilocb96@gmail.com">
              <a>Email me</a>
            </Link>
          </span>{" "}
          to see more.
        </p>
      </div>
      <div className={styles.card__grid}>
        {projects.map((ele, index) => {
          return (
            <Link href={`${ele.url}`}>
              <a target="_blank" alt="Url data">
                <div  className={styles.section__cards}>
                  <div className={styles.card__projects}>
                    <div className={styles.card__content}>
                      <div className={styles.contentBx}>
                        <h3>{ele.companyName}</h3>
                      </div>
                      <div
                        style={{ textAlign: "center", width: "90%" }}
                        className={styles.imgBx}
                      >
                        <p
                          className={styles.description__projects}
                          style={{ fontWeight: "lighter", fontSize: "0.9em" }}
                        >{`${ele.description}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
