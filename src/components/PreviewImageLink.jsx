/* eslint-disable react/prop-types */
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { t } from "i18next";
import Fancybox from "./Fancybox";
import ViewICon from "./icons/ViewICon";

export default function PreviewImageLink({ url }) {
  return (
    <div className="">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href={url} className="">
          <ViewICon className="" />
        </a>
      </Fancybox>
    </div>
  );
}
