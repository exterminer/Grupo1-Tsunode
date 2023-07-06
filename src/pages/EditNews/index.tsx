import { UserHeader } from "../../components/UserHeader";
import { Footer } from "../../components/Footer";
import { FormEdit } from "../../components/FormEdit";

export const EditNews = () => {
  return (
    <div className="bg-grey">
      <section className="min-h-[100vh]">
        <UserHeader />
        <FormEdit />
        <Footer />
      </section>
    </div>
  );
};
