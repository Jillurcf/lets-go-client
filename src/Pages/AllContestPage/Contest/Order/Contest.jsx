import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../../../assets/Images/a12Banner.jpg";
import useContests from "../../../../Hooks/UseContests";
import { useState } from "react";
import ContestTab from "../ContestTab/ContestTab";
import Cover from "../../../Shared/Cover/Cover";

const Contest = () => {
  const tags = [
    "Medical Contest",
    "Article Writing",
    "Gaming",
    "Business Contest",
  ];
  // const {tags} = useParams();
  const initialIndex = tags.indexOf(tags);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  //  const [menu] = useMenu();
  const [contest] = useContests();

  const MedicalContest = contest.filter(
    (item) => item.tags === "Medical Contest"
  );
  const ArticleWriting = contest.filter(
    (item) => item.tags === "Article Writing"
  );
  const Gaming = contest.filter((item) => item.tags === "Gaming");
  console.log(MedicalContest);
  const BusinessContest = contest.filter(
    (item) => item.tags === "Business Contest"
  );

  return (
    <div className="mb-60">
      <Helmet>
        {/* <html lang={"en"} /> */}
        <title>Lets Go | Contest</title>
      </Helmet>
      <Cover img={img}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Medical Contest</Tab>
          <Tab>Article Writing</Tab>
          <Tab>Gaming</Tab>
          <Tab>Business Contest</Tab>
        </TabList>
        <TabPanel>
          <ContestTab items={MedicalContest}></ContestTab>
        </TabPanel>
        <TabPanel>
          <ContestTab items={ArticleWriting}></ContestTab>
        </TabPanel>
        <TabPanel>
          <ContestTab items={Gaming}></ContestTab>
        </TabPanel>
        <TabPanel>
          <ContestTab items={BusinessContest}></ContestTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Contest;
