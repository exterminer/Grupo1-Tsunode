import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FormEdit } from "../../components/FormEdit";

export const EditNews = () => {
  return (
    <div className="bg-grey">
      <section className="min-h-[100vh]">
        <Header />
        <FormEdit />
        <Footer />
      </section>
    </div>
  );
};
