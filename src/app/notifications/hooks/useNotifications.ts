import { create } from "zustand";

import { Toast, Dialog, NotificationsState, NotificationTypes, NotificationData } from "../notifications.types";

/**
 * The initial state for the notifications.
 *
 * @type {NotificationsState}
 * @property {Toast[]} toasts - The list of toast notifications, initially an empty array.
 * @property {Dialog | null} dialog - The dialog notification, initially set to null.
 */
const initialState: NotificationsState = {
  toasts: [],
  dialog: null,
};

/**
 * Type representing the properties and methods for the useNotification hook.
 *
 * @extends {NotificationsState}
 * @property {<K extends NotificationTypes>(id: K, data: NotificationData[K]) => void} createNotification - Function to create a notification with specified identifier and data.
 * @property {() => void} closeNotification - Function to close the currently open notification and reset the state.
 */
type UseNotificationProps = NotificationsState & {
  createNotification: <K extends NotificationTypes>(id: K, data: NotificationData[K]) => void;
  closeNotification: () => void;
};

/**
 * Custom hook for managing notifications.
 *
 * Provides functionality to create and close notifications with associated data.
 *
 * @returns {{ toasts: Toast[], dialog: Dialog | null, createNotification: <K extends NotificationTypes>(id: K, data: NotificationData[K]) => void, closeNotification: () => void }} The notification state and control methods.
 */
export const useNotifications = create<UseNotificationProps>((set) => ({
  toasts: [],
  dialog: null,

  /**
   * Creates a notification with specified identifier and data.
   *
   * @param {K} id - The identifier of the notification to create.
   * @param {NotificationData[K]} data - The data to associate with the notification.
   */
  createNotification: <K extends NotificationTypes>(id: K, data: NotificationData[K]) =>
    set((currentState) => {
      switch (id) {
        case NotificationTypes.DIALOG:
          return {
            ...currentState,
            dialog: data as Dialog,
          };
        case NotificationTypes.TOAST:
          return {
            ...currentState,
            toasts: [
              ...currentState.toasts,
              {
                id: crypto.randomUUID(),
                ...data,
              } as Toast,
            ],
          };
        default:
          return currentState;
      }
    }),

  /**
   * Closes the currently open notification and resets the state.
   */
  closeNotification: () => set(() => ({ ...initialState })),
}));
