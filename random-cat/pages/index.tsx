import { GetServerSideProps,NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './index.module.css'

type Props={
    initialImageUrl: string;
}

const IndexPage: NextPage<Props> = ({initialImageUrl}) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(false);

    const handlerClick = async()=>{
        setLoading(true);
        const image = await fetchImage();
        setImageUrl(image.url);
        setLoading(false);
    }

    return (
        <div className={styles.page}>
            <button onClick={handlerClick} className={styles.button}>new cat</button>
            <div className={styles.frame}>{loading|| <img src={imageUrl} className={styles.img} />}</div>
        </div>

    )
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async()=>{
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url
        }
    }
}

type Image = {
    url: string;
};

const fetchImage = async(): Promise<Image>=>{
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const images = await res.json();
    return images[0];
};
fetchImage().then((image)=>{
    console.log(image.url);
});
