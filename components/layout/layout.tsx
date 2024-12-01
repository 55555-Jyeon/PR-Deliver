import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="h-full flex-1 overflow-y-scroll hide-scrollbar">
                <div className="h-full mt-[60px]">{children}</div>
                <Footer />
            </main>
        </div>
    );
};
export default Layout;
