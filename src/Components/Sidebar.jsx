import { React, useState } from 'react';
import logo from '../assets/logo.png';
import { RiDashboard2Line, RiArtboardLine, RiArticleLine, RiStackLine, RiLayout6Line, RiBriefcaseLine, RiSurveyLine, RiContrastDrop2Fill } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FaRegCompass, FaAngleRight } from "react-icons/fa";
import { FiPieChart, FiMapPin } from "react-icons/fi";
import { RiShareLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const sideBarData = [
  {
    item: "Main",
    subOptions: [
      { icon: <RiDashboard2Line />, optionItem: 'Dashboard', path: './basicElements' }
    ]
  },
  {
    item: "App",
    subOptions: [
      { icon: <AiOutlineCalendar />, optionItem: 'Calendar', path: './calendar' },
      { icon: <RiArtboardLine />, optionItem: 'Kanban',path:'./kanban' },
      {
        icon: <RiArticleLine />,
        optionItem: 'Invoice',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{ subItem: 'Invoice Report', subPath: './invoice-report' }, { subItem: 'Invoice', subPath: './invoice' },],
      },
    ]
  },
  {
    item: "Extra Pages",
    subOptions: [
      {
        icon: <RiStackLine />,
        optionItem: 'Pages',
        subIcon: <FaAngleRight />,
        subInnerOptions: [
          { subItem: 'Starter Page',subPath:'./' }, { subItem: 'Contact List' }, { subItem: 'Profile',subPath:'' }, { subItem: 'Timeline' }, { subItem: 'FAQ' },
          { subItem: 'Pricing' }, { subItem: 'Maintenance' }, { subItem: 'Error 404' }, { subItem: 'Error 404-alt' }, { subItem: 'Error 500' }
        ],
      },
      {
        icon: <VscAccount />,
        optionItem: 'Authentication',
        subIcon: <FaAngleRight />,
        subInnerOptions: [
          { subItem: 'Login' }, { subItem: 'Register' }, { subItem: 'Logout' }, { subItem: 'Forgot Password' }, { subItem: 'Lock Screen' }
        ]
      },
      { icon: <RiLayout6Line />, optionItem: 'Layouts' }
    ]
  },
  {
    item: "Components",
    subOptions: [
      {
        icon: <RiBriefcaseLine />,
        optionItem: 'Base UI',
        subIcon: <FaAngleRight />,
        subInnerOptions: [
          { subItem: 'Accordions' }, { subItem: 'Alerts' }, { subItem: 'Avarts' }, { subItem: 'Buttons' }, { subItem: 'Button group' },
          { subItem: 'Badges' }, { subItem: 'Breadcrumb' }, { subItem: 'Cards' }, { subItem: 'Carousel' }, { subItem: 'Collapse' },
          { subItem: 'Close Button' }, { subItem: 'Dropdowns' }, { subItem: 'Embed Video' }, { subItem: 'Grid' }, { subItem: 'Links' },
          { subItem: 'List Group' }, { subItem: 'Modals' }, { subItem: 'Navbar' }, { subItem: 'Offcanvas' }, { subItem: 'Placeholders' },
          { subItem: 'Pagination' }, { subItem: 'Popovers' }, { subItem: 'Progress' }, { subItem: 'Scrollspy' }, { subItem: 'Spinners' },
          { subItem: 'Tosts' }, { subItem: 'Tabs' }, { subItem: 'Tooltips' }, { subItem: 'Typography' }, { subItem: 'Utilities' }
        ]
      },
      {
        icon: <FaRegCompass />,
        optionItem: 'Extended UI',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{ subItem: 'Portlets' }, { subItem: 'Scrollbar' }, { subItem: 'Range Slider' }]
      },
      {
        icon: <RiContrastDrop2Fill />,
        optionItem: 'Icons',
        subIcon: <FaAngleRight />,
        subInnerOptions: [
          { subItem: 'Lucide Icons' }, { subItem: 'Remix Icons' }, { subItem: 'Bootstrap Icons' }, { subItem: 'Material Design Icons' }
        ]
      },
      {
        icon: <FiPieChart />,
        optionItem: 'Charts',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{ subItem: 'Chartjs' }, { subItem: 'Sparkline Charts' }]
      },
      {
        icon: <RiSurveyLine />,
        optionItem: 'Forms',
        subIcon: <FaAngleRight />,
        subInnerOptions: [
          //I want to when click this item of basic element so only open componenet o basic element
          {
            subItem: 'Basic Elements'}

          , {subItem:'Form Advanced'}, {subItem:'Form Validation'},
          {subItem:'Form Wizard'}, {subItem:'File Uploads'}, {subItem:'Form Editors'}, {subItem:'Image Crop'},
        {subItem:'X Editable'}
        ]
      },
      {
        icon: <RiLayout6Line />,
        optionItem: 'Tables',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{subItem:'Basic Tables'}, {subItem:'Data Tables'}, {subItem:'Editable Tables'}, {subItem:'Responsive Table'}]
      },
      {
        icon: <FiMapPin />,
        optionItem: 'Maps',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{subItem:'Google Maps'}, {subItem:'Vector Maps'}]
      },
      {
        icon: <RiShareLine />,
        optionItem: 'Multi Level',
        subIcon: <FaAngleRight />,
        subInnerOptions: [{subItem:'Level 1.1'}, {subItem:'Level 1.2'}, {subItem:'Level 1.3'}]
      },
    ]
  }
];

