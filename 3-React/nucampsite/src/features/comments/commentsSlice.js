import { COMMENTS } from "../../app/shared/COMMENTS";

import React from "react";

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
