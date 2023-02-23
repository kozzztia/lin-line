import Link from "next/link";

const Index = () => {
    return (
        <>
            <div>
                <h1>404</h1>
                <Link href={'/'}>back</Link>
                <p>page not found try s0mething else</p>
            </div>
        </>
    );
};

export default Index;