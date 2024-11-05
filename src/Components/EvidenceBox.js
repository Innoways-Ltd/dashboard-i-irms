import React, { useState } from 'react'
import { Table, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { FaDownload } from 'react-icons/fa'
import classnames from 'classnames'
import "../assets/css/evidence.scss"

const EvidenceBox = ({ item }) => {
  const [activeTab, setActiveTab] = useState('1')

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const data = [
    { name: 'ISO 14001', status: 'Pending' },
    { name: 'Carbon Trust Standard', status: 'Done', hasAttachment: true },
    { name: 'Leadership in Energy and Environmental Design (LEED)', status: 'Done', hasAttachment: true }
  ]

  return (
    <div className="evidence-management-container">
      <h5 className='text-left'>{item?.data?.header_title || "Evidence Management"}</h5>
      <Nav tabs>
        {item?.data?.categories?.map((item, index) => {
          return (
            <NavItem key={index}>
              <NavLink
                className={classnames({ active: activeTab === item })}
                onClick={() => { toggleTab(item) }}
              >
                {item}
              </NavLink>
            </NavItem>
          )
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <Table responsive>
            <thead>
              <tr>
                {
                  item?.data?.columns.map(i => {
                    return <th key={i?.key}>{i?.title}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {item?.data?.items.map((item, index) => (
                <tr key={index}>
                  <td className='text-start'>{item.name}</td>
                  <td>
                    {item.hasAttachment && (
                      <FaDownload size={18} style={{ cursor: 'pointer' }} />
                    )}
                  </td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TabPane>
        {/* Add TabPane components for other tabs if necessary */}
      </TabContent>
      {item?.data?.items.length > 0 &&
        <div className="last-btn-block">
          <div className="line-border"></div>
          <div className="see-all-button">
            <a href="#">
              <div>{item?.data?.view_all_text}</div>
            </a>
          </div>
        </div>
      }
    </div>
  )
}

export default EvidenceBox