import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { eq } from "drizzle-orm";
import ChatSideBar from "@/components/ChatSideBar";
import PDFViewer from "@/components/PDFViewer";


type ChatPageProps = {
    params: {
        chatId: string;
    };
};

const ChatPage =  () => {
    // const {chatId} = await params
    // const { userId } = await auth();
    // if (!userId) {
    //     return redirect("/sign-in");
    // }
    // const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
    // if (!_chats) {
    //     return redirect("/");
    // }
    // if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    //     return redirect("/");
    // }

    // const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));


    return (
        // <div className="">
        // hajksfdjhkfdsankjdsafhjkdfashjkdsa
        //         {/* chat sidebar */}
        //         <div className="w-['25%'] bg-yellow"> 
        //             {/* <ChatSideBar chats={_chats} chatId={parseInt(chatId)} /> */}
        //         </div>

        //         {/* pdf viewer */}
        //         <div className="w-['30%'] bg-red">
        //             {/* <PDFViewer pdf_url={currentChat?.pdfUrl || ""}/> */}
        //         </div>

        //         {/* chat component */}
        //         <div className="w-['30%'] bg-black">
        //             {/* <ChatComponent /> */}
        //         </div>
        // </div>
        < div style={{ width: "100%", height: "100vh", display: 'flex' }}>
            <div style={{ width: "30%", }}>
                {/* <ChatSideBar chats={_chats} chatId={parseInt(chatId)} /> */}
            </div>
            <div style={{ width: "40%", }}>
                <PDFViewer file={ "/dummypdf.pdf"} />
            </div>
            <div style={{ width: "30%", }}>
                <h1>Chat Response</h1>
            </div>
        </div>
    );

};

export default ChatPage;
