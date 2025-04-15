import { useChatStore } from "../store/useChatStore"
import NoChatSelected from "../components/NoChatSelected"
import ChatContainer from "../components/ChatContainer"
import SideBar from "../components/SideBar"




const HomePage = () => {
   const {selectedUser} = useChatStore()
   //onsole.log(selectedUser)
  return (
    <div className="h-screen pt-[90px] bg-base-200">
      <div className="flex items-center justify-center pt-20px">
         <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
               <SideBar />

               {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
         </div>
      </div>
    </div>
  )
}

export default HomePage