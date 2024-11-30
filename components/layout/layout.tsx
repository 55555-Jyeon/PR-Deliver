import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="max-h-[calc(100vh-60px-120px)] mt-[60px] overflow-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
