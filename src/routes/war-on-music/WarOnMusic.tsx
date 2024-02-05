import { useLayoutEffect } from "react";
import Jan17thUpdate from "./Jan17thUpdate";
import Jan13thUpdate from "./Jan13thUpdate";
import Jan10thUpdate from "./Jan10thUpdate";
import Jan9thUpdate from "./Jan9thUpdate";
import Jan8thUpdate from "./Jan8thUpdate";
import Jan7thUpdate from "./Jan7thUpdate";
import InitialStory from "./InitialStory";
import Feb5thUpdate from "./Feb5thUpdate";

export default () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <h1>Youngstown State University’s War on Music</h1>
      <Feb5thUpdate />
      <Jan17thUpdate />
      <Jan13thUpdate />
      <Jan10thUpdate />
      <Jan9thUpdate />
      <Jan8thUpdate />
      <Jan7thUpdate />
      <InitialStory />
    </>
  );
};
