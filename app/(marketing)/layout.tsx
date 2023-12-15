import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-t from-slate-950 to-violet-800 ">
      <main className="pt-40 pb-20 ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};
export default MarketingLayout;
