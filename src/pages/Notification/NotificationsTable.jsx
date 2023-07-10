
import { useState } from "react"
import Notifications from "."

const defaultNotifications = [
    {
        id: 1,
        title: "Notification 1",
        type: "sticky",
        stats: 300,
        status: 'active',
    },
    {
        id: 2,
        title: "Notification 2",
        type: "popup",
        stats: 400,
        status: 'inactive',
    },
    {
        id: 3,
        title: "Notification 3",
        type: "popup",
        stats: 500,
        status: 'active',
    },
    {
        id: 4,
        title: "Notification 4",
        type: "sticky",
        stats: 600,
        status: 'inactive',
    }
]

const NotificationsTable = () => {

    const [notifications, setNotifications] = useState(defaultNotifications)

    const [selectedNotifications, setSelectedNotifications] = useState([1])

    return <table className="table">
        <thead>
            <tr>
                <th scope="col"><input type="checkbox" checked = { selectedNotifications.length === notifications.length } onChange={() => {
                    setSelectedNotifications(
                        selectedNotifications.length === notifications.length ? [] 
                        : notifications.map((newId) => newId.id)
                    )
                    
                }}/></th>
                <th scope="col">Notification Title</th>
                <th scope="col">Notification Type</th>
                <th scope="col">Stats</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                notifications.map(notification => {
                    const { id, title, type, stats, status } = notification
                    return <tr key={id}>
                        <th scope="row">
                            <input type="checkbox" name="checkbox" id="checkbox" checked ={ selectedNotifications.includes(id) } onChange={() => {
                                setSelectedNotifications(
                                    selectedNotifications.includes(id) ?
                                    selectedNotifications.filter( _id => _id !== id  ) :
                                    [...selectedNotifications, id]
                                    )
                                
                                }
                            } />
                        </th>
                        <td>{title}</td>
                        <td>{type}</td>
                        <td>{stats}</td>
                        <td>
                            <input type="checkbox" id="checkbox" checked={status === 'active'} onChange={() => {
                                setNotifications(
                                    notifications.map( (newNotification) =>{
                                        const{id: newId} = newNotification 
                                        if( newId == id ){
                                            newNotification.status = status === 'active' ? 'inactive' : 'active' 
                                        }
                                        return newNotification
                                    })
                                )
                            }
                            } />
                        </td>
                        <td>
                            <a href="#"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3966 25.0963C12.4349 24.7517 12.454 24.5794 12.5062 24.4184C12.5524 24.2755 12.6178 24.1396 12.7004 24.0142C12.7936 23.8729 12.9162 23.7503 13.1614 23.5052L24.1666 12.4999C25.0871 11.5795 26.5795 11.5795 27.4999 12.4999C28.4204 13.4204 28.4204 14.9128 27.4999 15.8333L16.4947 26.8385C16.2495 27.0836 16.127 27.2062 15.9857 27.2994C15.8603 27.3821 15.7243 27.4474 15.5815 27.4937C15.4204 27.5458 15.2481 27.5649 14.9036 27.6032L12.0833 27.9166L12.3966 25.0963Z" stroke="#ABABAB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_377_586)">
                                        <path d="M4.16663 12.5001C3.39006 12.5001 3.00177 12.5001 2.69549 12.3732C2.28711 12.2041 1.96265 11.8796 1.79349 11.4712C1.66663 11.1649 1.66663 10.7767 1.66663 10.0001V4.33341C1.66663 3.39999 1.66663 2.93328 1.84828 2.57676C2.00807 2.26316 2.26304 2.00819 2.57664 1.8484C2.93316 1.66675 3.39987 1.66675 4.33329 1.66675H9.99996C10.7765 1.66675 11.1648 1.66675 11.4711 1.79362C11.8795 1.96277 12.2039 2.28723 12.3731 2.69561C12.5 3.00189 12.5 3.39018 12.5 4.16675M10.1666 18.3334H15.6666C16.6 18.3334 17.0668 18.3334 17.4233 18.1518C17.7369 17.992 17.9918 17.737 18.1516 17.4234C18.3333 17.0669 18.3333 16.6002 18.3333 15.6667V10.1667C18.3333 9.23333 18.3333 8.76662 18.1516 8.4101C17.9918 8.09649 17.7369 7.84153 17.4233 7.68174C17.0668 7.50008 16.6 7.50008 15.6666 7.50008H10.1666C9.23321 7.50008 8.7665 7.50008 8.40998 7.68174C8.09637 7.84153 7.8414 8.09649 7.68162 8.4101C7.49996 8.76662 7.49996 9.23333 7.49996 10.1667V15.6667C7.49996 16.6002 7.49996 17.0669 7.68162 17.4234C7.8414 17.737 8.09637 17.992 8.40998 18.1518C8.7665 18.3334 9.23321 18.3334 10.1666 18.3334Z" stroke="#ABABAB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_377_586">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3333 15.0001V14.3334C23.3333 13.4 23.3333 12.9333 23.1517 12.5768C22.9919 12.2632 22.7369 12.0082 22.4233 11.8484C22.0668 11.6667 21.6001 11.6667 20.6667 11.6667H19.3333C18.3999 11.6667 17.9332 11.6667 17.5767 11.8484C17.2631 12.0082 17.0081 12.2632 16.8483 12.5768C16.6667 12.9333 16.6667 13.4 16.6667 14.3334V15.0001M18.3333 19.5834V23.7501M21.6667 19.5834V23.7501M12.5 15.0001H27.5M25.8333 15.0001V24.3334C25.8333 25.7335 25.8333 26.4336 25.5608 26.9684C25.3212 27.4388 24.9387 27.8212 24.4683 28.0609C23.9335 28.3334 23.2335 28.3334 21.8333 28.3334H18.1667C16.7665 28.3334 16.0665 28.3334 15.5317 28.0609C15.0613 27.8212 14.6788 27.4388 14.4392 26.9684C14.1667 26.4336 14.1667 25.7335 14.1667 24.3334V15.0001" stroke="#ABABAB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default NotificationsTable
