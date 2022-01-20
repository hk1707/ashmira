import Nav from './AshmiraMainNav';
import MENU_QUERY from "../../graphql_query/menu";
import { useQuery } from '@apollo/client';
//import Loader from "../../components/loader";
 

const Menu = ( ) => {

    const {
        data,
        loading,
        error
      } = useQuery(MENU_QUERY);
     
      if (loading) return true;
      if (error) return true;
      if (!data) return <p>Not found</p>;

      const menulist = data.menus.nodes[0].menuItems.edges;
      const locations = data.menus.nodes[0].locations;
      const locations_check = locations.includes('HCMS_MENU_HEADER');
 
    return(<>
        { locations_check &&
           <Nav key={menulist.id}  menuitems={menulist} />
        }
        </>)
}


export default Menu;
