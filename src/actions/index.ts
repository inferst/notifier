export const addMessage = (title: string) => ({type: 'ADD_MESSAGE', title});
export const deleteAllMessages = () => ({type: 'DELETE_ALL_MESSAGES'});
export const markAllMessagesRead = () => ({type: 'MARK_ALL_MESSAGES_READ'});
export const setOpenNotify = (isOpen: boolean) => ({type: 'SET_OPEN_NOTIFY', isOpen});
