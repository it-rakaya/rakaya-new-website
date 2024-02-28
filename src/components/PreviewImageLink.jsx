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
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="w-full rounded-xl">
              <div className="flex items-center w-full p-2 rounded-md cursor-pointer ">
                <ViewICon className="" />
                {/* <p className="text-dark">{url?.name}</p> */}
              </div>
            </div>
          </div>
        </a>
      </Fancybox>
    </div>
  );
}
