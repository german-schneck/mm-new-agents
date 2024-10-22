import { ExampleModal } from "./components/ExampleModal";
import { BaseModalProps, ModalData, ModalsIds } from "./modals.types";

/**
 * A record of modal components mapped by their respective modal IDs.
 *
 * @type {Record<ModalsIds, React.FC<BaseModalProps<ModalData[ModalsIds]>>>}
 */
export const modals: Record<ModalsIds, React.FC<BaseModalProps<ModalData[ModalsIds]>>> = {
  [ModalsIds.EXAMPLE_MODAL]: ExampleModal,
};
