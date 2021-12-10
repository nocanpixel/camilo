import { Parallax } from 'react-parallax';

export default function Skills({ styles}) {
    return (
        <>
            <Parallax
        bgImage="/lines.jpg"
        bgImageAlt="the dog"
        strength={500}
    >
        
        <div style={{ height: '300px',display:'flex',justifyContent:'center',alignItems:'center' }} >
            <div className={styles.change__bg__introduction}>
                <h2>Introduction( )</h2>
            <p>An innovative problem-solver who can adapt to both independent and collaborative environments whilst committed to delivering high-quality outcomes within tight deadlines.</p>
            <a className={styles.quotes}> {'> '}Juan Camilo Carreño</a>
            </div>
        </div>
    </Parallax>
        </>
    )
}
