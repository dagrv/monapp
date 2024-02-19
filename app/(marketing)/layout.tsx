import Navbar from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full dark:bg-[#1C1C1C]">
            <Navbar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}
 
export default MarketingLayout;