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

const ChatPage = async ({ params}: ChatPageProps) => {
    const {chatId} = await params
    const { userId } = await auth();
    if (!userId) {
        return redirect("/sign-in");
    }
    const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
    if (!_chats) {
        return redirect("/");
    }
    if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
        return redirect("/");
    }

    const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
    console.log('Bucket:', process.env.NEXT_PUBLIC_S3_BUCKET_NAME);
    console.log('File Key:', currentChat?.fileKey)
    console.log('PDF URL:', currentChat?.pdfUrl);
    
    return (
            <div className="w-full h-screen flex">
                <div className="w-1/4">
                    <ChatSideBar chats={_chats} chatId={parseInt(chatId)} />
                </div>
                <div className="w-1/2">
                    <PDFViewer pdf_url={currentChat?.pdfUrl || ''} />
                </div>
                <div className="w-1/4">
                    <h1>Chat Response</h1>
                </div>
            </div>
    );
    
    

};


export default ChatPage;