const Sidebar = ({ sidebarToggle }) => {
  const [openDropdown, setOpenDropdown] = useState({ index: null, subIndex: null });
  // const [active, setActive] = useState(false);

  const dropdownHandler = (subIndex, index) => {
    if (openDropdown.index === index && openDropdown.subIndex === subIndex) {
      setOpenDropdown({ index: null, subIndex: null });
    //  setActive(null)
    } else {
      setOpenDropdown({ index, subIndex });
      // setActive(subIndex)
    }
  };

  return (

    <div className={`sm:w-[300px]  w-[250px] z-[50] fixed  top-0 h-screen overflow-y-auto bg-black transition-all ease-in-out duration-300  ${sidebarToggle ? 'translate-x-[-100%] opacity-0' : 'translate-x-[0] opacity-[1]'} group`}>
      <div className='w-full p-4 flex flex-col justify-around items-center h-full '>
        <div className='p-5 fixed top-0 cursor-pointer bg-black w-full z-[20]'>
          <img src={logo} alt="Logo" className='w-[170px] object-cover block m-auto' />
        </div>
        <div className='w-full mt-[70px]'>
          <ul className='text-white flex flex-col gap-2'>
            {sideBarData.map((sidebarItem, index) => (
              <li key={index} className='flex flex-col gap-5' >
                <span className='pt-0 px-6 font-bold'>{sidebarItem.item}</span>
                <ul className='flex flex-col gap-4'>
                  {sidebarItem.subOptions.map((sidebarOption, subIndex) => (
                    <li className={`p-2  flex flex-wrap items-center gap-3 cursor-pointer`}  key={subIndex} onClick={() => dropdownHandler(subIndex, index)}>
                      {sidebarOption.path ? <NavLink className={`flex p-2 w-full flex-wrap items-center gap-3 `} to={sidebarOption.path}><span className='text-[20px] '>{sidebarOption.icon}</span>{sidebarOption.optionItem}</NavLink> : <><span className='text-[20px] '>{sidebarOption.icon} </span><span>{sidebarOption.optionItem}</span></>}
{/* ${active === subIndex ? 'bg-[#ffffff12] text-[#007aff]':'' } */}
                      {sidebarOption.subIcon && (
                        <span className={`ml-auto transition-all ease-in-out duration-300 ${openDropdown.subIndex === subIndex && openDropdown.index === index ? 'rotate-[90deg]' : 'rotate-[0deg]'}`}>
                          {sidebarOption.subIcon}
                        </span>
                      )}
                      {sidebarOption.subInnerOptions && (
                        <div className={`overflow-hidden cursor-default transition-all ease-in-out duration-500 ${openDropdown.subIndex === subIndex && openDropdown.index === index ? 'max-h-[1100px]' : 'max-h-0'}`}>
                          {sidebarOption.subInnerOptions.map((innerItem, innerIndex) => (
                            <NavLink to={innerItem.subItem}><span className={`block w-full px-8 transition-all mt-3  ease-in-out duration-500 cursor-pointer`} key={innerIndex}>{innerItem.subItem}</span></NavLink>
                          //  {innerItem.subPath ? <NavLink to={innerItem.subPath}> <span className={`block w-full px-8 transition-all mt-3  ease-in-out duration-500 cursor-pointer`} key={innerIndex}>{innerItem.subItem}</span></NavLink>: <><span className={`block w-full px-8 transition-all mt-3  ease-in-out duration-500 cursor-pointer`} key={innerIndex}>{innerItem.subItem}</span></>}
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
