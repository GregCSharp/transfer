export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnowAs: string;
    recipientPhotUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
