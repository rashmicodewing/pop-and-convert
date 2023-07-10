import NotificationsTable from "./NotificationsTable"

export default function Notifications(){
    return <>
    <h3>All Notifications</h3>
    <div>
        <input type="text" placeholder="What are you looking for..."/>
        <button className="btn btn-primary">Add Notification</button>
    </div>
    <NotificationsTable/>
    </>
}