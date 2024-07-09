/**
 * Type representing the base properties for a notification component.
 *
 * @template T - The type of additional properties for the notification.
 * @property {T} - The additional properties for the notification.
 * @property {() => void} handleClose - A function to handle the closing of the notification.
 */
export type BaseNotificationProps<T> = T & {
  handleClose: () => void;
};

/**
 * Interface representing the state of notifications.
 *
 * @property {Toast[]} toasts - The list of toast notifications.
 * @property {Dialog | null} dialog - The dialog notification, which can be null if no dialog is active.
 */
export interface NotificationsState {
  toasts: Toast[];
  dialog: Dialog | null;
}

/**
 * Enum representing the different types of modal identifiers.
 */
export enum NotificationTypes {
  TOAST = "TOAST",
  DIALOG = "DIALOG",
}

/**
 * Interface representing the data structure for a toast notification.
 *
 * @property {string} title - The title of the toast notification.
 * @property {string} message - The message content of the toast notification.
 * @property {Object} [configuration] - Optional configuration for the toast notification.
 * @property {number} [configuration.duration] - The duration for which the toast notification is displayed.
 */
export interface Toast {
  id: string;
  title: string;
  message: string;
  configuration?: {
    duration: number;
  };
}

/**
 * Interface representing the data structure for a dialog notification.
 *
 * @property {string} title - The title of the dialog notification.
 * @property {string} message - The message content of the dialog notification.
 * @property {() => void} onConfirm - The function to call when the dialog is confirmed.
 * @property {() => void} [onCancel] - Optional function to call when the dialog is canceled.
 */
export interface Dialog {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

/**
 * Type representing the mapping of modal identifiers to their respective data structures.
 */
export type NotificationData = {
  [NotificationTypes.TOAST]: Toast;
  [NotificationTypes.DIALOG]: Dialog;
};
