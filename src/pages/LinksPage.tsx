import ImportantLinks from "../components/ImportantLinks";
import RecentWorks from "../components/RecentWorks";

const LinksPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <ImportantLinks />
      <RecentWorks />
    </div>
  );
};

export default LinksPage;