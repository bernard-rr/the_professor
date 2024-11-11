import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { eq } from "drizzle-orm";
import ChatSideBar from "@/components/ChatSideBar";
import PDFViewer from "@/components/PDFViewer";
import ChatComponent from "@/components/ChatComponent";


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
            <div className="w-full h-screen flex" style={{overflow: 'hidden'}}>
                <div className="w-[25%]" style={{overflowY: 'scroll'}}>
                    <ChatSideBar chats={_chats} chatId={parseInt(chatId)} />
                </div>
                <div className="w-[45%]">
                    <PDFViewer pdf_url={currentChat?.pdfUrl || ''} />
                </div>
                <div className="w-[35%] border-l-4 border-l-slate-200" style={{overflowY: 'scroll'}}>
                    <ChatComponent chatId={parseInt(chatId)} />
                </div>
            </div>
    );
};
export default ChatPage;
