import { Client, Account } from "appwrite";
const client = new Client();

client
  .setEndpoint(`${process.env.REACT_APP_ENDPOINT}`)
  .setProject(`${process.env.REACT_APP_PROJECT_ID}`);

const account = new Account(client);

export const sdk = {
  register: async (platform, success, failure) => {
    //create oauth2 session
    account.createOAuth2Session(platform, success, failure);
  },

  getAccount: async () => {
    //get account data
    return await account.get();
  },

  getSession: async () => {
    //get current session data
    return await account.getSession("current");
  },

  logout: async () => {
    return await account.deleteSession("current");
  },
};
