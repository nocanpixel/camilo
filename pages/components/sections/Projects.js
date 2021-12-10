import Image from 'next/image';
import Link from 'next/link';
export default function Projects({ loaded, styles }) {
    const projects = [
        {
            companyName: 'Atti',
            img: '/attilogo.png',
            url: 'https://atti.net.co/',
            description: `In charge of developing a responsive website for the Internet service provider, Atti, using; HTML, CSS, JavaScript, JQuery, SQL.`,
        },
        {
            companyName: 'Ani',
            img: '/anilogo.gif',
            description: `Building and designing the user module systems for the user management company, ANI, and generating receipts to show payment details.`,
        },
        {
            companyName: 'MyPelis',
            img: '/mypelislogo.png',
            url: 'http://mypelis.herokuapp.com/',
            description: 'As an ongoing personal project, I createdMypelis as a site to watch the most current movies, in order, by time of release and the most popular.'
        },
        {
            companyName: 'Colnodo',
            img: '/colnodo.png',
            url:'https://nocanpixel.github.io/thirdchallenge/',
            description: `Getting a scholarship from Colnodo, which had a program sponsored by Google. I lead a team creating a functioning website for a restaurant.`,
        }
    ]
    return (
        <div className={styles.projects__container}>
            <div style={{ width: '40%', margin: 'auto',textAlign:'center' }} className={styles.text__projects}>
                <h2>My Recent Work</h2>
                <p>Here are a few design projects I've worked on recently. <span style={{color:'#0EC786'}}><Link href="mailto:juancamilocb96@gmail.com"><a>Email me</a></Link></span> to see more.</p>
            </div>
            <div className={styles.card__grid}>
            {projects.map((ele) => {
                return (
                    <Link href={`${ele.url}`}>
                    <a target="_blank" alt="Url data">
                        <div key={ele.companyName} className={styles.section__cards}>
                            <div className={styles.card__projects}>
                                <div className={styles.card__content}>
                                    <div className={styles.contentBx}>
                                        <h3>{ele.companyName}</h3>
                                    </div>
                                    <div style={{textAlign:'center',width:'90%'}} className={styles.imgBx}>
                                    <p className={styles.description__projects} style={{fontWeight:'lighter',fontSize:'0.9em'}}>{`${ele.description}`}</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                        </Link>
                )
            })}
            </div>
        </div>
    );
};
