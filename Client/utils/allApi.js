const host = import.meta.env.VITE_BACKEND_API_KEY; // Note the "VITE_" prefix is mandatory
export const sendContact = `${host}send/contact`;