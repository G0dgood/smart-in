import { Link, useLocation } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent
} from 'react-pro-sidebar';
import { FaFolderOpen, FaStoreAlt } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { BsLaptopFill } from 'react-icons/bs';
import { GiSpanner } from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';



const Sidebar = ({
  toggled,
  handleToggleSidebar,
  collapseNav
}: any) => {


  const { pathname } = useLocation();
  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      collapsed={collapseNav}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >

      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem className='Side__Content' active={pathname === '/dashboard'} icon={<AiIcons.AiFillDashboard size={23} />} suffix={<span className="badge red">NEW</span>} >
            Dashboard  <Link to="/dashboard" /> </MenuItem>


          <MenuItem className='Side__Content' active={pathname === '/laptoprequests'} icon={<BsLaptopFill size={23} />}>
            Laptop Requests <Link to="/laptoprequests" />
          </MenuItem>

          <MenuItem className='Side__Content' active={pathname === '/repairs'} icon={<GiSpanner size={23} />}>Repairs<Link to="/repairs" /> </MenuItem>

          <MenuItem className='Side__Content' active={pathname === '/store'} icon={<FaStoreAlt size={23} />}>Store<Link to="/store" /> </MenuItem>
          {/* <MenuItem className='Side__Content' active={pathname === '/users'} icon={<HiUsers size={23} />}>Users<Link to="/users" /> </MenuItem> */}
          <SubMenu suffix={<span className="badge yellow">3</span>} title={'Users'} icon={<HiUsers size={23} />}>
            <MenuItem className='Side__Content' active={pathname === '/registeruser'}>  <Link to="/registeruser" />Register User</MenuItem>

            <MenuItem className='Side__Content' active={pathname === '/createclient'}> <Link to="/createclient" />Create Client</MenuItem>
            <MenuItem className='Side__Content' active={pathname === '/createrole'}> <Link to="/createrole" />Create Role</MenuItem>
          </SubMenu>
          <MenuItem className='Side__Content' active={pathname === '/allRecords'} icon={<FaFolderOpen size={23} />}>All Records<Link to="/allRecords" />  </MenuItem>










        </Menu>
      </SidebarContent>

    </ProSidebar>
  );
};

export default Sidebar;
