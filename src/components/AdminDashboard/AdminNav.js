import React, { useState } from 'react';
import menuData from '../../data/nav2.json';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const AdminNav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMenuEnter = (menuId) => {
    setOpenMenu(menuId);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuId ? null : menuId));
  };

  const handleSubmenuClick = (submenuId) => {
    setActiveSubmenu(submenuId);
  };

  const generateSubMenu = (submenu) => {
    return (
      <ul className="menu-sub">
        {submenu.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${activeSubmenu === item.id ? 'active' : ''}`}
            onClick={() => handleSubmenuClick(item.id)}
          >
            <Link to={item.link} className="menu-link">
              <i className={`menu-icon ${item.icon}`} style={{content: "none"}}/>
              <div data-i18n={item.label}>{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const generateMenu = () => {
    return (
      <ul className="menu-inner" style={{ marginLeft: 0 }}>
        <li className='menu-item me-4'>
          <Link to="/AdminDashboard" className="app-brand-text demo menu-text fw-bold" style={{fontSize:"180%"}}>Hardik</Link>
        </li>
        {menuData.menu.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`menu-item ${activeMenu === menuItem.id ? 'active' : ''} ${openMenu === menuItem.id ? 'active open' : ''}`}
            onMouseEnter={() => handleMenuEnter(menuItem.id)}
            onMouseLeave={handleMenuLeave}
            onClick={() => handleMenuClick(menuItem.id)}
          >
            <Link to="" className="menu-link menu-toggle">
              <i className={`menu-icon ${menuItem.icon}`} />
              <div data-i18n={menuItem.label}>{menuItem.label}</div>
            </Link>
            {menuItem.submenu && generateSubMenu(menuItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        position: 'fixed',
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
      }}
    >
      <Helmet>
                <title> Admin Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                {/* <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href='../assets/vendor/css/rtl/core.css' className="template-customizer-core-css"/>
                <link rel="stylesheet" href='../assets/vendor/css/rtl/theme-default.css' className="template-customizer-theme-css"/>
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" /> */}

            </Helmet>

      {generateMenu()}
      {/* ... other code ... */}
    </aside>
  );
};

export default AdminNav;
