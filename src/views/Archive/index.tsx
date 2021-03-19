import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Search from "./Search";
import "./styles.scss";

const Archive = () => {
  return (
    <div className="py-10 archive">
      <h1 className="md-header mb-8">Rooms</h1>
      <Tabs>
        <TabList>
          <Tab>Active</Tab>
          <Tab>Archive</Tab>
        </TabList>

        <TabPanel>
          <Search />
        </TabPanel>
        <TabPanel>
          <Search />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Archive;
