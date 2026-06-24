import { create } from "zustand";

import {
  Toast,
  Dialog,
  NotificationsState,
  NotificationTypes,
  NotificationOpenData,
  NotificationCloseData,
} from "../notifications.types";

/**
 * The initial state for the notifications.
 *
 * @type {NotificationsState}
 * @property {Record<string, Toast>} toasts - The record of toast notifications, initially an empty object.
 * @property {Dialog | null} dialog - The dialog notification, initially set to null.
 */
const initialState: NotificationsState = {
  toasts: {},
  dialog: null,
};

/**
 * Type representing the properties and methods for the useNotification hook.
 *
 * @extends {NotificationsState}
 * @property {<K extends NotificationTypes>(id: K, data: NotificationOpenData[K]) => void} createNotification - Function to create a notification with specified identifier and data.
 * @property {<K extends NotificationTypes>(id: K, data: NotificationCloseData[K]) => void} closeNotification - Function to close the specified notification.
 */
type UseNotificationProps = NotificationsState & {
  createNotification: <K extends NotificationTypes>(id: K, data: NotificationOpenData[K]) => void;
  closeNotification: <K extends NotificationTypes>(id: K, data?: NotificationCloseData[K]) => void;
};

/**
 * Custom hook for managing notifications.
 *
 * Provides functionality to create and close notifications with associated data.
 *
 * @returns {UseNotificationProps} The notification state and control methods.
 */
export const useNotifications = create<UseNotificationProps>((set) => ({
  ...initialState,

  /**
   * Creates a notification with specified identifier and data.
   *
   * @param {K} id - The identifier of the notification to create.
   * @param {NotificationOpenData[K]} data - The data to associate with the notification.
   */
  createNotification: <K extends NotificationTypes>(id: K, data: NotificationOpenData[K]) =>
    set((currentState) => {
      switch (id) {
        case NotificationTypes.DIALOG:
          return {
            ...currentState,
            dialog: data as Dialog,
          };
        case NotificationTypes.TOAST: {
          const toastId = crypto.randomUUID();
          return {
            ...currentState,
            toasts: {
              ...currentState.toasts,
              [toastId]: {
                id: toastId,
                ...data,
              },
            },
          };
        }

        default:
          return currentState;
      }
    }),

  /**
   * Closes the specified notification.
   *
   * @param {K} id - The identifier of the notification to close.
   * @param {NotificationCloseData[K]} data - The data to identify the notification to close.
   */
  closeNotification: <K extends NotificationTypes>(id: K, data?: NotificationCloseData[K]) =>
    set((currentState) => {
      switch (id) {
        case NotificationTypes.DIALOG:
          return {
            ...currentState,
            dialog: null,
          };
        case NotificationTypes.TOAST: {
          const toastId = data as Toast["id"];
          const newToasts = { ...currentState.toasts };
          delete newToasts[toastId];
          return {
            ...currentState,
            toasts: newToasts,
          };
        }
        default:
          return currentState;
      }
    }),
}));
