import React from 'react';
import { SidebarComponentProps } from './types';
import { icons } from 'constants/icons';
import './index.scss';

const { remove } = icons;

const SidebarComponent: React.FC<SidebarComponentProps> = ({ Sidebar, closeSidebar, openSidebar }) => {
  const ChildComponent = Sidebar.sidebarComponent;
  const sidebarProps = { ...Sidebar.props, closeSidebar, openSidebar };
  return (
    <aside className={`sidebar-wrp ${Sidebar.sidebarOpen ? 'sidebar-wrp--open' : 'sidebar-wrp--close'}`}>
      <div className={'sidebar-wrp__overlay'} onClick={closeSidebar}></div>
      <div className={'sidebar-wrp__container'}>
        <div className={'sidebar-wrp__header'}>
          <p>{sidebarProps.title}</p>
          <button className={'sidebar-wrp__close-btn'} onClick={closeSidebar}>
            <i className={remove}></i>
          </button>
        </div>
        <div className={'sidebar-wrp__main'}>
          {ChildComponent && <ChildComponent sidebarProps={sidebarProps} />}
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
