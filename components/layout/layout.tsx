import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex-grow pt-[60px]">{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;
