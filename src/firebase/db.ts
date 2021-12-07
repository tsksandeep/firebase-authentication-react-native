import { ref, set, get, child } from "firebase/database";

import { FirebaseDB } from "./config";

export interface UserData {
  userId: string;
  name?: string;
  phoneNumber?: string;
}

export class UserExistsError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, UserExistsError.prototype);
  }
}

export class UserNotExistsError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, UserNotExistsError.prototype);
  }
}

const dbRef = ref(FirebaseDB);

export const writeUserData = async (userData: UserData): Promise<any> => {
  const snapshot = await get(child(dbRef, `users/${userData.userId}`));
  if (snapshot.exists()) {
    return new UserExistsError(`user ${userData.userId} already exists`);
  }

  await set(ref(FirebaseDB, `users/${userData.userId}`), {
    name: userData.name,
    phoneNumber: userData.phoneNumber,
  });

  return null;
};

export const readUserData = async (userId: string): Promise<any> => {
  const snapshot = await get(child(dbRef, `users/${userId}`));
  if (
    !snapshot.exists() ||
    !snapshot?.val()?.name ||
    !snapshot?.val()?.phoneNumber
  ) {
    return new UserNotExistsError(`user ${userId} does not exists`);
  }

  return {
    userId: userId,
    name: snapshot.val().name,
    phoneNumber: snapshot.val().phoneNumber,
  };
};
