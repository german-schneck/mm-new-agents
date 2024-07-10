/**
 * Type representing the base properties for a notification component.
 *
 * @template T - The type of additional properties for the notification.
 * @property {T} - The additional properties for the notification.
 * @property {() => void} handleClose - A function to handle the closing of the notification.
 */
export type BaseNotificationProps<T> = T & {
  handleClose: T extends { id: string } ? (id: string) => void : () => void;
};

/**
 * Interface representing the state of notifications.
 *
 * @interface NotificationsState
 * @property {Record<string, Toast>} toasts - A record of toast notifications, indexed by their unique identifier.
 * @property {Dialog | null} dialog - The dialog notification, which can be null if no dialog is active.
 */
export interface NotificationsState {
  toasts: Record<Toast["id"], Toast>;
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
 * @property {Object} [config] - Optional configuration for the toast notification.
 * @property {number} [config.duration] - The duration for which the toast notification is displayed.
 */
export interface Toast {
  id: string;
  title: string;
  message: string;
  config?: {
    duration: number;
  };
}

/**
 * Type representing the callback properties for dialog handlers.
 *
 * @typedef {Object} DialogHandlerCallbackProps
 * @property {() => void} closeDialog - Function to handle the closing of the dialog.
 */
export type DialogHandlerCallbackProps = {
  closeDialog: () => void;
};

/**
 * Interface representing the data structure for a dialog notification.
 *
 * @interface Dialog
 * @property {string} title - The title of the dialog notification.
 * @property {string} message - The message content of the dialog notification.
 * @property {Object} onConfirm - The configuration for the confirm action of the dialog.
 * @property {string} onConfirm.text - The text to display on the confirm button.
 * @property {() => void} onConfirm.handler - The function to call when the confirm button is clicked.
 * @property {Object} [onCancel] - Optional configuration for the cancel action of the dialog.
 * @property {string} onCancel.text - The text to display on the cancel button.
 * @property {() => void} onCancel.handler - The function to call when the cancel button is clicked.
 */
export interface Dialog {
  title: string;
  message: string;
  onConfirm: {
    text: string;
    handler: (callback: DialogHandlerCallbackProps) => void;
  };
  onCancel: {
    text: string;
    handler: (callback: DialogHandlerCallbackProps) => void;
  };
}

/**
 * Type representing the mapping of notification types to their respective data structures when opening a notification.
 *
 * @type {Object}
 * @property {Omit<Toast, "id">} NotificationTypes.TOAST - The data structure for a toast notification, excluding the id.
 * @property {Dialog} NotificationTypes.DIALOG - The data structure for a dialog notification.
 */
export type NotificationOpenData = {
  [NotificationTypes.TOAST]: Omit<Toast, "id">;
  [NotificationTypes.DIALOG]: Dialog;
};

/**
 * Type representing the mapping of notification types to their respective data structures when closing a notification.
 *
 * @typedef {Object} NotificationCloseData
 * @property {string} [NotificationTypes.TOAST] - The unique identifier of the toast notification to close.
 * @property {null} [NotificationTypes.DIALOG] - The value indicating that the dialog notification should be closed.
 */
export type NotificationCloseData = {
  [NotificationTypes.TOAST]: Toast["id"];
  [NotificationTypes.DIALOG]: undefined;
};
