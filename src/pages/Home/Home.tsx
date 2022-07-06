import { useEffect } from "react";

const Home = () => {

    const fetchData = async () => {
        const responce = await fetch('https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=10');
        const result = await responce.json();
        return result;
    }

    useEffect(() => {
        fetchData().then(r => {
            console.log(r);
        })
    }, []);
    
    return(
        <>
        </>
    );
}

export { Home }