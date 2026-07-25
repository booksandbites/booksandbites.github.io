import { createMediaQuery } from "@solid-primitives/media";

const isMobile = createMediaQuery("(max-width: 768px)");

export const deviceStore = {
  get isMobile() {
    return isMobile(); // do NOT forget the `()`
  },
};
