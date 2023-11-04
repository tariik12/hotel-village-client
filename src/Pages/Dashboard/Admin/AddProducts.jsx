import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddFood from '../../../Components/AddProduts/AddFood';
import AddRoom from '../../../Components/AddProduts/AddRoom';
import AddSpa from '../../../Components/AddProduts/AddSpa';


const AddProducts = () => {
    return (
        <div className='text-center pt-5'>
       <Tabs>
    <TabList>
      <Tab>Food</Tab>
      <Tab>Room</Tab>
      <Tab>Spa</Tab>
    </TabList>

    <TabPanel>
     <AddFood></AddFood>
    </TabPanel>
    <TabPanel>
     <AddRoom></AddRoom>
    </TabPanel>
    <TabPanel>
  <AddSpa></AddSpa>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default AddProducts;