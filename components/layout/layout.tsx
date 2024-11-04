import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <main className=" min-h-[calc(100vh-60px-120px)] mt-[60px]">
                {children}
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
